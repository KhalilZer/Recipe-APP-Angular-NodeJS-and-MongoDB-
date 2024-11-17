import { I_ingredient } from "./Iingredient";

export interface Ireceipe{
  id:number,
  title:string,
  description:string,
  ingredients:I_ingredient[],
  categorie:string,
  preparationTime:number //preparation in minutes
  imgUrl:number,
}
