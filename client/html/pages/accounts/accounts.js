/**
 * Accounts Template Functions
 *
 **/
Template.accounts.onRendered(function () {

});
Template.accounts.events({
    'click #continue': function () {
        toggleSpinner(true);
        //show modal for account creation
        $('#modal1').closeModal({
            out_duration: 600, // Transition out duration
            complete: function () {
                Session.set('showCreateModal', true);
            }
        });
    },
    'click #nocontinue': function () {
        toggleSpinner(true);
        $('#modal1').closeModal({
            out_duration: 600, // Transition out duration
            complete: function () {
                resetFormAll();
                Session.set('showCreateModal', true);
            }
        });
    }
});
Template.accounts.helpers({
    showModal: function () {
        return Session.get('showCreateModal');
    },
    whatForm: function (theForm) {
        return Session.get('whatForm') === theForm;
    }
});
/** Functions **/
resetFormAll = function () {
    var ed = Session.get('existingDoc');
    var dl = Session.get('docLoad');
    $.each(new Array(Form[Session.get("whatForm")].length), function (index) {
        if (ed[index] !== null) {
            Form[Session.get("whatForm")][index].remove(Session.get('existingDoc')[index]._id);
            ed[index] = null;
            dl[index] = "insert";
            AutoForm.resetForm("FormNew" + capitalizeFirstLetter(Session.get("whatForm")) + "P" + (index + 1));
        }
    });
    Session.set('existingDoc', ed);
    Session.set('docLoad', dl);
};

/** Initialises local variables for new form **/
/** Sets the type of form to be used **/
setUpForm = function (type) {
    toggleSpinner(true);
    Session.set("whatForm", type);
    Session.set('docLoad', Array.apply(null, new Array(Form[type].length)).map(function () {
        return "insert";
    }));
    Session.set('existingDoc', Array.apply(null, new Array(Form[type].length)).map(function () {
        return null;
    }));
    if (!Form[type][0].findOne({userId: Meteor.userId()})) {
        //show modal for account creation
        Session.set('showCreateModal', true);
    } else {
        var loadDoc = Session.get('docLoad');
        var loadType = Session.get('existingDoc');
        //There is a form here - lets load in all pages and set session variable
        $.each(Form[type], function (index) {
            var formPart = Form[type][index].findOne({userId: Meteor.userId()});
            if (formPart) {
                loadDoc[index] = formPart;
                loadType[index] = "update";
            } else {
                return false;
            }
        });
        Session.set('existingDoc', loadDoc);
        Session.set('docLoad', loadType);
        $('#modal1').openModal({
            dismissible: false, // Modal can be dismissed by clicking outside of the modal
            opacity: 0.5, // Opacity of modal background
            in_duration: 300 // Transition in duration
            //ready: function() {} // Callback for Modal open
        });
    }
};

/** Checks to see if the
 *   next page is valid
 **/
PageNext = function () {
    if (partialValidate()) {
        $("#FormNewUserP" + Session.get('page')).submit();
        var eD = Session.get('existingDoc');
        var dL = Session.get('docLoad');
        //eD[Session.get('page')-1] = "update";
        //dL[Session.get('page')-1] = Form[Session.get('whatForm')][Session.get('page')-1].findOne({ userId: Meteor.userId() });
        Session.set('existingDoc', eD);
        Session.set('docLoad', dL);
        if (nextValid()) {
            Session.set('page', Session.get('page') + 1);
            nextValid();
        }
    }
};
nextValid = function () {
    if (Session.get('page') < Session.get('pageCount')) {
        $("#icon-back").removeClass("disabled");
        return true;
    } else {
        $("#icon-next").addClass("disabled");
        return false;
    }
};
PageBack = function () {
    if (backValid()) {
        Session.set('page', Session.get('page') - 1);
        backValid();
    }
};
backValid = function () {
    if (Session.get('page') > 1) {
        $("#icon-next").removeClass("disabled");
        return true;
    } else {
        $("#icon-back").addClass("disabled");
        return false;
    }
};
CancelForm = function () {
    $.each(new Array(Form[Session.get("whatForm")].length), function (index) {
        AutoForm.resetForm("FormNew" + capitalizeFirstLetter(Session.get("whatForm")) + "P" + (index + 1));
    });
    //show modal for account creation
    Session.set('showCreateModal', false);
};
partialValidate = function () {
    return AutoForm.validateForm("FormNew" + capitalizeFirstLetter(Session.get("whatForm")) + "P" + Session.get('page'));
};
