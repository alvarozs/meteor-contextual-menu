if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.contextualMenu.events({
    'click #add': function(){
      $.PubSub('add').publish("Button Add clicked!");
      console.log("Current Context: " + ContextualMenu.getContext());
    },
    'click #context1': function(){
      $.PubSub('context').publish("CTX 1");
    },
    'click #context2': function(){
      $.PubSub('context').publish("CTX 2");
    }
  });

  var fn1 = function(arg){
    console.log("FN1: " + arg);
  };

  var changeContext = function(ctx){
    ContextualMenu.setContext(ctx);
  };

  var fn3 = function(arg){
    console.log("FN3: " + arg);
    console.log(ContextualMenu.getContext());
  };

  Meteor.startup(function () {
    $.PubSub('add').subscribe(fn1);
    $.PubSub('context').subscribe(changeContext);
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
