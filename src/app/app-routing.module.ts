import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { Observable } from 'rxjs';
import { AuthService, LoginGuard } from './service/auth.service';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  Routes,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
 import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PhotoComponent } from './components/photo/photo.component';

@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.user) {
      this.router.navigate(['signup']);
    }
    return true;
  }
}

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'albums', component: DashboardComponent, canActivate: [LoginGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [LoginGuard] },
  { path: 'users', component: UsersComponent, canActivate: [LoginGuard] },
  { path: 'photos/:albumId', component: PhotoComponent ,canActivate: [LoginGuard]},
  { path: 'photos', component: PhotoComponent,canActivate: [LoginGuard] },
 
 
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'page not found!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
