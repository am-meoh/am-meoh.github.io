/**
 * Config file
 * @summary This file should contain all the central configuration variables for the whole project.
 * @howToUse Define the general name of the variable, map that name on the LOCAL, DEV, RC, PROD sections to map the right value from Doppler
 * @return Config JS standard object
 */

const CONFIGS = {
  [import.meta.env.VITE_LOCAL_DOMAIN]: {
    AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN || 'dev-zm8k7g0jntagspap.us.auth0.com',
    AUTH0_CLIENT_ID: import.meta.env.VITE_CLIENT_ID || 'BnGaE7LXaRKG7ZA0hWN5cKZG3F9b3Zlb',
    AUTH0_AUDIENCE: import.meta.env.VITE_AUTH0_AUDIENCE || 'https://meoh.api',
  },
};

const VITE_CONFIG = CONFIGS[import.meta.env.VITE_LOCAL_DOMAIN];
const CONFIG = {
  ...VITE_CONFIG,
  IS_PROD: window.location.origin === import.meta.env.VITE_PROD_DOMAIN,
  IS_DEV: window.location.origin === import.meta.env.VITE_DEV_DOMAIN,
};

export default CONFIG;
