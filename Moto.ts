class Moto extends Vehiculo {
    Kilometraje: string;

    constructor(marca:string,modelo:string,Kilometraje:string){
        super(marca,modelo)
        this.Kilometraje=Kilometraje;
        
}
    override tipo():string{
        return (`Modelo: ${this.getMarca()}| Marca: ${this.getModelo()}| Kilometraje: ${this.Kilometraje}`);
    }
}