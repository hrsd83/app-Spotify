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
      'Authorization': 'Bearer BQDcwSp0YDw7TdFZ-BxjhqlhnFLtaPk58aNccbnwMuGhhNokqwE4KU5F_-rhn6Rnv6sRuOtS-Npl3ymTfIo'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
        .subscribe(data => {
          console.log(data)
        })
   }
}
