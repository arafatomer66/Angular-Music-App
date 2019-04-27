import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _https : HttpClient) { }
  searchUrl: string;

  searchMusic(str:string, type='artist') : Observable<any>  {
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._https.get(this.searchUrl)
    .pipe(map(res => console.log(res)));
}

}
