import {
  query,
  orderBy,
  collection,
  doc,
  getDocs,
  setDoc
} from "firebase/firestore";
import { firestore } from "../firebase.config";

//To save new Items
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

//To get all food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
