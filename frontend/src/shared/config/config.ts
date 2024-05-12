export const CONFIG = {
  isDevelopment: import.meta.env.MODE === 'development',
  API_URL: import.meta.env.VITE_API_URL || '',
  AUTH_URL: import.meta.env.VITE_AUTH_URL || '',
  ACCESS_SECRET: import.meta.env.VITE_APP_API_ACCESS_TOKEN_SECRET || '',
  BASENAME: import.meta.env.VITE_APP_BASENAME,
  GOOGLE_CLIENT_ID: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID || '',
  GOOGLE_CLIENT_SECRET: import.meta.env.VITE_APP_GOOGLE_CLIENT_SECRET,
  RECAPTCHA_SITE_KEY: import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY,
  RECAPTCHA_SECRET: import.meta.env.VITE_APP_RECAPTCHA_SECRET,
};
