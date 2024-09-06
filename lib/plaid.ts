import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

// 1st making a plaid configuration
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    }
  }
})


// lastly pass the configuration and create Plaid API and export it.
export const plaidClient = new PlaidApi(configuration);