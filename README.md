# Full Stack Auth Application

A complete authentication application built with Next.js, MongoDB, and JWT. This project demonstrates user signup, login, and profile management with secure password hashing and token-based authentication.

## Features

✅ **User Signup** — Register with username, email, and password  
✅ **User Login** — Authenticate users with JWT tokens  
✅ **Password Hashing** — Secure passwords with bcryptjs  
✅ **JWT Authentication** — Token-based session management  
✅ **Profile Page** — View authenticated user information  
✅ **Logout** — Clear authentication tokens  
✅ **MongoDB Integration** — Persistent data storage  
✅ **Responsive UI** — Clean design with Tailwind CSS  

## Tech Stack

- **Frontend:** Next.js 16.2.9, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (jsonwebtoken), bcryptjs
- **HTTP Client:** Axios
- **Notifications:** react-hot-toast

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── user/
│   │       ├── signup/route.ts      # Signup API endpoint
│   │       ├── login/route.ts       # Login API endpoint
│   │       ├── logout/route.ts      # Logout API endpoint
│   │       └── me/route.ts          # Get current user data
│   ├── signup/page.tsx              # Signup page
│   ├── login/page.tsx               # Login page
│   └── profile/page.tsx             # User profile page
├── models/
│   └── userModel.js                 # MongoDB User schema
├── dbConfig/
│   └── dbConfig.ts                  # MongoDB connection setup
└── helpers/
    └── getDataFromToken.ts          # JWT token verification
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd full-stack-auth-application
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file** in the root directory:
```env
MONGO_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/fullstack-auth?retryWrites=true&w=majority
TOKEN_SECRET=your-secret-key-here
DOMAIN=http://localhost:3000
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## API Endpoints

### POST `/api/user/signup`
Create a new user account
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### POST `/api/user/login`
Authenticate user and receive JWT token
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### GET `/api/user/me`
Get authenticated user's data (requires valid JWT token in cookies)

### GET `/api/user/logout`
Clear authentication token and logout user

## Usage

### Signup
1. Navigate to `/signup`
2. Enter username, email, and password
3. Click "Signup" to create account
4. Redirected to login page

### Login
1. Navigate to `/login`
2. Enter email and password
3. Click "Login" to authenticate
4. JWT token stored in secure cookies
5. Redirected to profile page

### Profile
1. After login, visit `/profile`
2. View your username and user information
3. Click "Get User Data" to refresh information
4. Click "Logout" to exit

## Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Security Features

- 🔐 **Password Hashing** — Bcryptjs with salt rounds
- 🔑 **JWT Tokens** — Secure token-based authentication
- 🍪 **HTTP-Only Cookies** — Tokens stored securely in cookies
- ✅ **Input Validation** — Required field validation
- 📱 **Password Comparison** — Secure password verification

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URL` | MongoDB connection string with credentials |
| `TOKEN_SECRET` | Secret key for JWT token signing |
| `DOMAIN` | Application domain for redirects |

## Dependencies

### Core
- `next` — React framework
- `react` — UI library
- `mongoose` — MongoDB ODM
- `jsonwebtoken` — JWT implementation
- `bcryptjs` — Password hashing

### UI & Styling
- `tailwindcss` — Utility-first CSS framework
- `react-hot-toast` — Toast notifications
- `axios` — HTTP client

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- 📧 Email verification
- 🔄 Password reset functionality
- 👤 User profile editing
- 🔐 Two-factor authentication
- 📱 Mobile app
- 🌙 Dark mode

## Troubleshooting

### MongoDB Connection Error
- Verify `MONGO_URL` in `.env` file
- Check IP whitelist in MongoDB Atlas
- Ensure credentials are correct

### Hydration Mismatch Warning
- This is a development warning and does not affect functionality
- Suppressed with `suppressHydrationWarning` attribute

### Token Not Found
- Ensure cookies are enabled in your browser
- Check that login was successful
- Clear browser cookies and try again

## License

MIT License - feel free to use this project for learning and development.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Built with ❤️ using Next.js and MongoDB**

