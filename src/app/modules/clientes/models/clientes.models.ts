export interface Clientes {
    id: number
    cedula: string
    nombres: string
    apellidos: string
    sexo: string
    fecha_Nacimiento: Date
    departamentos: string
    pocisiones: string
}

export interface Cliente {
    id: number
    nombre1: string
    nombre2: string
    apellido1: string
    apellido2: string
    cedulaRnc: string
    email: string
    telefono: string
    proyecto: string;
    proyectoCodigo : number;
}