import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('review');
  this.route('new-run');
  this.route('run');
  this.route('controllers');
  this.route('edit');
});

export default Router;
