## Country Info App

This Vue.js application provides information about countries and their public holidays.
Features

- Search for countries
- Display random countries with their next public holiday
- View public holidays for a selected country and year
- Year selection for viewing holidays

#### Technology Stack

- Vue 3 with Composition API
- Vue Router for navigation
- Axios for API requests
- Bootstrap for styling
- ESLint and Prettier for code quality

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_BASE_URL`

### Installation

Clone the repository:

```
git clone https://github.com/Kattegatt/country-info.git
cd country-info-app
```

Install dependencies:

```
Copy npm install
```

### Running the Application

To start the development server:

```
npm run dev
```

The application will be available at http://localhost:5173.

#### Project Structure

- src/components/: Vue components
- src/views/: Vue views (pages)
- src/composables/: Composable functions for API calls
- src/router.js: Vue Router configuration
