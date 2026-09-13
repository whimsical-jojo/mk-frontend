import { collection, Firestore, getDocs } from "firebase/firestore";


/**
 * Retrieves and maps all documents from a specified Firestore collection.
 * 
 * @param firestoreInstance The active Cloud Firestore database instance.
 * @param collectionName The name of the Firestore collection to query.
 * @returns A promise resolving to an array of typed collection data including document identifiers.
 */

export async function fetchCollection<TargetType>(
  databaseInstance: Firestore,
  collectionName: string
): Promise<TargetType[]> {
  const querySnapshot = await getDocs(collection(databaseInstance, collectionName));
  
  return querySnapshot.docs.map(documentSnapshot => ({
    id: documentSnapshot.id,
    ...documentSnapshot.data()
  } as TargetType));
}