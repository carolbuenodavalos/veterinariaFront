import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = { username: '', password: '' };
  router = inject(Router);

  logar() {
    if (this.login.username === 'admin' && this.login.password === 'admin') {
      this.showSuccessToast();
      this.router.navigate(['admin/dashboard']);
    } else {
      Swal.fire('Erro', 'Usuário ou senha incorretos!', 'error');
    }
  }

  private showSuccessToast() {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    }).fire({ icon: 'success', title: 'Bem-vindo ao VetSys!' });
  }
}