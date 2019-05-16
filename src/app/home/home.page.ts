import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


    message:string = "#UVMRadio Prueba";
    file: string = null;
    link: string = "http://www.uvmradio.mx/";
    subject:string = "Pruebas";

  constructor(private socialSharing: SocialSharing) { }


  btnShare(){
    this.socialSharing.share(this.message,this.subject,this.file,this.link)
      .then(()=>{
        console.log("Se ha compartido correctamente");
      }).catch(()=>{
        console.log("Error");
      });
  }
}
