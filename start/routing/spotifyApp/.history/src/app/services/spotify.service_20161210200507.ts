import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService{

   static BASE_URL:string='https://api.spotify.com/v1';

   constructor(private http:Http){

   }

   query(URL:string,params?:Array<string>):Observable<any[]>{

     let queryURL:string=`${SpotifyService.BASE_URL}${URL}`;
     if(params){
       queryURL=`${queryURL}?${params.join('&')}`;
     }
     return this.http.request(queryURL).map((res:any)=>{

              console.log('==========QWERT 2',res.json());
              return  res.json;
     })
   }

   search(query:string,type:string):Observable<any[]>{

      return this.query('/search',[
        `q=${query}`,
        `type=${type}`
      ]);
   }

   searchTrack(query:string):Observable<any[]>{
     var source=Observable.interval(400).take(9)
     .map(i=>[1,2,4,5]);
     return source;
     //return this.search(query,'track');
   }

   getTrack(id,string):Observable<any[]>{
      return this.query(`/tracks/${id}`);
   }

  getArtist(id,string):Observable<any[]>{
    return this.query(`/artists/${id}`);
  }

  getAlbum(id:string):Observable<any[]>{
    return this.query(`/albums/${id}`);
  }
}

export var SPOTIFY_PROVIDERS:Array<any>=[
  {provide:SpotifyService,useClass:SpotifyService}
]
