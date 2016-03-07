
Template.listAll.helpers({
  listUsers: function() {
      return Meteor.users.find();
  }
});

Template.listAll.events({
});
