# IP Address Management Solution

## Installation
Reactjs is used for the frontend and PHP Laravel is used for the backend.

1. Download the project (or clone using GIT)
2. Copy and paste `.env` file from the project into your `.env` file and configure database credentials
3. Navigate to the project's root directory using terminal
4. Run `composer install`
5. Run migrations `php artisan migrate --seed`
6. Start local server by executing `php artisan serve`
7. Open new terminal and navigate to the `react` folder using `cd react`
8. Run `npm install`
9. Run `npm run dev` to start vite server for React

## Endpoints
1. Login Page: `localhost:5173/login`
2. Signup Page: `localhost:5173/signup`
3. Dashboard Page: `localhost:5173/addresses` (Protected route)
4. Add New IP Address Page: `localhost:5173/addresses/new` (Protected route)
5. Edit IP Address Page: `localhost:5173/addresses/:id` (Protected route)
6. Logout Endpoint: `localhost:5173/logout`


### Preview Images
<img src="https://github.com/nafis10670/IP-Address-Management-Solution/assets/45102589/9f8f9f4c-4103-40f9-b5fa-3d09b1fa8b64" alt="Login Page" width=350>
<img src="https://github.com/nafis10670/IP-Address-Management-Solution/assets/45102589/e6a1c4b9-7198-4cd7-bd67-68c96d0df81a" alt="Signup Page" width=300>
<img src="https://github.com/nafis10670/IP-Address-Management-Solution/assets/45102589/5c349bc8-a7aa-4c4d-9cda-b483df6f0245" alt="Dashboard" height=400>
<img src="https://github.com/nafis10670/IP-Address-Management-Solution/assets/45102589/89cc43ea-9c0c-4a69-87c0-d63909c53001" alt="New IP" height=200>
<img src="https://github.com/nafis10670/IP-Address-Management-Solution/assets/45102589/a31c38a6-8cf0-4ce8-8efd-5154d33e66dc" alt="Update IP" height=200>
