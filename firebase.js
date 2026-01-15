// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4T7yFe67rW7vCyTB9hARjfUOQwVCPmj0",
  authDomain: "jaguarmotopecasagenda.firebaseapp.com",
  projectId: "jaguarmotopecasagenda",
  storageBucket: "jaguarmotopecasagenda.firebasestorage.app",
  messagingSenderId: "601748187488",
  appId: "1:601748187488:web:76fc5ac3fa9ccab1c6d605"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Torna o Firestore global
const db = firebase.firestore();
