class Veiculo {
    constructor(marca, ano) {
        this.ano = ano;
        this.marca = marca;
    }

    getdescricao() {
        return `${this.ano} ${this.marca}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, ano, modelo, portas) {
        super(marca, ano);
        this.modelo = modelo;
        this.portas = portas;
    }

    getdescricao() {
        return `${this.modelo} ${this.portas} ${this.ano} ${this.marca}`;
    }
}

const carro1 = new Carro("Toyota", 2023, "Corolla", 4);
const carro2 = new Carro("Honda", 2050, "Civic", 2);

console.log(carro1.getdescricao());  
console.log(carro2.getdescricao());  
