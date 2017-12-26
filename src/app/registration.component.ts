import  {Component} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { document } from 'angular-bootstrap-md/utils/facade/browser';

@Component({
    templateUrl:'./registration.component.html',
    selector:'app-registration',
    styleUrls:['./form.css']
    
})
export class RegistrationComponent{
    header;
    user={
        email:'',
        password:"",
        otp:""
    }
    constructor(private http:Http){
        this.header = new Headers;
    }
    register(){
        this.http.post('http://localhost:8000/registration', {email:this.user.email, password:this.user.password, otp: this.user.otp}, {headers:this.header}).subscribe(data=>{
            let response = data.json();
            console.log(response);
        }, err=>{
            let error = err.json();
            console.log("Error: ", error);
       
        })
    }
   

}