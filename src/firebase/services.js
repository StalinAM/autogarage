import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where
} from 'firebase/firestore'
import { auth, db } from './firebase'

export const registerUser = async (
  name,
  email,
  password,
  navigate,
  setError
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await updateProfile(userCredential.user, {
      displayName: name
    })
    navigate('/dashboard')
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      setError('El correo electrónico ya está registrado.')
    }
  }
}

export const loginUser = async (email, password, navigate, setError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/dashboard')
  } catch (error) {
    const errorCode = error.code
    if (errorCode === 'auth/wrong-password') {
      setError('La contraseña es incorrecta')
    } else if (errorCode === 'auth/user-not-found') {
      setError('El correo electrónico no fue encontrado')
    }
  }
}

export const logoutUser = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}
export const insertNewCar = async (car) => {
  try {
    const carsRef = collection(db, 'cars')
    await addDoc(carsRef, car)
  } catch (e) {
    console.log(e)
  }
}
export const fetchCars = async (uid) => {
  const cars = []
  const q = query(collection(db, 'cars'), where('uid', '==', uid))

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const car = { ...doc.data() }
    car.docId = doc.id

    cars.push(car)
  })
  return cars
}

export const deleteCar = async (docId) => {
  await deleteDoc(doc(db, 'cars', docId))
}
export const updateCar = async (docId, car) => {
  const res = await setDoc(doc(db, 'cars', docId), car)
}
