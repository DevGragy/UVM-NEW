import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  operation: string = "login";
  constructor(private auth: AuthenticationService, public router: Router,private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock('portrait');
   }

  ngOnInit() {
  }

  onSubmit(){
    this.auth.login(this.email,this.password).then(res =>{
      this.router.navigate(['/home']);
    }).catch(err => alert ('Los datos que ingreso son incorrectos o no existe el usuario'));
    
  }


  createUserWithFacebook(){
    this.auth.createUserWithFacebook();
    
  } 

}
