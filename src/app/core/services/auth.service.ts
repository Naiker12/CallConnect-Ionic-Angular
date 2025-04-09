// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Enviar email de verificación
      if (userCredential.user) {
        await sendEmailVerification(userCredential.user);
        console.log('Correo de verificación enviado');
      }

      return userCredential.user;
    } catch (error: any) {
      console.error('Error en el registro:', error.code, error.message);
      throw error;
    }
  }
}
