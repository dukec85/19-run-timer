import Ember from 'ember';

export default Ember.Route.extend({
  model(id){
console.log(id);
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-cd/${id.edit}`)
  .then((res) => res.json());
  }
});
