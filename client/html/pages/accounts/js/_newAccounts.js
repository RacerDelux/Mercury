Template.newAccount.onRendered(function () {

    Session.set('page', 1);
    Session.set('pageCount', $(".page").length);
    nextValid();
    backValid();
    if (this.subscriptionsReady()) {
        toggleSpinner(false);
    }
});
Template.newAccount.helpers({
    newUserSchema: function () {
        console.log("I am used!");
        return Schema.NewUser;
    },
    pageIs: function (p) {
        return Session.get('page') == p;
    },
    pagePercent: function () {
        return (Session.get('page') / Session.get('pageCount')) * 100;
    },
    formType: function () {
        return Session.get('docLoad');
    },
    fetchForm: function () {
        return Session.get('existingDoc');
    }
});

accountNewForm = function () {
    setUpForm("account");
};

/** Hooks **/
AutoForm.addHooks('FormNewAccountP1', {
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
AutoForm.addHooks('FormNewAccountP2', {
    before: {
        insert: function (doc) {
            if (Meteor.userId()) {
                doc.userId = Meteor.userId();
                return doc;
            }
        }
    }
});
