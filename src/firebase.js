// Conexión a Firebase de la VERSIÓN PELUQUERÍAS (proyecto "brujula-de-caja-peluq").
// Es un proyecto independiente del de la app original ("brujula-de-caja"): no comparten
// usuarios, datos ni reglas.
// Estas claves no son secretas: están hechas para viajar dentro del código de la app.
// La seguridad real la dan el login (Authentication) y las reglas de Firestore (firestore.rules),
// no esta configuración.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALR7o9pZUEAwc6AG0-W5gPo89Y9KXo7x4",
  authDomain: "brujula-de-caja-peluq.firebaseapp.com",
  projectId: "brujula-de-caja-peluq",
  storageBucket: "brujula-de-caja-peluq.firebasestorage.app",
  messagingSenderId: "574247491148",
  appId: "1:574247491148:web:880c13598b64e53bd306e9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// ignoreUndefinedProperties: campos como "clienteId" quedan en undefined cuando una venta
// no tiene cliente asociado (una venta de mostrador común). Esta opción hace que Firestore
// simplemente no guarde esos campos, en vez de rechazar todo el guardado — el mismo
// comportamiento que tenía el prototipo con window.storage.
export const db = initializeFirestore(app, { ignoreUndefinedProperties: true });
