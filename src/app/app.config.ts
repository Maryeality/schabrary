import { ApplicationConfig, provideZoneChangeDetection, inject, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp, initializeServerApp} from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"schabrary","appId":"1:1079364688244:web:2577b42754b40d43f2b421","storageBucket":"schabrary.appspot.com","apiKey":"AIzaSyDTeJGg-wysbToGbc-GwoE7bu0AiRp2vrI","authDomain":"schabrary.firebaseapp.com","messagingSenderId":"1079364688244"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage())], 
};
