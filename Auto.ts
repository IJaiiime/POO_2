class Auto extends Vehiculo {
    Color: string;

    constructor(Marca:string,Modelo:string,Color:string){
        super(Marca,Modelo)
        this.Color=Color;
}
        override tipo():string{
        return (`Modelo: ${this.getMarca()}| Marca: ${this.getModelo()}| Color: ${this.Color}`);
    }
}
