Meteor.methods({
  createAdmin: function() {
    Accounts.createUser({
      username: 'GRS-Jeff',
      email: 'jeffrey@globerunner.com',
      password: 'root',
      profile: {
        image: '/img/default.png',
        roles: ['user', 'admin'],
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
        roles: ['user', 'admin'],
        firstName: p1.firstName,
        lastName: p1.lastName
      }
    });
  },
  formSave: function(type, args) {
    switch (type) {
      case "user":
        args[0].username = args[0].firstName + " " + args[0].lastName;

        Accounts.createUser({
          username: args[0].username,
          email: args[0].email,
          password: 'root',
          profile: {
            image: '/img/default.png',
            roles: ['user', 'admin'],
            firstName: args[0].firstName,
            lastName: args[0].lastName
          }
        });
        break;
      default:
        console.log("No valid type given!");

    }
  }
});
