import { CONFIG } from '../config/config';

export const ENDPOINTS = {
  SAMPLE: {
    ALL: 'https://api.coindesk.com/v2/bpi/currentprice.json',
  },
  ALL: {
    API: 'https://api.publicapis.org/entries',
  },

  INFLUENCERS: {
    LIST: '/influencer/',
    ADD_SINGLE: '/influencer/create',
    ADD_INFLUENCER_IN_COLLECTION: '/user/follow',
  },
  // SECTION_URLS: {
  //   ALL: '/section_urls',
  // },
  AUTH: {
    LOGIN: `${CONFIG.AUTH_URL}/auth/login`,
    REGISTER: `${CONFIG.AUTH_URL}/auth/registration`,
    RESET_PASSWORD: `${CONFIG.AUTH_URL}/auth/reset-password`,
    VERIFY: `${CONFIG.AUTH_URL}/auth/verify`,
    CHANGE_PASSWORD: `${CONFIG.AUTH_URL}/auth/change-password`,
    RESEND_EMAIL: `${CONFIG.AUTH_URL}/auth/resend-verification`,
    FORGOT_PASSWORD: '/auth/forgot_password',
    LOGOUT: '/auth/authLogout',
  },
  GOOGLE: {
    USER_INFO: import.meta.env.VITE_APP_GOOGLE_USERINFO_API,
  },
  ARTICLES: {
    ALL: '/articles',
    SEEN: '/articles_seen',
  },
  USERS: {
    UPDATE_ACCOUNT: '/users/update',
  },
  // RELEASENOTES: {
  //   HOME: '/release_notes',
  // },
};
