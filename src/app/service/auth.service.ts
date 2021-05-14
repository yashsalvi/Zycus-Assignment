
// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: Observable<firebase.User | null>;
  // loadingIndicator?: boolean = false;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router,
    private toastr: ToastrService) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
       this.toastr.success('Please login','Registration successful'); 
       this.router.navigate([""])
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.toastr.error(err.message);
      });
  }

  login(email: string, password: string) {
    let token = "";
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        // this.loadingIndicator = true;
        value.user?.getIdToken().then(function(idToken) {
          token = idToken;
          sessionStorage.setItem("token", token);
        }) ;
        this.router.navigate(['users']);
        this.toastr.success('You have successfully logged in','Login successful');
        // this.loadingIndicator = false;
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        // this.loadingIndicator = false;
        this.toastr.error(err.message);
      });
  }

  isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      return true;
    }    
    return false;
  }

  logout() {
    this.firebaseAuth.signOut();
    sessionStorage.removeItem("token");
    this.router.navigate(['']);
    this.toastr.success('You have successfully logged out','Logout successful'); 
  }
}

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isLoggedIn();

    if(logged) {
      
      return true;
    }
    this.router.navigate(['']);
    
    return false;
  }

  
}