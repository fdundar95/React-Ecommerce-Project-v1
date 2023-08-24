# React-Ecommerce-Project

This is a React.js e-commerce project that showcases a fully functional online store.

## Demo
https://aeon-artifacts.netlify.app/

## Features

- **Client-side routing** with `react-router-dom`.
- **Airtable CMS** as the database, fully customizable, using the official Airtable JavaScript library to fetch data.
- **Working filtering and sorting** for products.
- **Auth0** for authentication.
- **Formspree** for signing up for the newsletter.
- **Fully functional payment processor** with Stripe.
- Utilizes **Netlify serverless functions** for fetching data and payment intent.
- Utilizing **global CSS**, with customizable colors, fonts, and styles.
- **CSS-in-JS** with `styled-components`, fully responsive.
- All images are **AI-generated**.

## Environment Variables

This project requires several environment variables to be set in order to function properly. You can create a `.env` file in the root folder of the project and add the following variables:
```text
REACT_APP_AUTH_DOMAIN=your_auth0_domain_here
REACT_APP_AUTH_CLIENT_ID=your_auth0_client_id_here
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
REACT_APP_STRIPE_SECRET_KEY=your_stripe_secret_key_here
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE=your_airtable_base_id_here
AIRTABLE_TABLE=your_airtable_table_id_here
```
Make sure to replace the placeholder values with your own API keys and credentials. Once you have set up the environment variables, restart the development server for the changes to take effect.

![env](https://github.com/fdundar95/React-Ecommerce-Project/assets/79167732/62771dd1-6787-4938-bf8b-e1c1beb2b21b)

## Run Locally

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.
4. Open your browser and navigate to `http://localhost:8888` to view the app.

## Screenshots

Here are some screenshots of the project:

### Main Page
![mainpage](https://github.com/fdundar95/React-Ecommerce-Project/assets/79167732/377d0de7-4990-44ee-afbf-42d72d7ded56)

### Airtable

![airtable](https://github.com/fdundar95/React-Ecommerce-Project/assets/79167732/2482d9d5-f8b9-46e4-a10e-aaf5dc693d40)

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
