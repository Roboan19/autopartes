import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { ProductosService } from './productos';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  firestore = inject(Firestore);

  constructor(private productosService: ProductosService) {}

  registrarVenta(venta: any) {
    const ventasRef = collection(this.firestore, 'ventas');
    return addDoc(ventasRef, venta);
  }

  async vender(producto: any, cantidad: number) {

    if (cantidad <= 0) throw new Error('Cantidad inválida');
    if (cantidad > producto.stock) throw new Error('No hay suficiente stock');

    const total = producto.precio * cantidad;
    const fecha = new Date();

    // 1. Guardar la venta
    await this.registrarVenta({
      productoId: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad,
      total,
      fecha
    });

    // 2. Actualizar el stock
    await this.productosService.actualizarProducto(producto.id, {
      stock: producto.stock - cantidad
    });
  }

  
}
