import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput // 👈 IMPORTANTE
  ,

  IonItem,
  IonTitle,
  IonToast,
  IonToolbar
} from '@ionic/angular/standalone';

import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput, // 👈 AGREGA AQUÍ TAMBIÉN
    CommonModule,
    FormsModule,
    IonToast
  ]
})
export class AgregarProductoPage {

  nombre = '';
  precio: any = null;
  stock: any = null;

  errorNombre = false;
  errorPrecio = false;
  errorStock = false;
  showToast = false;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }

  agregar() {
    // Resetear errores
    this.errorNombre = false;
    this.errorPrecio = false;
    this.errorStock = false;

    let valido = true;

    // Validación del nombre
    if (!this.nombre.trim()) {
      this.errorNombre = true;
      valido = false;
    }

    // Validación del precio
    if (this.precio === null || this.precio === '' || Number(this.precio) <= 0) {
      this.errorPrecio = true;
      valido = false;
    }

    // Validación del stock
    if (this.stock === null || this.stock === '' || Number(this.stock) < 0) {
      this.errorStock = true;
      valido = false;
    }

    // Si algo está mal, no continua
    if (!valido) return;

    const data = {
      nombre: this.nombre,
      precio: Number(this.precio),
      stock: Number(this.stock),
      fecha: new Date()
    };

    this.productosService.agregarProducto(data).then(() => {

      this.showToast = true; // 👉 Mostrar toast

      setTimeout(() => {
        this.router.navigate(['/productos']);
      }, 1500);
    });

  }
}

