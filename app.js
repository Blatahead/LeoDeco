import { config } from "dotenv";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set, child } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    databaseURL: config.DATABASE_URL,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGING_SENDER_ID,
    appId: config.env.APP_ID,
    measurementId: config.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("submitButton").addEventListener('click', function(){
	event.preventDefault();

    const date = new Date();
	const currentDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

	set(ref(db, 'user/' + document.getElementById('firstName').value + " " +document.getElementById('lastName').value+ " "+document.getElementById('postalCode').value),
	{
		prenom : document.getElementById('firstName').value,
		nom : document.getElementById('lastName').value,
		email : document.getElementById('email').value,
		quantity : document.getElementById('quantity').value,
		postalCode : document.getElementById('postalCode').value,
		dateEnvoi: currentDate
	}).then(() => {
        console.log("Données envoyées avec succès !");
        // Masquer le formulaire et afficher la page de confirmation
        document.getElementById('confirmationPage').classList.remove('hidden');
        document.getElementById('formPage').style.display = 'none';
		alert("Envoi réussi")
    });
})
