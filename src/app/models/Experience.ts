// export interface Experience {
//     id: number;
//     nombre: string;
//     fecha_inicio: string;
//     fecha_fin: string;
//     nombre_institucion: string;
//     imagen_institucion: string;
// }
export class Experience {
    id: number;
    nombre: string;
    fecha_inicio: string;
    fecha_fin: string;
    nombre_institucion: string;
    imagen_institucion: string;

    constructor(id=0,nombre="",fecha_inicio="",fecha_fin="",nombre_institucion="",imagen_institucion="") {
        this.id = id;
        this.nombre = nombre;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.nombre_institucion = nombre_institucion;
        this.imagen_institucion = imagen_institucion;
    }

}