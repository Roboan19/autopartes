import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, provideRouter, withPreloading } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Firebase imports
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// 👉 Importar iconos
import { addIcons } from 'ionicons';
import { add, cart, home, pencil, trash } from 'ionicons/icons';

// 👉 Registrar iconos
addIcons({
  home,
  add,
  cart,
  pencil,
  trash
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyAjIAOVGvk6ev7wDtl-BDfR6KuxyVcXYvI",
        authDomain: "autopartesapp-6561f.firebaseapp.com",
        projectId: "autopartesapp-6561f",
        storageBucket: "autopartesapp-6561f.firebasestorage.app",
        messagingSenderId: "971061730666",
        appId: "1:971061730666:web:9034c71c641b3aa5bc9913"
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
});
