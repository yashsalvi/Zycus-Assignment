import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, LoginActivate } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthService, LoginGuard } from './service/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { LandingComponent } from './components/landing/landing.component';

import { ClickLottieComponent } from './components/click-lottie/click-lottie.component';
import { ToastrModule } from 'ngx-toastr';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CommonModule } from '@angular/common';

// import { MatCardModule } from '@angular/material/card';
import { ShortenPipe } from './shorten.pipe';
import { FooterComponent } from './components/footer/footer.component';
import {PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PhotoComponent } from './components/photo/photo.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    LoginFormComponent,
    SignupFormComponent,
    DashboardComponent,
    PostsComponent,
    UsersComponent,
    UserCardComponent,
    PostCardComponent,
    SelectedUserComponent,
    LoadingComponent,
    LandingComponent,
    ClickLottieComponent,
    ErrorPageComponent,
    ShortenPipe,
    FooterComponent,
    PhotoComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    PerfectScrollbarModule,
    FormsModule,
   NgxSpinnerModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    FormsModule,
    // MatCardModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],

  providers: [
 
    AngularFirestore,
    LoginActivate,
    AuthService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
