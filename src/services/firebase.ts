import { UserDataType, UserType } from "@/types/user";
import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const registerUser = async (user: UserType) => {
  const environment: string = process.env.NEXT_PUBLIC_ENVIRONMENT!;

  const userSlug = user.name.toLowerCase().replaceAll(' ', '-');

  try {
    const docRef = doc(db, `database/${environment}/users`, userSlug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, { ...user });
    } else {
      await setDoc(docRef, { ...user });
    }

    return {
      ...user,
      slug: userSlug,
    } as UserDataType;
  } catch (err) {
    console.error(err);
  }
};

export const getUser = async (userSlug: string) => {
  const environment: string = process.env.NEXT_PUBLIC_ENVIRONMENT!;

  const docRef = doc(db, `database/${environment}/users`, userSlug);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserType;
  }
};
