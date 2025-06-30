import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import confetti from "canvas-confetti";
import "./App.css";
import myImage2 from './images/anomacard.PNG';
import anomaLogo from './images/anoma-logo.png'; // Add your logo file

export default function App() {
  const [form, setForm] = useState({
    name: "",
    xHandle: "",
    role: "",
    duty: "",
    joined: "",
    image: null,
  });

  const cardRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: URL.createObjectURL(files[0]) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#b22222', '#6b0e57', '#DAA520', '#8B4513']
    });
  };

  const downloadCard = () => {
    html2canvas(cardRef.current, {
      scale: 5,
      backgroundColor: null,
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "anoma_id.png";
      link.href = canvas.toDataURL();
      link.click();
      triggerConfetti();
    });
  };

  const downloadPDF = () => {
    html2canvas(cardRef.current, {
      scale: 5,
      backgroundColor: null,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("anoma_id.pdf");
      triggerConfetti();
    });
  };

  return (
    <div className="container">
      <div className="header">
        <img src={anomaLogo} alt="Anoma Logo" className="logo" />
        <h1>Anoma Mage ID</h1>
      </div>
      
      <div className="layout">
        <form className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            maxLength={20}
            onChange={handleChange}
          />
          <input
            type="text"
            name="xHandle"
            placeholder="X Handle"
            maxLength={15}
            onChange={handleChange}
          />
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Heliax">Heliax</option>
            <option value="GrandMaster">GrandMaster</option>
            <option value="IntentMaster">IntentMaster</option>
            <option value="Master">Master</option>
            <option value="Acolyte">Acolyte</option>
            <option value="Seeker">Seeker</option>
            <option value="Apprentice">Apprentice</option>
          </select>
          <select name="duty" value={form.duty} onChange={handleChange}>
            <option value="">Select Duty</option>
            <option value="Creator">Creator</option>
            <option value="Raider">Raider</option>
            <option value="Developer">Dev</option>
            <option value="Moderator">Mod</option>
            <option value="Team">Team</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="joined"
            value={form.joined}
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <div className="button-group">
            <button type="button" onClick={downloadCard}>
              Download PNG
            </button>
            <button type="button" onClick={downloadPDF}>
              Download PDF
            </button>
          </div>
        </form>

        <div className="card-wrapper" ref={cardRef}>
          <img src={myImage2} alt="Card Background" className="card-bg" />
          {form.image && (
            <img src={form.image} alt="Profile" className="profile-pic" />
          )}
          <div className="field name">{form.name}</div>
          <div className="field xHandle">{form.xHandle}</div>
          <div className="field role">{form.role}</div>
          <div className="field duty">{form.duty}</div>
          <div className="field joined">
            {form.joined && new Date(form.joined).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric"
            })}
          </div>
        </div>
      </div>
    </div>
  );
}