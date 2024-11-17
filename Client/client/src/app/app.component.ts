
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthServiceService } from './Services/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isConnected=true;
  AuthService=inject(AuthServiceService)
  router=inject(Router)
  ngOnInit(): void {
      this.isConnected=this.AuthService.isAuthenticated();
  }

  logout():void{
    this.AuthService.logoutUser().subscribe({
      next:(res)=>{
        console.log(res)
        localStorage.removeItem("jwt")
        this.router.navigate(["login"])

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
