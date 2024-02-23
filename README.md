
# EHR Dashboard with CRUD Operations

### Assignment

## Features

- **User Authentication**: Secure user authentication system to protect user data and enable personalized experiences using JWT, Bcrypt and Redux.
- **User Authorization**: Implemented role-based authorization for users. In real life, admin access would typically be granted through the database or by using a different route. However, for demonstration purposes in this project, admin access is granted to showcase and I have established relationships as well in my project. If a user is a patient, they can only modify their own data, while doctors and admins can modify any user's data. Only admins are permitted to delete patient data.
- **Graphs**: To view the graphs, one must first register and then log in. After logging in, the graphs on the dashboard can be viewed. For showing the graphs I have used **recharts** npm package.


# 💻 Tech Stack
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) 
![NodeJs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)

# ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) Npm-Packages
1) express - for setting up the server
2) mongoose - for connecting the database(mongoDB) in my case
3) jsonwebtoken - for generating the tokens-access and refresh token in this case.
4) dotenv - for preparing an .env file storing sesitive variables
5) bcrypt- for hashing the password.
6) cookie-parser - for sending cookies
7) cors - for running backend and frontend together
8) chakraUI
9) react-icons
10) react-redux
11) redux
12) recharts
13) styled-components
14) react
15) react-dom

## Screenshot of home(Dashboard)

![Screenshot 1](<https://i.ibb.co/Q8M3G99/screencapture-ehr-shivandrus-projects-vercel-app-2024-02-23-12-13-01.png>)

## Installation

To run EHR locally, follow these steps:

1. Clone this repository:
2. Navigate to the project directory:
3. Install dependencies for the server: `npm install`
4. Navigate to the client directory: `cd client`
5. Install dependencies for the client: `npm install`
6. Return to the root directory: `cd ..`
7. Start the server: `npm run dev`
8. Start the client: `npm run dev`

## Features
1.User is Authenticated with help of tokens accessToken, refreshToken. The tokens are generated with help of JWT and the password is hashed with help of bcrypt. The user role, user Id is passed in the payload. For sending and receiving the tokens I have used cookie-parser npm package.
2.I have applied /register end-point for registering a user and /login endpoint for logging in the user.
3. Applied CRUD operations, applied Role Based Authentication System (patient, Doctor, Admin), applied the concept of relationship patients can only update their data and not someone else's data. Doctors, Admin and Patients can add the data via form present in records section.
4.I have used proper try-catch block for error handling and the errors are handled in a proper way.
