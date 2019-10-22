import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage
{
  isUserLoggedIn: any = false;
  userInfo: any = {};
  s: string = "";
  t: string = "";
  code: string;

  constructor(private gp: GooglePlus, private route: Router, private http: HttpClient,
    public loadingController: LoadingController, private platform: Platform, public alertController: AlertController) { }

  ngOnInit():void
  {
    if(this.code != "")
    {
      this.s = window.location.href;
      this.t = this.s.match(/code=([^&]+)/)[1];
      this.code = this.t;
      console.log(this.code);
      this.showTandaAlert();
    }
  }

  loginApi()
  {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=821439242365-jva1e28qq9sklsvpsmpn27c41tl7gn86.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=http://localhost:8100/login';
    this.validateLogin();
  }

  validateLogin()
  {
    this.s = window.location.href;
    this.t = this.s.match(/code=([^&]+)/)[1];
    this.code = this.t;

    if(this.code != "")
    {
      this.http.post('https://oauth2.googleapis.com/token', 'code=' + this.code + '&client_id=821439242365-jva1e28qq9sklsvpsmpn27c41tl7gn86.apps.googleusercontent.com&client_secret=qaAWDFVd-2kvTQIbjrhak4Ts&grant_type=authorization_code&redirect_uri=http://localhost:8100/login', {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    })
      .subscribe(
        res => {
          console.log(res);
          console.log("Login Sukses!");
          this.showTandaAlert();
        },
        err => {
          console.log("Error occured");
        }
      );
    }
  }

  async showTandaAlert()
    {
      const alert = await this.alertController.create({
        header: 'Notifikasi',
        subHeader: 'Sukses!',
        message: 'Anda berhasil masuk!',
        buttons: ['GOT IT']
      });
  
      await alert.present();
    }

  nextPage()
  {
    this.route.navigate(['/about']);
  }
}