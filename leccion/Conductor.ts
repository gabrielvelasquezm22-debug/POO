import { Vehiculo } from "./Vehiculo";

export class Conductor {
    private nombre: string;
    private entregasRealizadas: number;
    private vehiculo: Vehiculo;

    // Constructor
    constructor(
        nombre: string,
        vehiculo: Vehiculo
    ) {
        this.nombre = nombre;
        this.vehiculo = vehiculo;
        this.entregasRealizadas = 0;
    }
    public mostrarDatos(): void {
        console.log("===== DATOS DEL CONDUCTOR =====");
        console.log(`Nombre: ${this.nombre}`);
        console.log(
            `Entregas realizadas: ${this.entregasRealizadas}`
        );
        console.log(
            this.vehiculo.obtenerDatos()
        );
    }
}