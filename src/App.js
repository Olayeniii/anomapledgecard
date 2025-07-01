import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import confetti from "canvas-confetti";
import "./App.css";
import myImage2 from './images/anomacard.PNG';
import anomaLogo from './images/anoma-logo.png';
import myimage from './images/Ifeola.png';


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
    card.classList.add("force-large");
    html2canvas(card, {
      scale: window.devicePixelRatio * 2,
      backgroundColor: null,
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "anoma_id.png";
      link.href = canvas.toDataURL();
      link.click();
      card.classList.remove("force-large");
      triggerConfetti();
    });
  };

  const downloadPDF = () => {
    const card = cardRef.current;
    card.classList.add("force-large");
    html2canvas(card, {
      scale: window.devicePixelRatio * 2,
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
      card.classList.remove("force-large");
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
              <option value="Co-Founder">Co-Founder</option>
              <option value="Moderator">Mod</option>
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
              <option value="Admin">Admin</option>
              <option value="Team">Team</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              name="joined"
              value={form.joined}
              onChange={handleChange}
            />
            <div className="file-upload">
      <label htmlFor="file-upload" className="custom-file-upload">
       📁 {form.image ? "Change Photo" : "Upload Profile Photo"}
      </label>
     <input 
       id="file-upload"
       type="file"
        name="image"
      accept="image/*"
      onChange={handleChange}
   />
    </div>

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
      
      <footer className="footer">
        <div className="footer-content">
          <img src={myimage} alt="Anoma Logo" className="footer-logo" />
          <div className="footer-links">
            <a href="https://thelordhegambit.wal.app" className="footer-link" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://github.com/Olayeniii" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://medium.com/@ifeolayeni" className="footer-link" target="_blank" rel="noopener noreferrer" >Medium</a>

          </div>
          <div className="footer-social">
            <a href="https://x.com/lordhegambit" target="_blank" rel="noopener noreferrer">
              <svg 
  width="24" 
  height="24" 
  viewBox="0 0 1200 1227" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  style={{ verticalAlign: 'middle' }}
>
  <path 
    fill="currentColor" 
    d="M715.6 524.6 1174 0H1066.1L667.6 458.8 354.3 0H0L479.8 696.5 0 1226.9H107.9L531.8 739.6 864.3 1226.9H1218.6L715.6 524.6ZM582.5 678.5 539.3 617.1 169.1 80.5H304.8L615.4 537.7 658.6 599.1 1061.4 1146.4H925.7L582.5 678.5Z" 
  />
</svg>
            </a>
            <a href="https://discord.com/users/832242043480440842" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.076.076 0 01-.007-.127c.125-.094.25-.187.36-.282.023-.02.051-.015.075.006.044.032.088.064.132.094a.076.076 0 00.078.01 16.2 16.2 0 004.79-2.381 16.17 16.17 0 004.789 2.381.077.077 0 00.079-.01c.044-.03.088-.062.132-.094.024-.021.052-.026.075-.006.11.095.234.188.36.282a.076.076 0 01-.006.127 12.81 12.81 0 01-1.872.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 005.994-3.03.077.077 0 00.031-.057c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://github.com/Olayeniii" target="_blank" rel="noopener noreferrer">
              <svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="currentColor" 
  xmlns="http://www.w3.org/2000/svg"
  style={{ verticalAlign: 'middle' }}
>
  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
</svg>
            </a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Ifeolayeni. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}