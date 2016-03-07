
if (Meteor.isClient) {
  Session.setDefault("showSpinner", false);
  Session.setDefault("showCreateModal", false);
  Template.registerHelper('session',function(input){
    return Session.get(input);
  });

  Router.onBeforeAction(function () {
    $('.button-collapse').sideNav('hide'); //Close slider
      this.next();
  });
  Router.onStop(function () {
    Session.set('showCreateModal', false);
  });
  Template.login.events({
    'click #adminAcc': function () {
      Meteor.call("createAdmin");
    }
  });
  Template.ApplicationLayout.helpers({
    showSpinner: function() {
      return Session.get("showSpinner");
    }
  });
  // counter starts at 0
  Session.setDefault('counter', 0);


  Template.header.events({
    'click #menutoggle': function () {
      if($('#sidebardiv').hasClass('active')){
        $('body').css("overflow-y","hidden");
      } else {
        $('body').css("overflow-y","visible");
      }
    }
  });
  Template.header.helpers({
    isAdmin: function () {
      var role = Meteor.user().profile.roles;
      if(role.indexOf("admin") > -1) {
        return true;
      } else {
        return false;
      }
    }
  });
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  toggleSpinner = function(boolean) {
    Session.set("showSpinner", boolean);
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
