Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function (){
  this.render('home');
});
Router.route('/Support', function (){
  this.render('support');
});
Router.route('/Accounts', function (){
  this.render('accounts');
});
