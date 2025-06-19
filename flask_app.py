from flask import Flask, request, jsonify, send_from_directory
import os
from dataclasses import dataclass, asdict
from typing import Dict, List, Optional
import json

# Data models matching the TypeScript schema
@dataclass
class ContactSubmission:
    id: int
    name: str
    email: str
    message: str

@dataclass
class Testimonial:
    id: int
    name: str
    text: str
    project: str

# In-memory storage matching the Node.js implementation
class FlaskStorage:
    def __init__(self):
        self.contact_submissions: Dict[int, ContactSubmission] = {}
        self.testimonials: Dict[int, Testimonial] = {}
        self.current_contact_id = 1
        self.current_testimonial_id = 1
        self._add_sample_testimonials()
    
    def _add_sample_testimonials(self):
        sample_testimonials = [
            {
                "name": "Sarah Chen",
                "text": "Studio Nan transformed our small apartment into a peaceful sanctuary. The use of natural materials and thoughtful space planning exceeded our expectations.",
                "project": "Urban Loft Renovation"
            },
            {
                "name": "Michael Rodriguez",
                "text": "The attention to detail and understanding of our lifestyle made all the difference. Our home now perfectly balances function with beauty.",
                "project": "Family Home Design"
            },
            {
                "name": "Emma Thompson",
                "text": "Working with Studio Nan was a dream. They listened to our vision and created something even better than we imagined.",
                "project": "Coastal Retreat"
            }
        ]
        
        for testimonial_data in sample_testimonials:
            testimonial = Testimonial(
                id=self.current_testimonial_id,
                **testimonial_data
            )
            self.testimonials[self.current_testimonial_id] = testimonial
            self.current_testimonial_id += 1
    
    def create_contact_submission(self, name: str, email: str, message: str) -> ContactSubmission:
        submission = ContactSubmission(
            id=self.current_contact_id,
            name=name,
            email=email,
            message=message
        )
        self.contact_submissions[self.current_contact_id] = submission
        self.current_contact_id += 1
        return submission
    
    def get_testimonials(self) -> List[Dict]:
        return [asdict(testimonial) for testimonial in self.testimonials.values()]

# Initialize Flask app and storage
app = Flask(__name__)
storage = FlaskStorage()

# CORS headers for frontend communication
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# API Routes matching the Express implementation
@app.route('/api/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        
        # Basic validation
        if not data or not all(key in data for key in ['name', 'email', 'message']):
            return jsonify({'error': 'Missing required fields'}), 400
        
        name = data['name'].strip()
        email = data['email'].strip()
        message = data['message'].strip()
        
        if not name or not email or not message:
            return jsonify({'error': 'All fields are required'}), 400
        
        # Basic email validation
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        submission = storage.create_contact_submission(name, email, message)
        return jsonify({'success': True, 'id': submission.id})
        
    except Exception as e:
        return jsonify({'error': 'Failed to submit contact form'}), 500

@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    try:
        testimonials = storage.get_testimonials()
        return jsonify(testimonials)
    except Exception as e:
        return jsonify({'error': 'Failed to fetch testimonials'}), 500

# Serve static files (for production deployment)
@app.route('/')
def serve_index():
    return send_from_directory('dist', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join('dist', path)):
        return send_from_directory('dist', path)
    else:
        return send_from_directory('dist', 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=True)