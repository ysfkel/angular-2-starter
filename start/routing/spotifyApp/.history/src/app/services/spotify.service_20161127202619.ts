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

     let queryURL:string=`${SpotifyService.BASE_URL}${url}`;

     if(params){
       queryURL=`${queryURL}?${params.join('&')}`;
     }
     return this.http.request(queryURL).map((res:any)=>
         res.json
     )
   }

}
