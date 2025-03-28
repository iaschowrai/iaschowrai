import React, { useState, useMemo } from 'react'
import './Portfolio.css'

// Import images
import project1 from '../../assets/images/project-1.jpg';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.jpg';
import project4 from '../../assets/images/project-4.png';
import project5 from '../../assets/images/project-5.png';
import project6 from '../../assets/images/project-6.png';
import project7 from '../../assets/images/project-7.png';
import project8 from '../../assets/images/project-8.jpg';
import project9 from '../../assets/images/project-9.png';

// Project data
const projectsData = [
  { id: 1, title: 'Finance', category: 'web development', imgSrc: project1 },
  { id: 2, title: 'Orizon', category: 'web development', imgSrc: project2 },
  { id: 3, title: 'Fundo', category: 'web design', imgSrc: project3 },
  { id: 4, title: 'Brawlhalla', category: 'applications', imgSrc: project4 },
  { id: 5, title: 'DSM.', category: 'web design', imgSrc: project5 },
  { id: 6, title: 'MetaSpark', category: 'web design', imgSrc: project6 },
  { id: 7, title: 'Summary', category: 'web development', imgSrc: project7 },
  { id: 8, title: 'Task Manager', category: 'applications', imgSrc: project8 },
  { id: 9, title: 'Arrival', category: 'web development', imgSrc: project9 },
];
const Portfolio = () => {

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all'
      ? projectsData
      : projectsData.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {['all', 'web design', 'applications', 'web development'].map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li className="project-item" key={project.id}>
              <a href="#">
                <img src={project.imgSrc} alt={project.title} loading="lazy" />
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>

  )
}

export default Portfolio