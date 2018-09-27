import { LoginPage } from './../login/login';
import { SignInPage } from './../sign-in/sign-in';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
onClickNext(){
    this.navCtrl.push(SignInPage)
  }
  Next(){
    this.navCtrl.push(LoginPage)
  }
  SignOut(){
    firebase.auth().signOut().then(user=>{
      this.navCtrl.push(LoginPage)
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
