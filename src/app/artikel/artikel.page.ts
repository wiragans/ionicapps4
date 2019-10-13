import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.page.html',
  styleUrls: ['./artikel.page.scss'],
})
export class ArtikelPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit():void
  {
    this.http.get('http://162.244.93.240/~kharisma/api/ionicapps/v1/get_artikel', {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7' // BEARER AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          //console.log(res);
          document.getElementById("judulartikel1").innerHTML = res['dataParams1']['artikelTitle'];
          document.getElementById("judulartikel2").innerHTML = res['dataParams2']['artikelTitle'];
          document.getElementById("judulartikel3").innerHTML = res['dataParams3']['artikelTitle'];
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  lihatArtikel1()
  {
    this.http.post('http://162.244.93.240/~kharisma/api/ionicapps/v1/detailed_post', {selectedPost:1}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7' // BEARER AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/detilartikel']);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  lihatArtikel2()
  {
    this.http.post('http://162.244.93.240/~kharisma/api/ionicapps/v1/detailed_post', {selectedPost:2}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7' // BEARER AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/detilartikel']);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  lihatArtikel3()
  {
    this.http.post('http://162.244.93.240/~kharisma/api/ionicapps/v1/detailed_post', {selectedPost:3}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7' // BEARER AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/detilartikel']);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
