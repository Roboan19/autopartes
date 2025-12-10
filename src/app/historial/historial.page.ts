import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, CommonModule]
})
export class HistorialPage implements OnInit {

  ventas: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productosService.getVentas().subscribe(data => {
      this.ventas = data;
    });
  }
}
