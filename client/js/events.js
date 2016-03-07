Template.footer.events({
  /** Begin Create User Events **/
  'click #newUserForm': function () {
    userNewForm();
  },
  'click #newAccountForm': function () {
    accountNewForm();
  },
  'click #newCancel': function () {
    CancelForm();
  },
  'click #newPageBack': function () {
    PageBack();
  },
  'click #newPageNext': function () {
    PageNext();
  }

  /** End Create User Events **/
});
Template.footer.helpers({
});
