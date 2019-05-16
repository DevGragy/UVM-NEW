import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-programas',
  templateUrl: './programas.page.html',
  styleUrls: ['./programas.page.scss'],
})
export class ProgramasPage implements OnInit {

  apiUrl="http://localhost:8888/uvmradio/";
  programs:any;

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
    this.getPrograms();
   }

  ngOnInit() {
  }

  getPrograms(){

    let headerOptions = new HttpHeaders();
    headerOptions.append('Access-Control-Allow-Origin', '*');
    headerOptions.append('Content-Type', 'application/json');

    let funcion = {
      metodo: "getPrograms"
  };

    this.http.post(this.apiUrl, funcion,{headers: headerOptions}).subscribe(data => {
      this.programs = data;
      console.log(this.programs);
    } , error =>{
      console.log(error);
    });
  }



  

}
