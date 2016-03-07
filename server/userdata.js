/*Meteor.publish('thisNameDoesNotMatter', function () {
  var self = this;
  var handle = Meteor.users.find({}, {
    fields: {emails: 1, profile: 1}
  }).observeChanges({
    added: function (id, fields) {
      self.added('thisNameMatters', id, fields);
    },
    changed: function (id, fields) {
      self.changed('thisNameMatters', id, fields);
    },
    removed: function (id) {
      self.removed('thisNameMatters', id);
    }
  });

  self.ready();

  self.onStop(function () {
    handle.stop();
  });

});*/
