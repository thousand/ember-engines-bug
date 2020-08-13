import Application from 'ember-engines-bug/app';
import config from 'ember-engines-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
