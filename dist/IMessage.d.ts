export default interface IMessage {
    name: string;
    instanceId: string;
    payload: Record<string, any> | null;
    type: string;
}
