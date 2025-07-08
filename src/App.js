import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import confetti from "canvas-confetti";
import "./App.css";
import anomaLogo from './images/anoma-logo.png';
import myimage from './images/Ifeola.png';
import IDCard from './IDCard';
import hatImage from './images/hat_.png';

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
    const card = cardRef.current;
    document.body.classList.add("force-clean", "force-download-size");

    html2canvas(card, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "anoma_id.png";
      link.href = canvas.toDataURL();
      link.click();

      document.body.classList.remove("force-clean", "force-download-size");
      triggerConfetti();
    });
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <img src={anomaLogo} alt="Anoma Logo" className="logo" />
          <h1>Anoma Mage ID</h1>
        </div>

        <div className="layout">
          <form className="form">
            <input type="text" name="name" placeholder="Name" maxLength={20} onChange={handleChange} />
            <input type="text" name="xHandle" placeholder="X Handle" maxLength={15} onChange={handleChange} />
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="Wizard">Wizard</option>
              <option value="GrandMaster">GrandMaster</option>
              <option value="IntentMaster">IntentMaster</option>
              <option value="Master">Master</option>
              <option value="Acolyte">Acolyte</option>
              <option value="Seeker">Seeker</option>
              <option value="Apprentice">Apprentice</option>
            </select>
            <label className="input-label" htmlFor="date-joined">Date joined</label>
            <input id="date-joined" type="date" name="joined" value={form.joined} onChange={handleChange} />
            <div className="file-upload">
              <label htmlFor="file-upload" className="custom-file-upload">
                📁 {form.image ? "Change Photo" : "Upload PFP"}
              </label>
              <input id="file-upload" type="file" name="image" accept="image/*" onChange={handleChange} />
            </div>

            <div className="button-group">
              <button type="button" onClick={downloadCard}>Download PNG</button>
            </div>
          </form>

          <div className="card-wrapper" ref={cardRef}>
            <IDCard />
            {form.image && <img src={form.image} alt="Profile" className="profile-pic" />}
            <img src={hatImage} alt="Hat" className="hat-graphic" />
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

      <footer className="footer">
        <div className="footer-content">
          <img src={myimage} alt="Anoma Logo" className="footer-logo" />
          <div className="footer-links">
            <a href="https://thelordhegambit.wal.app" className="footer-link" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://github.com/Olayeniii" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://medium.com/@ifeolayeni" className="footer-link" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
          <div className="footer-social">
            {/* Icons already present */}
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Ifeolayeni. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
