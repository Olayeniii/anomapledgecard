# Anoma Mage ID Generator

<div align="center">
  <img src="src/images/anomacard.PNG" width="300" alt="Anoma ID Card Preview">
</div>

A web application that allows Anoma community members to create custom digital identity cards with their profile information, role, and duties.

## Features

- 🖼️ **Custom ID Cards**: Generate personalized Anoma identity cards
- 📸 **Profile Integration**: Upload your profile picture
- 🎨 **Role Selection**: Choose from Heliax, GrandMaster, IntentMaster, and other roles
- 📥 **Export Options**: Download your ID as PNG or PDF
- 🎉 **Celebration**: Confetti animation on successful generation
- 📱 **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. Fill in your details:

   - Name
   - X (Twitter) handle
   - Select your role and duty
   - Choose your join date
   - Upload a profile picture

2. Preview your Anoma ID card in real-time

3. Download your ID card:
   - PNG for digital use
   - PDF for printing

## Tools Used

- React.js
- HTML2Canvas (for image capture)
- jsPDF (for PDF generation)
- Canvas Confetti
- CSS (custom theme with mystical aesthetics)

## Installation

```bash
# Clone the repository
git clone https://github.com/Olayeniii/anomapledgecard.git

# Navigate to project directory
cd anoma-id-generator

## Install dependencies
npm install

# Start development server
npm start

```

## Customization

To customize the card template:

- Replace src/images/anomacard.PNG with your background image

- Adjust field positions in src/App.css under .field classes

- Modify color variables in :root section of CSS

## Contributing

Contributions are welcome! Please open an issue first to discuss proposed changes.

## Note:

This is a community project and not officially affiliated with Anoma.
