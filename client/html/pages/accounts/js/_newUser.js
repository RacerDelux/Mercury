/**
 * New User Template Functions
 *
 **/
Template.newUser.onRendered(function() {
  formRendered(this);
});
Template.newUser.helpers({
  newUserSchema: function() {
    console.log("I am used!");
    return Schema.NewUser;
  },
  pageIs: function(page) {
    return getPageIs(page);
  },
  pagePercent: function() {
    return getPagePercent();
  },
  formType: function(page) {
    return getFormType(page);
  },
  fetchForm: function(page) {
    return getFetchForm(page);
  }
});
Template.newUser.events({
  'click #submitall': function() {
    formSubmit();
  }
});
/**
 *
 *
 **/

userNewForm = function() {
  setUpForm("user");
};


/** HOOKS **/

AutoForm.addHooks('FormNewUserP1', {
  before: {
    insert: function(doc) {
      if (Meteor.userId()) {
        doc.username = doc.firstName + " " + doc.lastName;
        doc.userId = Meteor.userId();
        return doc;
      }
    }
  }
});
AutoForm.addHooks('FormNewUserP2', {
  before: {
    insert: function(doc) {
      if (Meteor.userId()) {
        doc.userId = Meteor.userId();
        return doc;
      }
    }
  }
});
