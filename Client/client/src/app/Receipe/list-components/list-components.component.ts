import { Component, inject, OnInit } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherEye,featherEdit, featherTrash } from '@ng-icons/feather-icons';
import { ReceipeServiceService } from '../../Services/receipe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-components',
  standalone: true,
  imports: [NgIconComponent],
  providers:[provideIcons({ featherEye,featherEdit,featherTrash })],
  templateUrl: './list-components.component.html',
  styleUrl: './list-components.component.css'
})
export class ListComponentsComponent implements OnInit {
  listRecipe:any[]=[{
    _id:'',
		title: "",
		ingredients: [],
		preparationTime: "",
		category: "",
    imageUrl:""
  }];
  RecipeService=inject(ReceipeServiceService);
  router=inject(Router);
  ngOnInit(): void {
    this.getRecipsUser();
    console.log(this.listRecipe)
  }


  getRecipsUser(){
    this.RecipeService.getRecipsUser().subscribe({
      next:(res)=>{
        console.log(res)
        this.listRecipe=res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  deleteRecipe(id:string){
    this.RecipeService.deleteRecipe(id).subscribe({
       next:(res)=>{
        alert(res.message)
        this.getRecipsUser();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  handleDetails(id:string){
    this.router.navigate(['/recipe-details',id]);
  }

}
