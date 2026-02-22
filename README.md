# Flask Site

A small example Flask application demonstrating a minimal project layout with static files and templates.

## Features

- Simple Flask app serving an `index` page
- Static assets: CSS and JavaScript in `static/`
- Templates using Jinja2 in `templates/`

## Requirements

- Python 3.8 or newer
- See `requirements.txt` for Python dependencies

## Quick Start (Windows)

1. Create and activate a virtual environment:

   ```powershell
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```

2. Install dependencies:

   ```powershell
   pip install -r requirements.txt
   ```

3. Run the app:

   ```powershell
   $env:FLASK_APP = "app.py"
   $env:FLASK_ENV = "development"
   python app.py
   ```

4. Open a browser and visit: http://127.0.0.1:5000/

## Project Structure

- `app.py` — Flask application entrypoint
- `requirements.txt` — Python dependencies
- `templates/` — HTML templates (e.g., `index.html`, `base.html`)
- `static/` — Static assets (`css/`, `js/`)

## Notes

- This README is intentionally minimal. If you want me to add deployment instructions, Dockerfile, or GitHub Actions CI, tell me which you'd like.

## License

This project is provided under the MIT License (or change as appropriate).

Author: Arun Kumar & Ankita Kumari
