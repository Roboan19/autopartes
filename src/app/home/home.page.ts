import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class HomePage {

  constructor(private router: Router) { }

  goProductos() {
    this.router.navigate(['/productos']);
  }

  goVentas() {
    this.router.navigate(['/ventas']);
  }

  goHistorial() {
    this.router.navigate(['/historial']);
  }
}
