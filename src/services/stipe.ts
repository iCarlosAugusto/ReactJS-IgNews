import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(
  "sk_test_51KcDVRLTs40v7cUfexLzHDuAAbcFvXb0PhSfMeGG6RDeJQtvaKr4n3zPfF1vx43qfmwe3C2TDV8OU8d0BB79R9D800q64WjkQ1",
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version
    },
  }
);