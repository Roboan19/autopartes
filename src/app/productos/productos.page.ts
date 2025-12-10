import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { ProductosService } from '../services/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonButton, IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductosPage implements OnInit {

  productos: any[] = [];

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  toAdd() {
    this.router.navigate(['/agregar-producto']);
  }

  eliminar(id: string) {
    this.productosService.eliminarProducto(id);
  }

  editar(id: string) {
    this.router.navigate(['/editar-producto', id]);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
  

}
