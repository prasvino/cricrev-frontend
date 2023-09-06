import { Component } from '@angular/core';
import { ApiService } from '../commonservice/apiservice';
import { AuthService } from '../commonservice/authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username: string = ''; // Initialize username and password
  password: string = '';
 
  constructor(private apiService: ApiService,private authservice: AuthService) {}

 
  login() {

    
    
    this.authservice.login( this.username, this.password).subscribe(
      response => {
      
        console.log('Login successful!', response);
        // Handle authentication success, route to another page, etc.
      },
      error => {
        console.error('Login failed:', error);
        // Handle authentication failure, show error message, etc.
      }
    );
  }
}
