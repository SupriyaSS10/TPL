import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public mid="";
  public pass="";
  
    constructor(private httpclient : HttpClient){

      // httpclient.post('http://localhost:5100/login',this.person)
      // .subscribe(
      //   (sucess)=>{
      //     console.log("Success:"+sucess);
      //   },
      //   (error)=>{
      //     console.log("error:"+error);
      //   })


    }

    public submit(){

      var person : Object = {mailid : this.mid , password : this.pass };


      this.httpclient.post('http://localhost:5100/login',person)

      .subscribe(
        (sucess)=>{
          console.log("Success:"+sucess);
        },
        (error)=>{
          console.log("error:"+error);
        })

    }

   

  

   
    // person = {mailid : "mayur@gmail.com", password : "Mayur123" };

    
  

}
