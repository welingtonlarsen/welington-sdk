export class SdkError extends Error {
  constructor(message: string) {
    super('Sdk Error, please communicate the support team and forward the message: ' + message);
    this.name = 'SdkError';
  }
}
