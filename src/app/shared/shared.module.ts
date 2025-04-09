import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerifyCodeModalComponent } from './components/verify-code-modal/verify-code-modal.component';

 const MODULOS = [CommonModule , FormsModule, IonicModule, ReactiveFormsModule];
 const COMPONENTES = [BackButtonComponent , VerifyCodeModalComponent];



@NgModule({
  declarations: [...COMPONENTES],
  imports: [
     ...MODULOS
  ],
  exports : [...COMPONENTES , ...MODULOS]
})


export class SharedModule { }
