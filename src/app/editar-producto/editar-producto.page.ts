import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    CommonModule,
    FormsModule
  ]
})
export class EditarProductoPage implements OnInit {

  id!: string;
  nombre = '';
  precio = 0;
  stock = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore,
    private productosService: ProductosService
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;

    const ref = doc(this.firestore, `productos/${this.id}`);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data() as any;
      this.nombre = data.nombre;
      this.precio = data.precio;
      this.stock = data.stock;
    }
  }

  guardar() {
    const data = {
      nombre: this.nombre,
      precio: this.precio,
      stock: this.stock
    };

    this.productosService.actualizarProducto(this.id, data).then(() => {
      this.router.navigate(['/productos']);
    });
  }
}
