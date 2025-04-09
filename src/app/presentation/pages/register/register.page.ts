import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.invalid) return;
  
    const { correo, password } = this.form.value;
  
    try {
      const user = await this.authService.register(correo, password);
      console.log('Usuario creado:', user);
  
      const toast = await this.toastController.create({
        message: 'Usuario registrado exitosamente.',
        duration: 3000,
        color: 'success',
      });
      await toast.present();
  

      this.form.reset();
  
    } catch (error: any) {
      console.log('Error en registro:', error);
  
      let message = 'Ocurrió un error en el registro.';
      if (error.code === 'auth/email-already-in-use') {
        message = 'El correo ya está registrado.';
      }
  
      const toast = await this.toastController.create({
        message,
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
    }
  }
  
}
