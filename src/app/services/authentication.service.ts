import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private Authentication: AngularFireAuth) { }
  async login(email:string, password: string){

    return new Promise((resolve,rejected)=>{
      this.Authentication.auth.signInWithEmailAndPassword(email,password).then(user =>{
        resolve(user)
      }).catch(err => rejected(err));
    });
    
  }

  createUserWithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return this.createUserWithProvider(provider);
 }


 createUserWithFacebook(){
     let provider = new firebase.auth.FacebookAuthProvider();
     return this.createUserWithProvider(provider);             
  }


  createUserWithProvider(provider){
     return this.Authentication.auth.signInWithRedirect(provider)
     .then(result =>{
         return firebase.auth().getRedirectResult;
     }); 

  }
}
