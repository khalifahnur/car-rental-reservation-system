import axios from 'axios';
import { NextResponse } from "next/server";

const API_URL = "https://randomuser.me/api/";

export async function GET(){
  try {
    const response = await axios.get(`${API_URL}?results=3`);
    const users = response.data.results.map((user) => ({
      username: user.login.username,
      image: user.picture.large,
    }));
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch users" });
  }
}

// export async function GET(){
//   return NextResponse.json([{ username: 'test', image: 'test' }]);
// }
