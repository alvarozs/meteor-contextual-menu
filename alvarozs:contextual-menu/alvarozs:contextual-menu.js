ContextualMenu = ContextualMenu || {};

ContextualMenu = {

    context: "",

    setContext: function(ctx){
        this.context = ctx;
    },

    getContext: function(){
        return this.context;
    }
};

Template.contextualMenu.helpers({
    context: function(){
        return ContextualMenu.getContext();
    }
});

// https://gist.github.com/addyosmani/1321768

var topics = {};

jQuery.Topic = function( id ) {
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