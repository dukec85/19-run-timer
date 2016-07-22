import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-cd`)
      .then((res) => res.json());
  }
});
