import { AuthServiceService } from './../../Services/auth-service.service';
import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iuser } from '../../models/Iuser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {

  userService=inject(AuthServiceService);
  newUser:Iuser={
    name:"",
    email:'',
    password:''
  };

  //Functions

  handleSubmit():void{

    this.userService.registerUser(this.newUser).subscribe({
      next:(res)=>{
        console.log(res)
          this.newUser={
            name:"",
            email:'',
            password:''
          };
      },
      error:(err)=>{
        alert(err.error.message)
         this.newUser={
            name:"",
            email:'',
            password:''
          };
      }
    })
  }
}
