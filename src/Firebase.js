import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCZBcJyYBNBTW9Oqh0w96gP99o2CgXdMzQ",
    authDomain: "e-commerce-8de91.firebaseapp.com",
    projectId: "e-commerce-8de91",
    storageBucket: "e-commerce-8de91.firebasestorage.app",
    messagingSenderId: "597058681035",
    appId: "1:597058681035:web:5f39522f168b689318834e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error)
        const code = error?.code?.split("/")[1] || "signup-failed";
        throw { code };
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        try {

        } catch (error) {
            console.log(error)
            const code = error?.code?.split("/")[1] || "login-failed";
            throw { code };
        }
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, signup, login, logout };