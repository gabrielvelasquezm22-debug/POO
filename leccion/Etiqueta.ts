export class Etiqueta {

    private codigoBarras: string;
    private esFragil: boolean;
    
    // Constructor
    constructor(
        codigoBarras: string,
        esFragil: boolean
    ) {
        this.codigoBarras = codigoBarras;
        this.esFragil = esFragil;
    }
    public obtenerAdvertencia(): string {
        if (this.esFragil) {
            return "¡CUIDADO! Contenido frágil";
        }
        return "Paquete estándar";
    }
    public obtenerCodigo(): string {
        return this.codigoBarras;
    }
}
