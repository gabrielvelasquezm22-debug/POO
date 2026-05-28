export class Vehiculo {

    private placa: string;
    private capacidadCarga: number;

    // Constructor
    constructor(
        placa: string,
        capacidadCarga: number
    ) {
        this.placa = placa;
        this.capacidadCarga = capacidadCarga;
    }
    public obtenerDatos(): string {
        return `
Vehículo asignado
Placa: ${this.placa}
Capacidad de carga: ${this.capacidadCarga} kg
        `;
    }
}
