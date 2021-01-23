import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(public httpClient: HttpClient) { }

  public getVideos(offset: number = 0, limit: number = 10, searchValue?: string): Observable<Video[]> {
    let url = `https://rbcp.rbmbtnx.net/api/v2/content/communication?f[mediaType]=Video`;
    if (offset) {
      url = url + `&offset=${offset}`;
    }
    if (limit) {
      url = url + `&limit=${limit}`;
    }
    if (searchValue) {
      url = url + `&q=${searchValue.replace(' ', '%20')}`;
    }
    return this.httpClient.get<any[]>(url);
  }
}
