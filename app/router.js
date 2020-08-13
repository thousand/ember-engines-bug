import EmberRouter from '@ember/routing/router';
import config from 'ember-engines-bug/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.mount('routeless-engine');
  this.mount('routeful-emgine');
  this.mount('routeful-engine');
});
