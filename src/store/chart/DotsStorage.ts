/** Service class which provides chart dots saving and reading at browser local storage */
export default class DotsStorage {
  private static instance: DotsStorage | null;

  /** Get instance of `DotsStorage`. Create it if not exists */
  public static getInstance(): DotsStorage {
    if (!DotsStorage.instance) {
      DotsStorage.instance = new DotsStorage();
    }
    return DotsStorage.instance;
  }

  /** Access dots local storage unique key */
  public readonly dotsValuesKey: string;

  private constructor() {
    this.dotsValuesKey = 'dots_key';
  }

  /** Get chart dots from local storage */
  public getDotsValues(): string {
    return localStorage.getItem(this.dotsValuesKey) || '';
  }

  /** Save chart dots  into local storage */
  public setDotsValues(value: string): void {
    localStorage.setItem(this.dotsValuesKey, value);
  }

  /** Remove chart dots from local storage */
  public removeDotsValues(): void {
    localStorage.removeItem(this.dotsValuesKey);
  }
}
