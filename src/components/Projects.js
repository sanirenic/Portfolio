import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Cosmos',
    description: 'Cosmos is an interactive and visually captivating website that lets users explore various celestial objects and cosmic phenomena. The website offers real-time data, astronomical images, and an immersive experience for users to dive into the wonders of the universe. I designed the UI/UX to create a smooth and engaging user experience with an easy-to-navigate layout and striking visual elements.',
    tags: ['UI/UX Design'],
    imageUrl: '/images/cosmos-thumbnail.jpg', // Ensure this path is correct
    projectLink: 'https://www.figma.com/proto/qBOB0TQ2hgXGrE4sslyQC7/Pixel-Cosmos?node-id=12-2&t=S9qZuTiFhgxcHxzX-1', // Link to the Cosmos project
  },
  {
    title: 'Travel Homepage',
    description: 'The Travel Homepage is designed to inspire wanderlust while providing useful information about top travel destinations. The website features eye-catching visuals, a clean layout, and interactive elements to help users find their next vacation spot. I focused on creating a user-friendly interface with a beautiful design to guide users effortlessly through destinations, travel tips, and booking options.',
    tags: ['UI/UX Design'],
    imageUrl: '/images/travel-homepage-thumbnail.jpg', // Ensure this path is correct
    projectLink: 'https://www.figma.com/proto/0Pa4EhGZzFVf0DPN6ytgxY/Travel-home-page?node-id=1-34&starting-point-node-id=1%3A2&t=bj9qAZZg4qnm8QE3-1', // Link to the Travel Homepage project
  },
  {
    title: 'Dad Jokes Extension',
    description: 'The Dad Jokes Extension is a simple yet effective browser tool designed to bring moments of lightheartedness to your day. With just one click, users can access a curated collection of witty, family-friendly jokes, making it perfect for quick breaks and mood boosts.',
    tags: ['Chrome Extension'],
    imageUrl: '/images/travel-homepage-thumbnail.jpg', // Ensure this path is correct
    projectLink: 'https://github.com/sanirenic/DadJokes-Extension', // Link to the Travel Homepage project
  },
  {
    title: 'QuickShip',
    description: 'QuickShip is a sleek and user-friendly delivery app UI designed for seamless order management and real-time tracking. With a clean interface and intuitive navigation, it enhances the user experience, making deliveries faster and more efficient.',
    tags: ['Delivery App UI Design'],
    imageUrl: '/images/travel-homepage-thumbnail.jpg', // Ensure this path is correct
    projectLink: 'https://www.figma.com/proto/Cy11bawHZJ5d0MbzAOfrxj/QuickShip?node-id=3-2&p=f&t=fMJt1mgyyTiQ4NkT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A14', // Link to the Travel Homepage project
  },


  // Add more projects here as needed
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tags">{project.tags.join(' ')}</p>
        <p className="project-description">{project.description}</p>
        <a href={project.projectLink} className="project-button" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p className="description">Explore the innovative projects I’ve worked on!</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;



