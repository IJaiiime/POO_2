const Suv = new Auto ('Renault','Suv 2015','Rojo');
console.log(Suv.tipo());
const Deportivo = new Moto ('CFmoto','Scorpion 2020','0km');
console.log(Suv.getMarca());
console.log(Suv.getModelo());
console.log(Deportivo.getMarca());
console.log(Deportivo.getModelo());
Suv.setModelo('Chevrolet')
console.log(Suv.getModelo());
