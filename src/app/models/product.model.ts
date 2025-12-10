export interface Product {
    id?: string;
    nombre: string;
    codigo: string;
    precioCompra: number;
    precioVenta: number;
    cantidad: number;
    marca?: string;
    foto?: string;
}