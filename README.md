# React-Ecommerce-Project (Aeon Artifacts)

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
- All product images are **AI-generated**.

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

![env](https://github.com/fdundar95/React-Ecommerce-Project-v1/assets/79167732/2943d11b-409f-4bfa-87e9-f85d948b5ed7)

## Run Locally

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.
4. Open your browser and navigate to `http://localhost:8888` to view the app.

## Screenshots

Here are some screenshots of the project:

### Main Page
![mainpage](https://github.com/fdundar95/React-Ecommerce-Project-v1/assets/79167732/b75504f0-cbfc-4e69-87a2-eae6074d1dcd)

### Products page
![products](https://github.com/fdundar95/React-Ecommerce-Project-v1/assets/79167732/45f81b0b-47e7-4a96-932d-6499af5c69ab)

### Airtable
![airtable](https://github.com/fdundar95/React-Ecommerce-Project-v1/assets/79167732/415b893b-8a77-48df-9862-c2b42832554b)

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Version 2

Currently working on a v2 of this project, which will be a separate and distinct version of this one. Some of the highlights of the new project include:

- Built with **Vite** for faster development and build times.
- Integration with **Redux Toolkit** for improved state management.
- Use of **React Query** for efficient data fetching and caching.
- Adoption of **Tailwind CSS** for rapid UI development.
