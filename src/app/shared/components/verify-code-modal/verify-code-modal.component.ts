import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { getAuth, reload } from 'firebase/auth';

@Component({
  selector: 'app-verify-code-modal',
  templateUrl: './verify-code-modal.component.html',
  styleUrls: ['./verify-code-modal.component.scss'],
  standalone : false
})
export class VerifyCodeModalComponent implements OnInit, OnDestroy {
  intervalId: any;

  constructor(
    private modalController: ModalController,
    private toast: ToastController
  ) {}

  ngOnInit() {
    // Puedes activar el chequeo automático si quieres
    this.intervalId = setInterval(() => {
      this.checkIfEmailVerified();
    }, 3000); // cada 3 segundos
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  async checkIfEmailVerified() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      await reload(user); // recarga su información
      if (user.emailVerified) {
        clearInterval(this.intervalId);

        const toast = await this.toast.create({
          message: '¡Correo verificado exitosamente!',
          color: 'success',
          duration: 3000
        });
        await toast.present();

        this.modalController.dismiss({ verified: true });
      }
    }
  }

  async onClickManualCheck() {
    await this.checkIfEmailVerified();
  }

  close() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.modalController.dismiss();
  }
}
