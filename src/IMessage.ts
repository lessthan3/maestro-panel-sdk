export default interface IMessage {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instanceId: string;
  payload: Record<string, any> | null;
  type: string;
  version: string;
}
