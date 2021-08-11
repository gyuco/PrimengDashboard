import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const PagesRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(PagesRoutes)],
    exports: [RouterModule],
  })
export class AuthRoutingModule {
}