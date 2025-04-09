import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyCodeService {
  constructor() {}

  async verifyCustomCode(email: string, code: string): Promise<boolean> {
    // Simulación: deberías reemplazarlo con lógica real.
    return code === '123456'; // Código fijo por ahora
  }
}
