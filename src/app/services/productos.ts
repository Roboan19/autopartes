import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  firestore = inject(Firestore);

  // Obtener todos los productos
  getProductos(): Observable<any[]> {
    const ref = collection(this.firestore, 'productos');
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }

  // Agregar producto
  agregarProducto(producto: any) {
    const ref = collection(this.firestore, 'productos');
    return addDoc(ref, producto);
  }

  // Eliminar producto
  eliminarProducto(id: string) {
    const ref = doc(this.firestore, `productos/${id}`);
    return deleteDoc(ref);
  }

  // Actualizar producto
  actualizarProducto(id: string, data: any) {
    const ref = doc(this.firestore, `productos/${id}`);
    return updateDoc(ref, data);
  }

  getVentas() {
    const ref = collection(this.firestore, 'ventas');
    return collectionData(ref, { idField: 'id' });
  }

}
