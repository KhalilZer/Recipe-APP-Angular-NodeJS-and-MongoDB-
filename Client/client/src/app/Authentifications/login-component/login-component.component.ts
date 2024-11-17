import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  userService=inject(AuthServiceService)
  newUser={
    email:"",
    password:""
  };

  //functions
  router=inject(Router)
  handleLogin(){
    this.userService.loginUser(this.newUser).subscribe({
      next:(res)=>{
        localStorage.setItem('jwt',res.token)
        this.router.navigate(['home']);
       /*  alert("Great Success Login");
        localStorage.setItem("jwt",res)
        this.router.navigate(["home"]) */
      },
      error:(err)=>{
        alert(err.error.message);
      }
    })
  }

}
