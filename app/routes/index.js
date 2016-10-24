import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
    return this.store.findAll('announcement');
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
