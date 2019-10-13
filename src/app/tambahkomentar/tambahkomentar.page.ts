import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tambahkomentar',
  templateUrl: './tambahkomentar.page.html',
  styleUrls: ['./tambahkomentar.page.scss'],
})
export class TambahkomentarPage implements OnInit {

  constructor(private route: Router, private http: HttpClient, public alertController: AlertController) { }

  ngOnInit():void
  {

  }

  valueNama: string = "";
  valueEmail: string = "";
  valueKomentar: string = "";

  getNama(value)
  {
    this.valueNama = value;
  }

  getEmail(value)
  {
    this.valueEmail = value;
  }

  getKomentar(value)
  {
    this.valueKomentar = value;
  }

  submitKomentar()
  {
    this.http.post('http://162.244.93.240/~kharisma/api/ionicapps/v1/add_comment', {nama:this.valueKomentar, email:this.valueEmail, komentar:this.valueKomentar}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7' // BEARER AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          console.log(res);
          this.showTandaAlert();
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  async showTandaAlert()
    {
      const alert = await this.alertController.create({
        header: 'Notifikasi',
        subHeader: 'Sukses!',
        message: 'Data yang Anda masukkan berhasil diinput.',
        buttons: ['GOT IT']
      });
  
      await alert.present();
    }
}
