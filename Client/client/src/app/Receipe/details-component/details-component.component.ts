import { Component, inject, OnInit } from '@angular/core';
import { ReceipeServiceService } from '../../Services/receipe-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-component',
  standalone: true,
  imports: [],
  templateUrl: './details-component.component.html',
  styleUrl: './details-component.component.css'
})
export class DetailsComponentComponent implements OnInit{

  recipeItem={
    imageUrl:"",
    title:"",
    ingredients:[],
    preparationTime:"",
    category:"",
    author:{
      name:"",
      email:"",
    }
  };
  RecipeService=inject(ReceipeServiceService);
  route=inject(ActivatedRoute);
  recipeId:string=this.route.snapshot.paramMap.get('id')?.toString() ?? "";
  ngOnInit(): void {
      this.getRecipeItem();
  }

  //Functions
  getRecipeItem():void{
    this.RecipeService.getOneRecipe(this.recipeId).subscribe({
      next:(res)=>{
        console.log(res)
        this.recipeItem=res.recipe
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
