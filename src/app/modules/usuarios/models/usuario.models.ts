export interface Usuario {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  cargo: string;
  estado: string;
}

export interface Cargo {
  id : number,
  descripcion: string;
} 
 export interface UsuariolistDto{
   id : number;
   nombre:string;
 }