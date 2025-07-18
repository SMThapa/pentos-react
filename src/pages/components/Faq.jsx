import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is the flight time of your RC planes?",
    answer:
      "Our RC planes offer an average flight time of 15–25 minutes per charge, depending on the model and flying conditions. Extra batteries are available for extended play.",
  },
  {
    id: 2,
    question: "Are your RC products suitable for beginners?",
    answer:
      "Absolutely! Many of our RC planes, cars, and boats come with beginner-friendly modes, making them easy to control and perfect for first-time users.",
  },
  {
    id: 3,
    question: "Do the RC vehicles come fully assembled?",
    answer:
      "Yes! All our RC products come ready to run or fly right out of the box. Just charge the battery, follow the quick-start guide, and you’re good to go.",
  },
  {
    id: 4,
    question: "What is your return or warranty policy?",
    answer:
      "We offer a 30-day return policy and a limited warranty on all products. If you encounter a defect or issue, contact our support team for assistance.",
  },
  {
    id: 5,
    question: "Can I buy spare parts or batteries separately?",
    answer:
      "Yes, we offer a full range of replacement parts, accessories, and extra batteries for all our models. Check our shop or contact us for specific requests.",
  },
  {
    id: 6,
    question: "When will the product launch?",
    answer:
      "We are currently in the R&D and testing phase. The official launch is just a few months away! Stay tuned for weekly updates and behind-the-scenes progress.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // collapse if clicked again
    } else {
      setActiveIndex(index); // open new one
    }
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="accordion-item"
          data-aos="fade-right"
          data-aos-delay={`${(index + 1) * 50}`}
          data-aos-offset={`${100 - index * 25}`}
        >
          <button
            className="accordion-button"
            aria-expanded={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-title">{faq.question}</span>
            <img
              src="/top-right.png"
              alt="arrow"
              className={`arrow ${activeIndex === index ? "rotate-arrow " : ""}`}
            />
          </button>
          <div
            className="accordion-content"
            style={{
              maxHeight: activeIndex === index ? "200px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
