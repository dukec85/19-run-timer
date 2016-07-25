import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
  newRun(){
    const data = {
      runTime: this.runTime,
      runDate: this.runDate,
      runNotes: this.runNotes,
    };
    return fetch('http://tiny-tn.herokuapp.com/collections/runs-cd',{
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      method:'post',
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
        .then(() => {
          this.set('runTime', '');
          this.set('runDate', '');
          this.set('runNotes', '');
      });
    }
  }
});
