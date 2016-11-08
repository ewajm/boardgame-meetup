import Ember from 'ember';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service('current-player'),
  model() {
    return Ember.RSVP.hash({
      sessions: this.store.findAll('session'),
      players: this.store.findAll('player'),
      games: this.store.findAll('game')
    });
  }
});