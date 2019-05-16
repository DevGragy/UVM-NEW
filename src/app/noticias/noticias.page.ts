import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  apiUrl="http://localhost:8888/uvmradio/";
  newNews: any;
  programs: any;
  
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) {
    this.getNoticias();
  }


  ngOnInit() {
  }

  getNoticias(){
    let funcion = {
        metodo: "getNews"
    };
    this.http.post(this.apiUrl,JSON.stringify(funcion)).subscribe(data  => {
        console.log(data);
        this.newNews = data;
        this.newNews = this.newNews.reverse();  
      } , error => {
        console.log(error);
      });
  }

 

  

    

}
