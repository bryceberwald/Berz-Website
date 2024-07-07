import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = () => {
  return (
    <div className="home-container">

        <Navigation />
        <Header />
        <br></br>
        
        <div className='top-home-container'>
            <h1>Home Page</h1>
        </div>

      <div className='main-content'>
        <section>
          <h2>About Me</h2>
          <p>
Hello! I'm Bryce Berwald but have the nickname of Berz, I am a passionate and dedicated programmer with a love for technology and innovation. My journey into the world of programming began at a young age, fueled by a supportive family environment and an insatiable curiosity about how things work.

#### Early Years
I grew up in a wonderful family where I enjoyed sports, hanging out with friends, and exploring the vast world of technology. My brother and I spent countless hours playing a computer game that captivated our imaginations. This game sparked a dream within me at the age of 11: to become one of the staff members who created and maintained it. Although I was quite young, my ambition drove me to dive into extensive research on game development and programming.

#### Education and Self-Teaching
In high school, I took several programming classes that provided a foundational understanding of coding. However, it was during my college years and through self-teaching that my true passion for programming flourished. I immersed myself in learning various programming languages, tools, and technologies, driven by the same curiosity that had inspired me as a child.

#### Professional Journey
Today, I am a skilled programmer with a robust understanding of software development. My journey from a curious child to a proficient developer has been marked by continuous learning and perseverance. I have honed my skills through college coursework, self-study, and hands-on projects, always striving to push the boundaries of my knowledge.

In my current role, I leverage my programming expertise to solve complex problems, develop innovative solutions, and contribute to impactful projects. My passion for technology and programming remains as strong as ever, driving me to stay updated with the latest advancements in the field. I take pride in my ability to collaborate effectively with teams, bringing creativity and technical prowess to every endeavor.

#### Looking Forward
Looking ahead, I envision a future where I continue to grow as a professional in the tech industry. I am eager to take on new challenges, explore emerging technologies, and contribute to groundbreaking projects that make a difference. My goal is to lead and inspire others, sharing my knowledge and experience to foster a culture of innovation and excellence.

I aspire to work on projects that blend my love for gaming and technology, perhaps even revisiting my childhood dream of developing engaging and immersive games. With a strong foundation, a passion for learning, and a commitment to excellence, I am excited about the endless possibilities that lie ahead in my professional journey.

Thank you for taking the time to learn more about me. Let's connect and explore how we can innovate and create together!.</p>
        </section>

        <section>
          <h2>Tech Related Expertise</h2>
          <p>To be completed...</p>
        </section>

        <section>
        <h2>Tech Support Request Form</h2>
        <p>To be completed...</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
