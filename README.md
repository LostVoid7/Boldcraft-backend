Artwork Portfolio API

This project is a backend service for an artist portfolio website. It provides endpoints for managing artworks and uploading images to Cloudinary. Only admins can create, update, or delete artworks. The public can view artworks without authentication.

Features

Admin authentication using JWT

Create, read, update, and delete artworks

Image upload using Cloudinary

Multer + streamifier for streaming uploads

PostgreSQL database

Secure admin-only routes

Public gallery endpoints

Tech Stack

Node.js + Express

PostgreSQL

Cloudinary for image hosting

Multer for file handling

JWT for authentication

Render / Railway (if deployed)

Requirements

Node.js (v18+)

PostgreSQL database

Cloudinary account

.env file with:

PORT=5000
DATABASE_URL=your_postgres_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

Installation
git clone <repo-url>
cd artwork-api
npm install

Run the database migrations (or manually create your tables).

Start the server:

npm start

The API should now be available at:

http://localhost:5000

Authentication

Admin routes require a JWT token.

Send it in headers:

Authorization: Bearer <token>

Use /api/auth/register to create an admin (optional if pre-seeded).
Use /api/auth/login to obtain a token.

Image Upload

To upload an image:

POST /api/artworks/upload-image

Form-data:

image: file (jpg, png)

Returns:

{
"url": "https://cloudinary.com/.../image.jpg"
}

Token required.

API Endpoints
Auth
POST /api/auth/register // create admin
POST /api/auth/login // login admin

Artworks
GET /api/artworks // public: list all artworks
GET /api/artworks/:id // public: get one artwork

POST /api/artworks // admin: create
PATCH /api/artworks/:id // admin: update
DELETE /api/artworks/:id // admin: delete

Images
POST /api/artworks/upload-image // admin only

Folder Structure
/src
/controllers
/routes
/middleware
/config
/db
server.js

Deployment

Create environment variables on your host (Render/Railway).
Deploy normally through their dashboards.
Cloudinary will work in production once keys are set.

License

MIT License (optional).

Future Improvements

Delete Cloudinary images when artworks are deleted

Add pagination

Add tags/categories

Add an admin dashboard UI
