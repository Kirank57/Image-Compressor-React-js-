// Faqs.jsx
import React, { useState } from "react";
import "./Faqs.css";

const faqList = [
  {
    q: "What file types can I compress?",
    a: "Any common raster image: JPG, PNG, WebP, GIF, and BMP all work. If your browser can display it, the compressor can handle it.",
  },
  {
    q: "Does the image ever leave my computer?",
    a: "Nope. Compression is done entirely in your browser with the Canvas API, so nothing is uploaded or stored on our servers.",
  },
  {
    q: "Will compressing lower my image quality?",
    a: "A little—compression always trades off quality for smaller size. Use the Quality slider to find the balance you like before downloading.",
  },
  {
    q: "How do width and height inputs work?",
    a: "Enter either dimension (or both). If “Maintain aspect ratio” is on, the other dimension auto-adjusts to keep proportions intact.",
  },
  {
    q: "Why can’t I upload images larger than X MB?",
    a: "Browsers have memory limits. Extremely large files can crash the tab, so we cap uploads at 50 MB for safety.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "Current version is single-image only. Batch mode is on our roadmap—stay tuned!",
  },
  {
    q: "Is this tool free?",
    a: "Yes. It’s 100 % free to use with no watermarks or sign-ups.",
  },
  {
    q: "Who do I contact for bug reports or feature requests?",
    a: "Shoot us an email at imagecompressor123@gmail.com or open an issue on our GitHub repo.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faqs container">
      <h2 className="title">FAQs</h2>
      {faqList.map(({ q, a }, idx) => (
        <div
          key={idx}
          className={`faq-item ${openIndex === idx ? "open" : ""}`}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        >
          <div className="question">
            {q}
            <span className="chevron">{openIndex === idx ? "▴" : "▾"}</span>
          </div>
          <div className="answer">{a}</div>
        </div>
      ))}
    </section>
  );
}
