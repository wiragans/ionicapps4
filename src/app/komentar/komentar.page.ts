import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.page.html',
  styleUrls: ['./komentar.page.scss'],
})
export class KomentarPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit():void
  {
    this.http.get('http://162.244.93.240/~kharisma/api/ionicapps/v1/get_komentar', {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7' // BEARER AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          console.log(res);
          document.getElementById("komentar1").innerHTML = res['nama'] + ' memberi komentar mengenai Jagat Pulsa';
          //document.getElementById("komentar2").innerHTML = res['dataParams2']['nama'] + ' memberi komentar mengenai Jagat Pulsa';
          //document.getElementById("komentar3").innerHTML = res['dataParams3']['nama'] + ' memberi komentar mengenai Jagat Pulsa';
          //this.route.navigate(['detailkomentar']);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
