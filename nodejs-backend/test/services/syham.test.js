const assert = require('assert');
const app = require('../../src/app');

describe('\'syham\' service', () => {
  it('registered the service', () => {
    const service = app.service('syham');

    assert.ok(service, 'Registered the service (syham)');
  });
});
