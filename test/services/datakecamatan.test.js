const assert = require('assert');
const app = require('../../src/app');

describe('\'datakecamatan\' service', () => {
  it('registered the service', () => {
    const service = app.service('datakecamatan');

    assert.ok(service, 'Registered the service');
  });
});
