export interface Usuario {
  id: number;
  nombre: string;
  nombreUsuario: string;
  passWord: string;
  email: string;
  cargo: string;
  estado: string;
}

export interface Cargo {
  id : number,
  descripcion: string;
}