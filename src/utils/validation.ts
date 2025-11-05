// src/utils/validation.ts

/** Email simple y efectivo */
export function validarEmail(email: string): boolean {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/** Quita puntos/guion y pone DV en mayúscula */
export function normalizarRut(rut: string): string {
  return rut.replace(/\./g, '').replace(/-/g, '').toUpperCase();
}

/** Calcula dígito verificador para un RUT sin DV (solo números) */
export function dvRut(num: string): string {
  let suma = 0, mul = 2;
  for (let i = num.length - 1; i >= 0; i--) {
    suma += parseInt(num[i], 10) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  const res = 11 - (suma % 11);
  if (res === 11) return '0';
  if (res === 10) return 'K';
  return String(res);
}

/** Valida RUT completo (con DV). Acepta con/ sin puntos y con/ sin guion */
export function validarRut(rut: string): boolean {
  const r = normalizarRut(rut);
  if (r.length < 2) return false;
  const cuerpo = r.slice(0, -1);
  const dv = r.slice(-1);
  if (!/^\d+$/.test(cuerpo)) return false;
  return dvRut(cuerpo) === dv;
}

/** (Opcional) Formatea como 12.345.678-5 */
export function formatearRut(rut: string): string {
  const r = normalizarRut(rut);
  const cuerpo = r.slice(0, -1);
  const dv = r.slice(-1);
  if (!/^\d+$/.test(cuerpo)) return r; // deja como está si no es numérico
  const conPuntos = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${conPuntos}-${dv}`;
}
