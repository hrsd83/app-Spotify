import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo')
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDsgx_boDVzcwQoJmfF7vTJ9EDZSjsWN5QRsGQf5w6KrG-uFU0hwSs1zTg0c6mzfDEyBD9zSpQcFkQFJL0'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})

   }
}
