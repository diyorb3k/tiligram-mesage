"use client"

import { z } from "zod"

 export const emailSchema = z.object({
  email: z.string().email({message:'Invalid email address,plase check and again'}),
})


 export const otpSchema = z.object({
  otp: z.string().min(6, {message: "Your one-time password must be 6 characters."}),
})
.merge(emailSchema)