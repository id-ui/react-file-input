export default class TooLargeFileError extends Error {
  constructor() {
    super();
    this.message = 'Too large file';
  }
}
