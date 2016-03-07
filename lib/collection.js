Schema = {};
Form = {};
Posts = new Meteor.Collection('posts');
/** -------------------------------------- New User Schema Start ------------------------------------ **/
Schema.NewUserP1 = new SimpleSchema({
  username: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    optional: false,
    regEx: SimpleSchema.RegEx.Email
  },
  firstName: {
    type: String,
    optional: false
  },
  lastName: {
    type: String,
    optional: false
  },
  company: {
    type: String,
    optional: false
  },
  userId: {
    type: String,
    optional: true
  }
});
Schema.NewUserP2 = new SimpleSchema({
  country: {
    type: Schema.UserCountry,
    optional: false
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  userId: {
    type: String,
    optional: true
  }
});
userForm = [];
NewUserP1 = new Mongo.Collection("NewUserP1");
NewUserP2 = new Mongo.Collection("NewUserP2");
userForm.push(NewUserP1);
userForm.push(NewUserP2);
Form.user = userForm;

NewUserP1.attachSchema(Schema.NewUserP1);
NewUserP2.attachSchema(Schema.NewUserP2);
/** -------------------------------------- New User Schema End -------------------------------------- **/
/** -------------------------------------- New Account Schma Start  --------------------------------- **/
Schema.NewAccountP1 = new SimpleSchema({

});
accountForm = [];
NewAccountP1 = new Mongo.Collection("NewAccountP1");
accountForm.push(NewAccountP1);
Form.account = accountForm;

NewAccountP1.attachSchema(Schema.NewAccountP1);
/** -------------------------------------- New Account Schma End  ----------------------------------- **/

Schema.UserCountry = new SimpleSchema({
  name: {
    type: String
  },
  code: {
    type: String,
    regEx: /^[A-Z]{2}$/
  }
});
Schema.NewUser = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: false
  },
  email: {
    type: String,
    optional: false,
    regEx: SimpleSchema.RegEx.Email
  },
  firstName: {
    type: String,
    optional: false
  },
  lastName: {
    type: String,
    optional: false
  },
  company: {
    type: String,
    optional: false
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  image: {
    type: String,
    defaultValue: "img/undefined.png",
    optional: true
  },
  country: {
    type: Schema.UserCountry,
    optional: false
  },
  roles: {
    type: [String],
    optional: false
  }
});
