import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo')
   }

   getQery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCp2AeMq1ZM53A0B7otrP-ulgrSqgHehxs-2_xwMH6MV93f5inJfnszfiudfmuXWhFP9HjlZd5mjjJueB4'
    });

    return this.http.get(url, {headers})
   }

   getNewReleases() {
     //Anterior
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAQ-bmVesA3DWww3j7FO0C7X_PLNORY3KhU1ur29dhtxQ1zC9l7BqbPqR8ty-WeW00t5h51QfMexb3Z-X4'
    // })
    return this.getQery('browse/new-releases?limit=20')
              .pipe ( map((data:any) =>data.albums.items));

   }

   getArtista(termino:string){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAQ-bmVesA3DWww3j7FO0C7X_PLNORY3KhU1ur29dhtxQ1zC9l7BqbPqR8ty-WeW00t5h51QfMexb3Z-X4'
    // })
    return this.getQery(`search?q=${ termino }&type=artist&limit=25`)
              .pipe ( map((data:any) =>data.artists.items))



}
}
