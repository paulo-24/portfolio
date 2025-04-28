/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience" data-aos="fade-up">
      <div className="button-wrapper">
        <Link to="/" className="top-back-button">
          <span>← Home</span>
        </Link>
      </div>
      <section className="experience-container">
        <div className="experience-header-top">
          <h1 className="experience-title">E x p e r i e n ce</h1>
        </div>
        <div className="experience-list">
          <div className="experience-item" data-aos="fade-up" data-aos-delay="100">
            <div className="experience-header">
              <h2 className="experience-role">Software Engineering Subject</h2>
              <p className="experience-duration">January 2024 - May 2024</p>
            </div>
            <div className="experience-description">
              <p>
                When I was nearing my third year in college, I could not help but feel <em>excited</em>. It felt like I was finally moving forward, surviving every challenge thrown my way. Knowing that I only had one more year before reaching fourth year made me even more motivated. It felt like I was so close to the finish line.
              </p>
              <p>
                As the first semester of third year started, everything still felt manageable. My world mostly revolved around quizzes, assignments, and exams. On top of that, we were assigned a website project, but I was not alone. I had two groupmates who shared the load with me, and even if I was not the best, I was proud that I was able to contribute.
              </p>
              <hr />
              <p>
                Then came the second semester, and that was when things got tougher. We had Software Engineering (SE), a subject where we needed to find a real client and develop a full system for them. I remember feeling a wave of anxiety when it was time to form groups. Deep down, I knew that none of us were experts. We barely knew enough programming to be confident.
              </p>
              <p>
                At that point, the only thing I really knew was basic backend development. I could create simple features like user login systems connected to a database. Still, we organized ourselves. One of us volunteered to handle the frontend, another took care of the documentation, and I focused on the backend.
              </p>
              <p>
                From the very first day, we hit the ground running. We searched for a client, got our project title approved, and immediately started building. Our frontend developer worked module by module, sending me each update so that I could work on the backend side right away. Meanwhile, our documenter was not just handling reports. He also helped us design the system, offering ideas about how the website could be more user-friendly and visually appealing.
              </p>
              <p>
                This became our routine: long nights of brainstorming, coding, and fixing errors. Sometimes we even stayed overnight just to communicate better and align our progress. It was exhausting. I had never built a full system before, and the weight of being responsible for the backend was overwhelming. There were nights when I doubted myself, wondering if I was really capable of pulling this off.
              </p>
              <p>
                Little by little, we made progress. Our system slowly started to take shape. It was not perfect, but it was something we built from scratch with everything we had.
              </p>
              <hr />
              <p className="highlight-quote">
                Midterms came, and with it, the challenge of defending 80 percent of our system. I was nervous, but when the day came, we stood proudly before the panel.
              </p>
              <p>
                To our relief, we passed. They only requested a few additional features, which we were confident we could finish. It was not easy and our progress was slow, but we knew we could complete it.
              </p>
              <p>
                Of course, the journey was not without its ups and downs. Things became even harder because both I and our documenter were going through serious family problems. These struggles slowed down our progress even more and made it difficult to continue. But somehow, we managed to keep moving forward, even if it meant starting over several times.
              </p>
              <p>
                Eventually, it came to a point where only the documenter and I were working on the system. Our frontend developer had already completed his tasks and had other responsibilities to focus on. In reality, we were actually four in the group, but one member contributed nothing. He would only show up during defenses. Even if we did not inform him, he was always present during the defense presentations, which felt unfair but there was little we could do.
              </p>
              <p>
                When we finally completed the system, I knew it was not perfect. Given everything we went through, it was hard to stay fully focused, especially with the final defense approaching. Still, I held onto hope. I kept telling myself that as long as we could present our system well and prove that we met our client's requirements, we would pass.
              </p>
              <p>
                The day of our final defense arrived, and I was extremely nervous. Once we started presenting, everything went smoothly. We were able to explain everything clearly. In the end, we passed, with just one minor function that needed to be added based on their suggestions.
              </p>
              <p>
                We were overjoyed. It was not just our group. All of our friends from different groups also passed. That moment made the end of third year feel even more special. After completing the revisions assigned to me, I finally felt relieved.
              </p>
              <p className="highlight-quote">
                Finishing third year was not just about passing a subject. It was about pushing through every struggle and proving to myself that no matter how hard things get, perseverance will always lead you to the finish line.
              </p>
              <p>
                I thought that after third year, the hard part was over. Little did I know that fourth year would be even tougher, with projects far more complex than Software Engineering. Haha.
              </p>
            </div>
          </div>
        </div>
        <div className="back-button-container" data-aos="fade-up" data-aos-delay="300">
          <Link to="/" className="back-button">
            <span>Back</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experience;