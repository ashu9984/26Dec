import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { document } from 'angular-bootstrap-md/utils/facade/browser';
import { NgModule } from '@angular/core';


@Component({
    templateUrl: './registration.component.html',
    selector: 'app-registration',
    styleUrls: ['./form.css']

})
export class RegistrationComponent {

    
    header;
    user = {

       fname:'',
       lname:'',
      
        email: '',
        password: '',
        cpass:''
    }
    constructor(private http: Http) {
        
        
        this.header = new Headers;
    }
    register() {
        this.http.post('http://localhost:8000/registration', { fname:this.user.fname,lname:this.user.lname,email:this.user.email, password:this.user.password,cpass:this.user.cpass}, { headers: this.header }).subscribe(data => {
            let response = data.json()
            console.log(response);
            alert(response.msg)
            
        }, err => {
            let error = err.json();
            console.log("Error: ", error)
        })
   
        
    }
    
}




