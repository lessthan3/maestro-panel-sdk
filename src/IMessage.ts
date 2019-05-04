interface IMessage {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instanceId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: Record<string, any> | null;
  type: string;
}

export default IMessage;
