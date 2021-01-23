
export class Resource {
  public extension: string = undefined;
  public height: number = undefined;
  public width: number = undefined;
  public id: string = undefined;
  public type: string = undefined;
  public url: string = undefined;

  constructor(kwargs?: any) {
    if (!kwargs) {
      return;
    }
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        this[key] = kwargs[key];
      }
    }
  }
}
