import Ember from 'ember';

export default Ember.Route.extend({
  model(urlBits) {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-cd/${urlBits.id}`)
      .then((res) => res.json());
  }
});
