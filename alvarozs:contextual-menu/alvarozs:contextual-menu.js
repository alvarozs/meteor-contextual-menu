ContextualMenu = ContextualMenu || {};

ContextualMenu = {

    context: "INDEX",

    setContext: function(ctx){
        this.context = ctx;
        Session.set('context', ctx);
        return this.context;
    },

    getContext: function(){
        var ctx = Session.get('context');

        return ctx;
    }
};

Template.contextualMenu.helpers({
    context: function(){
        return ContextualMenu.getContext();
    }
});

// http://robertdickert.com/blog/2013/11/14/why-is-my-meteor-app-not-updating-reactively/
// https://gist.github.com/addyosmani/1321768

var topics = {};

jQuery.PubSub = function( id ) {
    var callbacks,
        topic = id && topics[ id ];
    if ( !topic ) {
        callbacks = jQuery.Callbacks();
        topic = {
            publish: callbacks.fire,
            subscribe: callbacks.add,
            unsubscribe: callbacks.remove
        };
        if ( id ) {
            topics[ id ] = topic;
        }
    }
    return topic;
};