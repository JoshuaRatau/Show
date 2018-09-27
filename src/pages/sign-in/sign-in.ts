import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
email;
password
  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }
  SignIn(){
    firebase.auth().createUserWithEmailAndPassword
    (this.email, this.password).then(user=>{
      this.navCtrl.push(HomePage)
      
    }
    )}

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
