<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyC4T7yFe67rW7vCyTB9hARjfUOQwVCPmj0",
  authDomain: "jaguarmotopecasagenda.firebaseapp.com",
  projectId: "jaguarmotopecasagenda",
  storageBucket: "jaguarmotopecasagenda.firebasestorage.app",
  messagingSenderId: "601748187488",
  appId: "1:601748187488:web:76fc5ac3fa9ccab1c6d605"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
</script>
