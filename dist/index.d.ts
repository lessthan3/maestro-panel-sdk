/// <reference types="node" />
import events from 'events';
import IConfig from './IConfig';
export declare const EventEmitter: typeof events.EventEmitter;
declare class MaestroPanelSDK extends EventEmitter {
    private clientId;
    private instanceId;
    constructor({ clientId }: IConfig);
    /**
     * @desc Starts messaging.
     */
    init(): void;
    /**
     * @desc Stops all messages.
     */
    destroy(): void;
    private onMessage;
    private postMessage;
}
export default MaestroPanelSDK;
