/**
* Helper file for _sideMenu.html
*/
/*
Template.slideMenu.helpers({
  firstName: function () {
    return Meteor.user().profile.firstName;
  },
  user: function () {
    return Meteor.user();
  }
});
*/
/**
* New code fro sidebar
**/
Template.header.onRendered( function (){
  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left' // Choose the horizontal origin
  });
});
