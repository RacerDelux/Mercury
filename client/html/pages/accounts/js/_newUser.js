/**
 * New User Template Functions
 *
 **/
Template.newUser.onRendered(function () {
    console.log("Made it to here");
    Session.set('page', 1);
    Session.set('pageCount', $(".page").length);
    nextValid();
    backValid();
    console.log("Ok, you are good here");
    if (this.subscriptionsReady()) {
        toggleSpinner(false);
    }
});
Template.newUser.helpers({
    newUserSchema: function () {
        console.log("I am used!");
        return Schema.NewUser;
    },
    pageIs: function (page) {
      return getPageIs(page);
    },
    pagePercent: function () {
      return getPagePercent();
    },
    formType: function (page) {
      return getFormType(page);
    },
    fetchForm: function (page) {
      return getFetchForm(page);
    }
});
Template.newUser.events({
    'click #submitall': function () {
        var p1 = userForm[0].findOne({userId: Meteor.userId()});
        var p2 = userForm[1].findOne({userId: Meteor.userId()});
        Meteor.call("creatUser", p1, p2);
    }
});
/**
 *
 *
 **/

userNewForm = function () {
    setUpForm("user");
};


/** HOOKS **/

AutoForm.addHooks('FormNewUserP1', {
    before: {
        insert: function (doc) {
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
        insert: function (doc) {
            if (Meteor.userId()) {
                doc.userId = Meteor.userId();
                return doc;
            }
        }
    }
});
