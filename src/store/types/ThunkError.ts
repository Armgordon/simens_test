/**
 * Common thunk error. Can be used to display message at UI. May contain original error with original stack trace.
 * @template E Origin error. Must be a native JavaScript `Error` or it's ancestor. `Error` by default.
 */
export default class ThunkError<E extends Error = Error> extends Error {
  /** Name of thunk where error was thrown */
  public readonly thunk: string;

  public readonly originError: E | null;

  public constructor(thunk: string, message?: string, originError?: E) {
    super(message || `Error was thrown by thunk "${thunk}"`);
    this.name = 'ThunkError';

    this.thunk = thunk;

    this.originError = originError || null;
  }
}
