import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReceipeServiceService } from '../../Services/receipe-service.service';

@Component({
  selector: 'app-add-component',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-component.component.html',
  styleUrl: './add-component.component.css'
})
export class AddComponentComponent {


RecipeService=inject(ReceipeServiceService);
recipeForm=new FormGroup({
  title:new FormControl('',[Validators.required,Validators.minLength(4)]),
  ingredients:new FormControl(''),
  preparationTime:new FormControl(''),
  category:new FormControl('Asian'),
  imageUrl:new FormControl(''),
})

get title(){
  return this.recipeForm.controls.title
}
handleSubmit(){
  this.RecipeService.createRecipe(this.recipeForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      this.recipeForm.reset();
      alert(res.message)
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
}
