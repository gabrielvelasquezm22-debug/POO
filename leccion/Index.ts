import { Vehiculo } from "./Vehiculo";
import { Conductor } from "./Conductor";
import { Paquete } from "./Paquete";

const vehiculo1 = new Vehiculo(
    "ABC-123",
    1500
);
const conductor1 = new Conductor(
    "Carlos Mendoza",
    vehiculo1
);
const paquete1 = new Paquete(
    "Ana Torres",
    "Av. Principal 456",
    "BAR-990",
    true
);
conductor1.mostrarDatos();
console.log("\n");
paquete1.mostrarGuia();