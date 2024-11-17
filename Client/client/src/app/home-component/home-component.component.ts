import { AuthServiceService } from './../Services/auth-service.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherHeart } from '@ng-icons/feather-icons';
import { ReceipeServiceService } from '../Services/receipe-service.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [NgIconComponent,CommonModule],
  providers:[provideIcons({ featherHeart })],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
  allRecips=[{
    imageUrl:"",
    author:{
      name:""
    },
    title:"",
    ingredients:[],
    preparationTime:"",
    category:""
  }];

  isConnected=false;
  AuthService=inject(AuthServiceService)
  RecipeService=inject(ReceipeServiceService)
  ngOnInit(): void {
      this.isConnected=this.AuthService.isAuthenticated();
      this.getAllRecips();
  }

  getAllRecips(){
    this.RecipeService.getAllRecipe().subscribe({
      next:(res)=>{
        console.log(res)
        this.allRecips=res.recips
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
