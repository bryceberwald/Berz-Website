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
          <h2>General Overview</h2>
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
          <h2>Our Modern Technology Expertise</h2>
          <p>Company Overview<br></br>
              Our startup company is dedicated to providing tech-related support and services to smaller businesses and startups, with a focus on tailored solutions that improve business attributes for ultimate success. We understand the importance of integrating technology properly to enhance efficiency and productivity, and our mission is to help businesses leverage modern technology to achieve their goals.

              Tech-related Services Offered:
              <br></br>
              <br></br>
              1. Web Development
              <br></br>We specialize in building custom websites that are designed to meet the specific needs of each business. Whether it's a simple informational site or a complex e-commerce platform, we have the expertise to create a professional and user-friendly website.

              <br></br><br></br>
              2. Mobile App Development
              <br></br>Our team can develop mobile applications for both iOS and Android platforms, tailored to your business requirements. From utility apps to gaming applications, we have the skills to bring your ideas to life.

              <br></br><br></br>
              3. Software Development
              <br></br>We also offer desktop software development services, including building custom applications and scripts to automate processes and improve efficiency.

              <br></br><br></br>
              4. Algorithmic Solutions
              <br></br>Our team can create specific algorithmic solutions tailored to address unique business needs, helping businesses optimize their workflows and increase productivity.

              <br></br>
              <br></br>
              5. Technology Repair
              <br></br>In addition to development services, we provide technology repair services for computers, phones, and tablets. Whether it's updating drivers, replacing hardware, or troubleshooting issues, we can help keep your technology running smoothly.

              <br></br>
              <br></br>
              6. Point of Sale Integration
              <br></br>We specialize in integrating point-of-sale systems both in-person and online, with a focus on small business owners' financial needs. Our goal is to streamline the sales process and improve overall operational efficiency.
              </p>
        </section>
        <section>
        <h2>Our Mission</h2>
        <p>Our mission is to not only provide informative insights on tech integration but to also implement solutions that drive business success. We are committed to delivering cost-effective tech solutions that are tailored to each business model, ensuring that our clients can leverage technology to its fullest potential. By partnering with us, businesses can expect to see improvements in efficiency, productivity, and overall success through the seamless integration of technology into their operations.</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
