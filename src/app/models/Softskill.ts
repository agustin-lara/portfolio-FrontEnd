export class Softskill {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;

    constructor(id=0,nombre="",descripcion="",imagen="") {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

}