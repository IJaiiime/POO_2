class Vehiculo {
    private marca: string;
    private modelo: string;


    getMarca():string{
        return this.marca;
    }
    
    setMarca(marca:string){
        this.marca = marca;
    }

    getModelo():string{
        return this.modelo;
    }

    setModelo(modelo:string) {
        this.modelo = modelo;
    }

    constructor(marca:string,modelo:string){
    this.marca=marca;
    this.modelo=modelo;

}
   tipo():string{
    return (`Modelo ${this.modelo}| Marca: ${this.marca}`);
   }

  
  }





