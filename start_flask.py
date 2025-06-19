#!/usr/bin/env python3
"""
Flask backend starter script for Studio Nan portfolio website.
This provides the same API functionality as the Node.js Express backend.
"""

import subprocess
import sys
import os

def check_dependencies():
    """Check if Flask is installed."""
    try:
        import flask
        print(f"✓ Flask {flask.__version__} is installed")
        return True
    except ImportError:
        print("✗ Flask is not installed")
        print("Installing Flask...")
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", "flask"])
            print("✓ Flask installed successfully")
            return True
        except subprocess.CalledProcessError:
            print("✗ Failed to install Flask")
            return False

def start_server():
    """Start the Flask server."""
    print("\n🚀 Starting Flask backend server...")
    print("📍 Server will run on http://localhost:5001")
    print("🔗 API endpoints:")
    print("   POST /api/contact")
    print("   GET /api/testimonials")
    print("\n📝 Note: This Flask backend provides the same functionality as the Node.js version")
    print("🛑 Press Ctrl+C to stop the server\n")
    
    try:
        # Import and run the Flask app
        from flask_app import app
        app.run(host='0.0.0.0', port=5001, debug=True)
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped by user")
    except Exception as e:
        print(f"\n❌ Error starting server: {e}")

if __name__ == "__main__":
    print("🏠 Studio Nan Portfolio - Flask Backend")
    print("=" * 50)
    
    if check_dependencies():
        start_server()
    else:
        print("❌ Cannot start server due to missing dependencies")
        sys.exit(1)