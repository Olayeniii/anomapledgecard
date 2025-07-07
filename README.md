# Anoma Mage ID Generator

<div align="center">
  <img src="src/images/anomacard.PNG" width="300" alt="Anoma ID Card Preview">
</div>

A web application for Anoma community members to create custom digital identity cards with their profile information, role, and join date.

---

## Features

- 🖼️ **Custom ID Cards**: Generate personalized Anoma identity cards
- 📸 **Profile Photo Upload**: Add your own profile picture
- 🎨 **Role Selection**: Choose from Heliax, GrandMaster, IntentMaster, and more
- 📥 **Export Options**: Download your ID as PNG or PDF
- 📱 **Responsive Design**: Works on desktop and mobile

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Olayeniii/anomapledgecard.git
cd anomapledgecard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

---

## Usage

1. **Fill in your details:**
   - Name
   - X (Twitter) handle
   - Select your role
   - Choose your join date
   - Upload a profile picture

2. **Preview your Anoma ID card in real-time.**

3. **Download your ID card:**
   - PNG for digital use
   - PDF for printing

---

## Customization

- To change the card background, edit the SVG in `src/IDCard.js` to customize colors, shapes, or layout.
- Adjust field positions and mobile responsiveness in `src/App.css` under the `.field` classes and their mobile breakpoints for fine-tuning.
- Modify color variables in the `:root` section of the CSS for theming.

---

## Tools Used

- React.js
- html2canvas (for image capture)
- jsPDF (for PDF generation)
- canvas-confetti
- Custom CSS

---

## Note

This is a community project and is not officially affiliated with Anoma.
