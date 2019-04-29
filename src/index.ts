import events from 'events';
import uuidv4 from 'uuid/v4';
import { VERSION } from './config'
import IEvent from './IEvent';
import IMessage from './IMessage';

export const { EventEmitter } = events;

class MaestroPanelSDK extends EventEmitter {
  private readonly instanceId: string;

  private readonly type: string;

  private readonly version: string;

  public constructor() {
    super();
    this.instanceId = uuidv4();
    this.type = 'panel-sdk';
    this.version = VERSION;
  }

  /**
   * @desc Starts messaging.
   */
  public init(): void {
    window.addEventListener('message', this.onMessage, false);
    // send a register message to parent
    this.postMessage('register', null);
  }

  /**
   * @desc Stops all messages.
   */
  public destroy(): void {
    this.removeAllListeners();
    window.removeEventListener('message', this.onMessage, false);
  }

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
      name, instanceId, payload, version,
    } = message;
    if (instanceId !== this.instanceId || version !== this.version) {
      return;
    }
    this.emit(name, payload);
  }

  private postMessage(name: string, payload: Record<string, string> | null) {
    const message: IMessage = {
      instanceId: this.instanceId,
      name,
      payload,
      type: this.type,
      version: this.version,
    };

    // TODO: don't use *
    window.parent.postMessage(JSON.stringify(message), '*');
  }
}

export default MaestroPanelSDK;
