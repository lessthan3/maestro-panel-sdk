const MaestroPanelSDK = require('../src').default;

jest.mock('uuid/v4', (): Function => ((): string => 'test-id'));

let panel = new MaestroPanelSDK();
beforeEach((): void => {
  window.addEventListener = jest.fn();
  window.parent.postMessage = jest.fn();
  panel = new MaestroPanelSDK();
  panel.init();
});

describe('MaestroPanelSDK', (): void => {
  test('when init() is fired, SDK listens to messages', (): void => {
    expect(window.addEventListener).toHaveBeenCalledWith(
      'message', panel.onMessage, false,
    );
  });
  test('when init() is fired, we post register', (): void => {
    const expectedOutput = {
      instanceId: 'test-id',
      name: 'register',
      payload: null,
      type: 'panel-sdk',
    };

    expect(window.parent.postMessage).toHaveBeenCalledWith(
      JSON.stringify(expectedOutput), '*',
    );
  });
  test('when render() fires it sends a render message', (): void => {
    const expectedOutput = {
      instanceId: 'test-id',
      name: 'render',
      payload: null,
      type: 'panel-sdk',
    };
    panel.render();
    expect(window.parent.postMessage).toHaveBeenCalledWith(
      JSON.stringify(expectedOutput), '*',
    );
  });
});

describe('event handling', (): void => {
  test('can subscribe to events', (): void => {
    const payload = {
      instanceId: 'test-id',
      name: 'test-event',
      payload: { foo: 'bar' },
    };
    const message = {
      data: JSON.stringify(payload),
      type: 'message',
    };
    const callback = jest.fn();
    panel.on('test-event', callback);

    panel.onMessage(message);
    expect(callback).toHaveBeenCalledWith(payload.payload);
  });
  test('theres no cross-events accepted by different ids', (): void => {
    const payload = {
      instanceId: 'another-id',
      name: 'test-event',
      payload: { foo: 'bar' },
    };
    const message = {
      data: JSON.stringify(payload),
      type: 'message',
    };
    const callback = jest.fn();
    panel.on('test-event', callback);

    panel.onMessage(message);
    expect(callback).not.toHaveBeenCalled();
  });
});
