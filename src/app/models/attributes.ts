export class Attributes {
  public productTitle: number = undefined;


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
