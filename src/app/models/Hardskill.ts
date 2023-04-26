export class Hardskill {
    id: number;
    nombre: string;
    dominio: number;
    imagen: string;
    color: string;

    constructor(id=0,nombre="",dominio=0,imagen="",color="") {
        this.id = id;
        this.nombre = nombre;
        this.dominio = dominio;
        this.imagen = imagen;
        this.color = color;
    }

}