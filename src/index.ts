import events from 'events';
import uuidv4 from 'uuid/v4';
import IEvent from './IEvent';
import IMessage from './IMessage';
import IStyle from './IStyle';

export const { EventEmitter } = events;

class MaestroPanelSDK extends EventEmitter {
  private readonly instanceId: string;

  private readonly type: string;

  public constructor() {
    super();
    this.instanceId = uuidv4();
    this.type = 'panel-sdk';
  }

  /**
   * @desc Starts messaging.
   */
  public init(): void {
    window.addEventListener('message', this.onMessage, false);
    // send a register message to parent
    this.postMessage('request-register', null);
  }

  /**
   * @desc Fire when you want the panel to render in the parent.
   */
  public render(): void {
    this.postMessage('request-render', null);
  }

  /**
   * @desc Stops all messages.
   */
  public destroy(): void {
    this.removeAllListeners();
    this.postMessage('destroy', null)
    window.removeEventListener('message', this.onMessage, false);
  }

  /**
   * @desc Get site style
   */
  public async getStyle(): Promise<IStyle> {
    return new Promise((resolve): void => {
      this.once('receive-style', (payload: IStyle): void => {
        resolve(payload);
      })
      this.postMessage('request-style', null);
    })
  }

  /**
   * @private
   * @param {IEvent} event
   * @desc message parser
   */
  private onMessage(event: IEvent): void {
    const { data: rawData, type } = event;
    if (type !== 'message') {
      return;
    }
    let message: IMessage;
    try {
      message = JSON.parse(rawData);
    } catch (err) {
      return;
    }

    const {
      name, instanceId, payload,
    } = message;
    if (instanceId !== this.instanceId) {
      return;
    }
    this.emit(name, payload);
  }

  /**
   * @private
   * @param {string} name
   * @param {Object} payload
   * @desc post message helper
   */
  private postMessage(name: string, payload: Record<string, string> | null): void {
    const message: IMessage = {
      instanceId: this.instanceId,
      name,
      payload,
      type: this.type,
    };

    // TODO: don't use *
    window.parent.postMessage(JSON.stringify(message), '*');
  }
}

export default MaestroPanelSDK;
