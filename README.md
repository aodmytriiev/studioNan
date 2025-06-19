# Studio Nan Interior Design Portfolio

A professional interior design portfolio website showcasing minimalist and natural aesthetic residential design projects.

## Technology Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- React Query for data fetching

### Backend Options

#### Node.js Backend (Default)
- Express.js server
- TypeScript
- In-memory storage
- Port: 5000

#### Flask Backend (Alternative)
- Python Flask server
- In-memory storage matching Node.js implementation
- Port: 5001

## Running the Application

### With Node.js (Current Default)
The application currently runs with the Node.js backend using the "Start application" workflow.

### With Flask Backend
To run with Flask instead:

1. Stop the current workflow
2. Run the Flask server:
   ```bash
   python flask_app.py
   ```
3. The Flask backend will serve the same API endpoints on port 5001

### API Endpoints (Both Backends)

- `POST /api/contact` - Submit contact form
- `GET /api/testimonials` - Get testimonials data

### Frontend Configuration

The frontend is configured to work with both backends. To switch between them, you would need to update the API base URL in the frontend configuration if needed.

## Features

- **Never Too Small Project**: Complete showcase of a 708 sq ft residential design
- **Room Sections**: Living room, kitchen, porch, bathroom, bedroom, and workspace
- **Interactive Elements**: Contact form, testimonials display
- **Responsive Design**: Mobile-first approach
- **Video Background**: Dynamic homepage with video background

## Project Structure

```
├── client/          # React frontend
├── server/          # Node.js Express backend
├── shared/          # Shared TypeScript schemas
├── flask_app.py     # Flask backend alternative
└── attached_assets/ # Project images and videos
```