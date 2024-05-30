"use server";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";

export async function registerUserAction(prevState,FormData) {
  
  console.log("Hello From Register User Action");

  const validatedFields = schemaRegister.safeParse({
    username: FormData.get("username"),
    password: FormData.get("password"),
    email: FormData.get("email"),
  });

  

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }

  return {
    ...prevState,
    data: "ok",
  };
}

const schemaRegister = z.object({
    username: z.string().min(3).max(20, {
      message: "Username must be between 3 and 20 characters",
    }),
    password: z.string().min(6).max(100, {
      message: "Password must be between 6 and 100 characters",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
  });