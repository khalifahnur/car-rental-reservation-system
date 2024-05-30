import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: serviceAccount.type,
      project_id: serviceAccount.project_id,
      private_key_id: serviceAccount.private_key_id,
      private_key: serviceAccount.private_key.replace(/\\n/g, '\n'), // Unescape newline characters
      client_email: serviceAccount.client_email,
      client_id: serviceAccount.client_id,
      auth_uri: serviceAccount.auth_uri,
      token_uri: serviceAccount.token_uri,
      auth_provider_x509_cert_url: serviceAccount.auth_provider_x509_cert_url,
      client_x509_cert_url: serviceAccount.client_x509_cert_url,
    }),
  });
}

const db = admin.firestore();

export async function POST(req) {
  try {
    const body = await req.json();
    const { BookingsId, id, totalPrice, carModel, year, userID, pickUpDate, dropOffDate } = body;

    if (!BookingsId || !id || !totalPrice || !carModel || !year || !userID || !pickUpDate || !dropOffDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const pickUpDateTime = new Date(pickUpDate);
    const dropOffDateTime = new Date(dropOffDate);

    if (isNaN(pickUpDateTime) || isNaN(dropOffDateTime)) {
      return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
    }

    // Add data to Firestore
    await db.collection('bookings').doc(BookingsId).set({
      id,
      totalPrice,
      carModel,
      year,
      userID,
      pickUpDate: pickUpDateTime,
      dropOffDate: dropOffDateTime,
    });

    return NextResponse.json({ message: 'Booking added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error occurred when storing in Firestore:', error.message);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
