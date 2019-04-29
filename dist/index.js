import events from 'events';
import uuidv4 from 'uuid/v4';
export const { EventEmitter } = events;
class MaestroPanelSDK extends EventEmitter {
    constructor({ clientId }) {
        super();
        this.clientId = clientId;
        this.instanceId = uuidv4();
    }
    /**
     * @desc Starts messaging.
     */
    init() {
        window.addEventListener('message', this.onMessage, false);
    }
    /**
     * @desc Stops all messages.
     */
    destroy() {
        this.removeAllListeners();
        window.removeEventListener('message', this.onMessage, false);
    }
    onMessage(event) {
        const { data: rawData, type } = event;
        if (type !== 'message') {
            return;
        }
        let message;
        try {
            message = JSON.parse(rawData);
        }
        catch (err) {
            return;
        }
        const { name, payload } = message;
        this.emit(name, payload);
    }
    postMessage(string, pay) {
    }
}
export default MaestroPanelSDK;
//# sourceMappingURL=index.js.map