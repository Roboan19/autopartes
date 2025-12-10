import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonContent, IonHeader, IonItem, IonInput,
  IonSelect, IonSelectOption, IonTitle, IonToolbar
} from '@ionic/angular/standalone';

import { ProductosService } from '../services/productos';
import { VentasService } from '../services/ventas';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
  standalone: true,
  imports: [
    IonItem, IonButton, IonContent, IonHeader, IonTitle,
    IonToolbar, IonInput, IonSelect, IonSelectOption,
    CommonModule, FormsModule
  ]
})
export class VentasPage implements OnInit {

  productos: any[] = [];
  productoSeleccionado: any = null;
  cantidad: number = 0;

  constructor(
    private productosService: ProductosService,
    private ventasService: VentasService
  ) {}

  ngOnInit() {
    this.productosService.getProductos().subscribe(p => this.productos = p);
  }

  async realizarVenta() {
    try {
      await this.ventasService.vender(this.productoSeleccionado, this.cantidad);
      alert("Venta registrada correctamente");
      this.cantidad = 0;
      this.productoSeleccionado = null;
    } catch (err: any) {
      alert(err.message);
    }
  }
}
