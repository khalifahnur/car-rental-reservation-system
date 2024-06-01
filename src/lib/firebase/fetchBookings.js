import { db } from "./firebaseConfig"; 
import { collection, query, where, getDocs } from 'firebase/firestore';

const fetchBookings = async (userId) => {
    try {
      const bookingsQuery = query(collection(db, 'bookings'), where('userID', '==', userId));
      const bookingsSnapshot = await getDocs(bookingsQuery);
      const bookings = bookingsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          pickUpDate: data.pickUpDate.toDate().toString(), 
          dropOffDate: data.dropOffDate.toDate().toString() 
        };
      });
      return bookings;
    } catch (error) {
      console.error("Error fetching bookings: ", error);
      return [];
    }
  };

export default fetchBookings;
