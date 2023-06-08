import { z } from 'zod'

/** Validate env variables with zod */
const envVariables = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string().url(),
  NEXT_PUBLIC_Y_METRICA_ID: z.number(),
  NEXT_PUBLIC_Y_MAPS_ID: z.string(),
  NODE_ENV: z.string()
})

envVariables.safeParse(process.env)

declare global {
  interface ImportProcessEnv extends z.infer<typeof envVariables> { }
}

export const config = {
  API_ENDPOINT: String(process.env.API_ENDPOINT),
  Y_METRICA_ID: Number(process.env.NEXT_PUBLIC_Y_METRICA_ID),
  Y_MAPS_ID: process.env.NEXT_PUBLIC_Y_MAPS_ID,
  IS_DEV: process.env.NODE_ENV === "development",
  IS_PROD: process.env.NODE_ENV === "production"
} as const
