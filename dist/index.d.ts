/// <reference types="node" />
import events from 'events';
import IStyle from './IStyle';
export declare const EventEmitter: typeof events.EventEmitter;
declare class MaestroPanelSDK extends EventEmitter {
    private readonly instanceId;
    private readonly type;
    constructor();
    /**
     * @desc Starts messaging.
     */
    init(): void;
    /**
     * @desc Fire when you want the panel to render in the parent.
     */
    render(): void;
    /**
     * @desc Stops all messages.
     */
    destroy(): void;
    /**
     * @desc Get site style
     */
    getStyle(): Promise<IStyle>;
    /**
     * @private
     * @param {IEvent} event
     * @desc message parser
     */
    private onMessage;
    /**
     * @private
     * @param {string} name
     * @param {Object} payload
     * @desc post message helper
     */
    private postMessage;
}
export default MaestroPanelSDK;
