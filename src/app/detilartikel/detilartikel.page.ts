import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
//import { ArtikelPage } from '../artikel/artikel.page';

@Component({
  selector: 'app-detilartikel',
  templateUrl: './detilartikel.page.html',
  styleUrls: ['./detilartikel.page.scss'],
})
export class DetilartikelPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit():void
  {
    this.http.get('http://162.244.93.240/~kharisma/api/ionicapps/v1/get_artikel?filterby=postid', {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7' // BEARER AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          console.log(res);
          document.getElementById("judulpost").innerHTML = res['dataParams']['artikelTitle'];
          document.getElementById("kontenpost").innerHTML = res['dataParams']['artikelKonten'];
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  backToPostList()
  {
    this.route.navigate(['/artikel']);
  }
}