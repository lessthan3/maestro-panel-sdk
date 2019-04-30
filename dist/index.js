import events from 'events';
import uuidv4 from 'uuid/v4';
export const { EventEmitter } = events;
class MaestroPanelSDK extends EventEmitter {
    constructor() {
        super();
        this.instanceId = uuidv4();
        this.type = 'panel-sdk';
    }
    /**
     * @desc Starts messaging.
     */
    init() {
        window.addEventListener('message', this.onMessage, false);
        // send a register message to parent
        this.postMessage('request-register', null);
    }
    /**
     * @desc Fire when you want the panel to render in the parent.
     */
    render() {
        this.postMessage('request-render', null);
    }
    /**
     * @desc Stops all messages.
     */
    destroy() {
        this.removeAllListeners();
        this.postMessage('destroy', null);
        window.removeEventListener('message', this.onMessage, false);
    }
    /**
     * @desc Get site style
     */
    async getStyle() {
        return new Promise((resolve) => {
            this.once('receive-style', (payload) => {
                resolve(payload);
            });
            this.postMessage('request-style', null);
        });
    }
    /**
     * @private
     * @param {IEvent} event
     * @desc message parser
     */
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
        const { name, instanceId, payload, } = message;
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
    postMessage(name, payload) {
        const message = {
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
//# sourceMappingURL=index.js.map