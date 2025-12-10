export interface Sale {
  id?: string;
  productoId: string;
  cantidad: number;
  total: number;
  fecha: Date;
}