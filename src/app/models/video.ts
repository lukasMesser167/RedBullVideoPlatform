import {Resource} from './resource';
import {Attributes} from './attributes';

export class Video {
  public resources: Resource[] = undefined;
  public attributes: Attributes = undefined;


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
