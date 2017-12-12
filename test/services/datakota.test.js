const assert = require('assert');
const app = require('../../src/app');

describe('\'datakota\' service', () => {
  it('registered the service', () => {
    const service = app.service('datakota');

    assert.ok(service, 'Registered the service');
  });
});
