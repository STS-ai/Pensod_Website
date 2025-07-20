# Pension.ai Website

A modern, responsive website for Pension.ai, showcasing AI-powered financial advisory services.

## Features

- Responsive design for all devices
- Modern, futuristic UI with blue gradient theme
- Smooth scrolling and animations
- Contact form with validation
- Blog section with search functionality
- Mobile-friendly navigation

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd pension-ai-website
```

2. Open `index.html` in your browser to view the website locally.

3. For development, you can use any local server. For example, with Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
pension-ai-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── images/            # Image assets
│   ├── hero-image.jpg
│   ├── microsoft-startups.png
│   └── azure.png
└── README.md          # This file
```

## Customization

### Colors
The main colors and gradients can be modified in the `:root` section of `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
    --secondary-gradient: linear-gradient(135deg, #0d47a1 0%, #42a5f5 100%);
    --text-light: #ffffff;
    --text-dark: #1a237e;
}
```

### Images
Replace the placeholder images in the `images/` directory with your own:
- `hero-image.jpg`: Main hero section image
- `microsoft-startups.png`: Microsoft for Startups logo
- `azure.png`: Azure logo

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For any questions or support, please contact:
- Email: stav@pensionai.org
- Address: 144 Menachem Begin Blvd. Floor 50, Tel Aviv

## License

Copyright © 2025 Pension.ai. All rights reserved. 