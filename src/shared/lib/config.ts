import { z } from 'zod'

/** Validate env variables with zod */
const envVariables = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string().url(),
  NEXT_PUBLIC_YM_ID: z.number(),
  NODE_ENV: z.string()
})

envVariables.safeParse(process.env)

declare global {
  interface ImportProcessEnv extends z.infer<typeof envVariables> { }
}

export const config = {
  API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  YM_ID: Number(process.env.NEXT_PUBLIC_YM_ID),
  IS_DEV: process.env.NODE_ENV === "development",
  IS_PROD: process.env.NODE_ENV === "production"
} as const
