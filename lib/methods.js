Meteor.methods({
  createAdmin: function() {
    Accounts.createUser({
      username: 'GRS-Jeff',
      email: 'jeffrey@globerunner.com',
      password: 'root',
      profile: {
        image: '/img/default.png',
        roles: ['user','admin'],
        firstName: 'Jeff',
        lastName: 'Baker'
      }
    });
  },
  creatUser: function(p1, p2) {
    Accounts.createUser({
      username: p1.username,
      email: p1.email,
      password: 'root',
      profile: {
        image: '/img/default.png',
        roles: ['user','admin'],
        firstName: p1.firstName,
        lastName: p1.lastName
      }
    });
  }
});
