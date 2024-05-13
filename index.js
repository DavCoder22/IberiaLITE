// index.js
import { db } from './firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Función para añadir datos a Firestore
async function addData() {
    try {
        // Añade un documento a la colección "users"
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Función para leer datos desde Firestore
async function readData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

// Función principal que maneja el flujo de operaciones
async function main() {
    await addData();
    await readData();
}

main().catch(console.error);
