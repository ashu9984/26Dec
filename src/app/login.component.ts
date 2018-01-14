import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Component({
    templateUrl: './login.component.html',
    selector: 'app-login',
    styleUrls:['./form.css']
})
export class LoginComponent {
    header;
    user={
        email:'',
        password:"",
        
    }
    constructor(private http: Http) {
        this.header = new Headers;
    }
    login() {
        this.http.post('http://localhost:8000/login', {email:this.user.email, password:this.user.password}, { headers: this.header }).subscribe(data => {
            let response = data.json();
            console.log(response);
            alert(response.message)
        }, err => {
            let error = err.json();
            console.log("Error: ", error)
        })
    }
}

