import { Routes } from '@angular/router';
import { ListComponentsComponent } from './Receipe/list-components/list-components.component';
import { LoginComponentComponent } from './Authentifications/login-component/login-component.component';
import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { RegisterComponentComponent } from './Authentifications/register-component/register-component.component';
import { AddComponentComponent } from './Receipe/add-component/add-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { authGuard } from './Services/auth.guard';
import { DetailsComponentComponent } from './Receipe/details-component/details-component.component';

export const routes: Routes = [
  {path:"", redirectTo:"home" , pathMatch:"full"},
  {path:"home", component:HomeComponentComponent},
  {path:"login", component:LoginComponentComponent},
  {path:"register", component:RegisterComponentComponent},
  {path:"receipe/new", component:AddComponentComponent,canActivate:[authGuard]},
  {path:"receipe/list", component:ListComponentsComponent},
  {path:"recipe-details/:id", component:DetailsComponentComponent}

];
