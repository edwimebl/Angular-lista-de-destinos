export class DestinoViaje {
    public selected: boolean = false;

    public servicios: string[];

    constructor (public nombre: string, public u: string) {
        this.servicios = ['Desayuno', 'Spa', 'Gimnasio'];// Initialize the servicios array

    }
    setSelected(s:boolean) {
        this.selected = s;
    }
}