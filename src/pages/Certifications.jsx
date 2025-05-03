/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';
import { link } from 'framer-motion/client';

const categories = [
  {
    name: "Cloud Certifications",
    certs: [
      {
        title: "Azure Fundamentals",
        issuer: "Simplilearn | SkillUp",
        hours: "5 Hours",
        link: "https://drive.google.com/file/d/1WEyRf2GhvhLTM3_PTdtiskSEd8xwhQkl/view?usp=drive_link",
        details: [
          "Gained foundational knowledge of Microsoft Azure services.",
          "Learned cloud computing concepts and Azure resource management.",
        ],
      },
      {
        title: "Getting Started with AWS",
        issuer: "Simplilearn | SkillUp",
        hours: "8 Hours",
        link: "https://drive.google.com/file/d/1YJMFJXa0KcMTviifHRsIvBMcMyAX63jr/view?usp=drive_link",
        details: [
          "Explored the basics of Amazon Web Services.",
          "Learned to set up and manage AWS resources.",
        ],
      },
      {
        title: "Cloud Security",
        issuer: "Simplilearn | SkillUp",
        hours: "7 Hours",
        link: "https://drive.google.com/file/d/1m3HqFr3rqbRIvAYyEhzYJtfUoWbeonTN/view?usp=drive_link",
        details: [
          "Understood security best practices for cloud environments.",
          "Explored strategies for securing cloud-based applications and data.",
        ],
      },
    ],
  },
  {
    name: "Cyber Security",
    certs: [
      {
        title: "Cyber Security",
        issuer: "Simplilearn | SkillUp",
        hours: "2 Hours",
        link: "https://drive.google.com/file/d/1msNgk8fMtaXSg1GCOXf50G3VqVQhImEk/view?usp=drive_link",
        details: [
          "Acquired knowledge of core cybersecurity principles.",
          "Learned to identify and mitigate common cyber threats.",
        ],
      },
      {
        title: "Cybercrime",
        issuer: "Simplilearn | SkillUp",
        hours: "2 Hours",
        link: "https://drive.google.com/file/d/1bGezZf0BGWP1dkILO2O-5LTr_ZuOGJ5a/view?usp=drive_link",
        details: [
          "Studied the nature and impact of cybercrime.",
          "Explored methods to prevent and respond to cybercrime incidents.",
        ],
      },
    ],
  },
  {
    name: "Data Science & Analytics",
    certs: [
      {
        title: "Data Analyst 101",
        issuer: "Simplilearn | SkillUp",
        hours: "2 Hours",
        link: "https://drive.google.com/file/d/1VhgbYrx21Gzk66dj9sqD7hf6uYD0HMtp/view?usp=drive_link",
        details: [
          "Learned foundational data analysis techniques.",
          "Gained skills in data visualization and interpretation.",
        ],
      },
      {
        title: "Introduction to Data Science",
        issuer: "Simplilearn | SkillUp",
        hours: "7 Hours",
        link: "https://drive.google.com/file/d/1als6CzaQA1I0lap8uE4ZlgTAav_sb_u3/view?usp=drive_link",
        details: [
          "Explored the basics of data science workflows.",
          "Understood key concepts like data wrangling and statistical analysis.",
        ],
      },
      {
        title: "Introduction to Data Visualization",
        issuer: "Simplilearn | SkillUp",
        hours: "9 Hours",
        link: "https://drive.google.com/file/d/1rV3YpakEK8fxcmoCtPktcWUTIVN5HUtd/view?usp=drive_link",
        details: [
          "Learned techniques for visualizing data effectively.",
          "Explored tools for creating insightful data visualizations.",
        ],
      },
      {
        title: "Python Libraries for Data Science",
        issuer: "Simplilearn | SkillUp",
        hours: "7 Hours",
        link: "https://drive.google.com/file/d/1bDw5s43VKKYrYKxLGAtzo4NHqUlR5E4T/view?usp=drive_link",
        details: [
          "Mastered key Python libraries like Pandas, NumPy, and Matplotlib.",
          "Applied these libraries to data science tasks.",
        ],
      },
      {
        title: "AI ML Project",
        issuer: "Simplilearn | SkillUp",
        link: "https://drive.google.com/file/d/1gBjzowbAHfCtd62Mv8-xInbbjh9l6YHn/view?usp=drive_link",
        hours: "8 Hours",
        details: [
          "Built machine learning models using scikit-learn, pandas, and NumPy.",
          "Implemented projects such as image classification, sentiment analysis, or predictive analytics using real datasets.",
          "Applied concepts like model training, evaluation, and deployment.",
        ],
      },
    ],
  },
  {
    name: "Business Intelligence",
    certs: [
      {
        title: "Business Intelligence Fundamentals",
        issuer: "Simplilearn | SkillUp",
        hours: "10 Hours",
        link: "https://drive.google.com/file/d/1cz7xwNIRFn5_f2VCRF8Dsb7QHey4bf9t/view?usp=drive_link",
        details: [
          "Mastered the basics of business intelligence tools and techniques.",
          "Learned to transform data into actionable business insights.",
        ],
      },
      {
        title: "Power BI for Beginners",
        issuer: "Simplilearn | SkillUp",
        hours: "6 Hours",
        link: "https://drive.google.com/file/d/1h38CkVtUMzp5Rumssts5DXVNzwGP9iOl/view?usp=drive_link",
        details: [
          "Learned to create interactive dashboards with Power BI.",
          "Explored data modeling and visualization in Power BI.",
        ],
      },
      {
        title: "Introduction to MS Excel",
        issuer: "Simplilearn | SkillUp",
        hours: "7 Hours",
        link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODI0NTQzNl84NTkxNjMyMTc0NTkzMjQ5NTE2My5wbmciLCJ1c2VybmFtZSI6IkpvaG4gUGF1bG8gTy4gQWJyYWphbm8ifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4277%2FIntroduction%2520to%2520MS%2520Excel%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1444648626978012245&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL%2FRNNkn1qHIxCE6yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAMKw21z8AAAA%3D",
        details: [
          "Gained proficiency in Microsoft Excel for data analysis.",
          "Learned advanced Excel functions and pivot tables.",
        ],
      },
    ],
  },
  {
    name: "Deep Learning",
    certs: [
      {
        title: "Deep Learning for Beginners",
        issuer: "Simplilearn | SkillUp",
        hours: "7 Hours",
        link: "https://drive.google.com/file/d/1VW7sVCJjvjDHXneoqaTFu4kTrT0hBjr6/view?usp=drive_link",
        details: [
          "Studied the principles of deep learning and neural networks.",
          "Applied deep learning techniques to real-world problems.",
        ],
      },
    ],
  },
  {
    name: "Development",
    certs: [
      {
        title: "Front End Development",
        issuer: "Simplilearn | SkillUp",
        hours: "12 Hours",
        link: "https://drive.google.com/file/d/1AzG2CKpGA0HQkFCDhhRbqt9GwFDPNk80/view?usp=drive_link",
        details: [
          "Learned HTML, CSS, and JavaScript for building responsive websites.",
          "Developed skills in creating user-friendly web interfaces.",
        ],
      },
      {
        title: "Getting Started with Full Stack Java Development",
        issuer: "Simplilearn | SkillUp",
        hours: "12 Hours",
        link: "https://drive.google.com/file/d/1N1XargeCmsz3uZDbbOMhlxS7RBS0mpcC/view?usp=drive_link",
        details: [
          "Explored full-stack development using Java.",
          "Learned to build end-to-end web applications.",
        ],
      },
      {
        title: "JavaScript for Beginners",
        issuer: "Simplilearn | SkillUp",
        hours: "5 Hours",
        link: "https://drive.google.com/file/d/1ogvX-6_jqvIsFbyLeWgJR3-Vm2MH5ZTy/view?usp=drive_link",
        details: [
          "Mastered the basics of JavaScript programming.",
          "Built interactive web features using JavaScript.",
        ],
      },
      {
        title: "ReactJS for Beginners",
        issuer: "Simplilearn | SkillUp",
        hours: "6 Hours",
        link: "https://drive.google.com/file/d/13RAe4QEK1VBPJ4sCQGsDQFVgXZMhsRwX/view?usp=drive_link",
        details: [
          "Learned to build web applications using ReactJS.",
          "Explored React components, state, and props.",
        ],
      },
      {
        title: "Introduction to MongoDB",
        issuer: "Simplilearn | SkillUp",
        hours: "5 Hours",
        link: "https://drive.google.com/file/d/1UKb5igmxCprqf6sKv3TS1xDfLggIxrOI/view?usp=drive_link",
        details: [
          "Gained knowledge of NoSQL databases with MongoDB.",
          "Learned to perform CRUD operations in MongoDB.",
        ],
      },
      {
        title: "Introduction to SQL",
        issuer: "Simplilearn | SkillUp",
        hours: "7 Hours",
        link: "https://drive.google.com/file/d/1_3Tx2DIOAxkroO1kyrTYad_-UFWbIjRg/view?usp=drive_link",
        details: [
          "Mastered SQL for relational database management.",
          "Learned to write queries for data retrieval and manipulation.",
        ],
      },
    ],
  },
  {
    name: "DevOps",
    certs: [
      {
        title: "Introduction to DevOps Tools",
        issuer: "Simplilearn | SkillUp",
        hours: "8 Hours",
        link: "https://drive.google.com/file/d/1A6YwIcsuTonTbAul0zK_VDTytAngq7bx/view?usp=drive_link",
        details: [
          "Explored key DevOps tools for CI/CD and automation.",
          "Learned to streamline development and operations workflows.",
        ],
      },
    ],
  },
  {
    name: "Digital Marketing",
    certs: [
      {
        title: "Introduction to Digital Marketing Fundamentals",
        issuer: "Simplilearn | SkillUp",
        hours: "5 Hours",
        link: "https://drive.google.com/file/d/1bpmxgcu2sC2B2uaweTJA7kfTrnTN5Xq2/view?usp=drive_link",
        details: [
          "Learned the basics of digital marketing strategies.",
          "Explored SEO, social media, and content marketing techniques.",
        ],
      },
    ],
  },
  {
    name: "Networking",
    certs: [
      {
        title: "Introduction to Computer Networking",
        issuer: "Simplilearn | SkillUp",
        hours: "3 Hours",
        link: "https://drive.google.com/file/d/1MIzE9BN-pptI1dkrjwOGaTaWh3sdEaUP/view?usp=drive_link",
        details: [
          "Gained foundational knowledge of computer networking concepts.",
          "Learned about network protocols, IP addressing, and routing.",
        ],
      },
    ],
  },
  {
    name: "Programming",
    certs: [
      {
        title: "Python for Beginners",
        issuer: "Simplilearn | SkillUp",
        hours: "11 Hours",
        link: "https://drive.google.com/file/d/1gRd_w-FeH5Q3PLtGVoLvOpKZvtT2iObm/view?usp=drive_link",
        details: [
          "Mastered the basics of Python programming.",
          "Learned to write Python scripts for automation and data processing.",
        ],
      },
      
      {
        title: "Advance Python ",
        issuer: "Simplilearn | SkillUp", 
        link: "https://drive.google.com/file/d/19WVfpdfWIC-DH6hmk80NVdwKnaMplHtc/view?usp=drive_link",
        hours: "10 Hours",
        details: [
          "Explored advanced Python features like decorators, generators, context managers, and exception handling.",
          "Worked with modules like os, datetime, itertools, and practiced file handling, API calls, and performance optimization.",
        ],
      },
      {
        title: "Programming Fundamentals",
        issuer: "Simplilearn | SkillUp",
        hours: "5 Hours",
        link: "https://drive.google.com/file/d/15m4DR6hLVRx7l1kukuLYCPkTc93kE4cm/view?usp=drive_link",
        details: [
          "Gained a solid understanding of core programming concepts (variables, data types, loops, conditionals).",
          "Built simple console-based applications using structured programming principles.",
        ],
      },
    ],
  },
  
  {
    name: "Project Management",
    certs: [
      {
        title: "PMP Basics",
        issuer: "Simplilearn | SkillUp",
        hours: "9 Hours",
        link: "https://drive.google.com/file/d/1kVuUsycXRbzVkJktrOoTrDRHGtT3DkhG/view?usp=sharing",
        details: [
          "Learned the fundamentals of project management with PMP principles.",
          "Explored project planning, execution, and monitoring techniques.",
        ],
      },
      {
        title: "Project Management 101",
        issuer: "Simplilearn | SkillUp",
        hours: "2 Hours",
        link: "https://drive.google.com/file/d/1nzrjS6NWBQWIn1UCdE1snd2f9y4S0hBI/view?usp=drive_link",
        details: [
          "Learned the fundamentals of project management with PMP principles.",
          "Explored project planning, execution, and monitoring techniques.",
        ],
      },
    ],
    
  },
];

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <section className="certifications-section">
      <Link to="/" className="back-button" aria-label="Back to Home"></Link>
      <h2 className="cert-title">CERTIFICATIONS</h2>
      <div className="cert-grid">
        {categories.map((category, index) => (
          <div key={index} className="cert-card" onClick={() => openModal(category)}>
            <div className="cert-card-inner">
              <span className="cert-category">{category.name}</span>
              <div className="cert-card-overlay"></div>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">{selectedCategory.name}</h3>
            <div className="cert-details">
              {selectedCategory.certs.map((cert, certIndex) => (
                <div key={certIndex} className="cert-detail-item">
                  <h4 className="cert-detail-title">{cert.title}</h4>
                  <p className="cert-issuer"><strong>Provider:</strong> {cert.issuer}</p>
                  {cert.hours && <p className="cert-hours"><strong>Hours:</strong> {cert.hours}</p>}
                  <p className="cert-link">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </p>
                  <ul className="cert-details-list">
                    {cert.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button className="modal-close-btn" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;