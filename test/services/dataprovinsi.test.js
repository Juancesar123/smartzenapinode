const assert = require('assert');
const app = require('../../src/app');

describe('\'dataprovinsi\' service', () => {
  it('registered the service', () => {
    const service = app.service('dataprovinsi');

    assert.ok(service, 'Registered the service');
  });
});
