import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth/auth.service";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}


// model = new User();
//
// constructor(private loginService: LoginService, private router: Router) {
//
// }
//
// validateUser(loginForm: NgForm) {
//   this.loginService.validateLoginDetails(this.model).subscribe(
//     responseData => {
//       window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
//       this.model = <any> responseData.body;
//       this.model.authStatus = 'AUTH';
//       window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
//       let xsrf = getCookie('XSRF-TOKEN')!;
//       window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
//       this.router.navigate(['dashboard']);
//     });
// }
