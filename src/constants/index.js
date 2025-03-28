// import project1 from "../assets/pictures/project-1.jpg";
// import project2 from "../assets/pictures/project-2.png";
// import project3 from "../assets/pictures/project-3.png";
// import project4 from "../assets/pictures/project-4.png";

export const HERO_CONTENT =  { 

  p1: `I'm a Software Engineer who thrives on solving complex problems and creating systems that have a real-world impact. 
  My journey in tech started with a curiosity to understand how things work behind the scenes, and that curiosity turned into a passion for building efficient, scalable, and reliable solutions. 
  I love the challenge of breaking down large, abstract problems and transforming them into something tangible, useful, and efficient.`,
  
  p2: `Over the years, I’ve had the opportunity to work on a variety of projects — from backend-heavy systems to full-stack solutions, each one offering a unique set of challenges. 
  What excites me most is the ability to collaborate with others and see an idea evolve into a fully-fledged product that drives real business value. 
  Whether I'm architecting a new system or optimizing an existing one, I always look for ways to push the boundaries of what’s possible, ensuring that every solution is not just functional, but truly impactful.`
  }

export const RESUMELINK = {
  resume : "https://drive.google.com/uc?export=download&id=1cs1cZdcYGvZU9Rc51KJFZ_RtLLamx6vS"
};

export const EXPERIENCES = [
  {
    year: "Mar/2024 - Present",
    role: "Software Engineer",
    company: "Wavesoft Solutions Inc.",
    description: `Designed and developed a high-performance microservice using Spring Boot and Kafka to handle priority-based events, reducing system failures by 40% through retry mechanisms and Dead Letter Queues. I optimized processing efficiency by implementing multithreading with Java concurrency APIs. For seamless database interactions and notification tracking, I integrated Spring JPA/Hibernate, achieving 99.9% delivery. Additionally, I managed CI/CD pipelines with Jenkins, GitHub, Docker, and Kubernetes on AWS, reducing deployment time by 70%. To enhance system monitoring, I integrated Grafana and Prometheus, enabling real-time health tracking and metrics analysis for improved observability and performance optimization.`,
    technologies: ["React.js", "Tailwind", "JavaScript", "Java", "Spring Boot", "MongoDB", "AWS", "AWS Lambda", "S3", "WireMock", "MySQL", "RESTful APIs"]
  },
  {
    year: "May/2021 - Dec/2021",
    role: "Senior Consultant",
    company: "Ernst & Young LLP",
    description: `As a Senior Consultant at Ernst & Young LLP (Microsoft), I developed a React-based dashboard using Redux, React Router, and Axios, optimizing performance for 10,000+ internal users with lazy loading and caching. I secured REST APIs using Spring Security, implementing authentication, authorization, and protection against SQL Injection and CSRF attacks. I built business logic to track shipment transit times across multiple time zones. System reliability was improved using Resilience4j, with real-time monitoring via Actuator and Micrometer. I integrated Redis for caching and optimized performance using the Executor framework, achieving 90% test coverage through rigorous TDD with JUnit, Mockito, and WireMock.`,
    technologies: ["React.js", "Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Avro", "Schema Registry", "Java Date and Time API", "Batch Processing", "Parallel Streaming"]
  },
  {
    year: "Sep/2020 - May/2021",
    role: "Senior Developer",
    company: "JK Technosoft Ltd",
    description: `I developed a proprietary algorithm to resolve data inconsistency issues, eliminating 99% of data integrity errors and enhancing reliability for critical financial transactions. I designed a data processing pipeline for efficient batch processing, transformation, and storage of records while optimizing JPA/Hibernate interactions, significantly improving MySQL database performance. Additionally, I created mock web services using REST architecture and Java Spring Boot to reduce dependency on vendor APIs for testing, leading to a 5% reduction in bugs. These enhancements ensured data accuracy, streamlined processing, and improved system stability for high-transaction financial applications.`,
    technologies: ["React.js", "Java", "Spring Boot", "Azure SQLDB", "Spring Batch", "Java Beans", "Data Visualization", "Pagination", "Filtering", "Sorting"]

  },
  {
    year: "June/2014 - Dec/2019",
    role: "Software Developer",
    company: "Victory Packaging",
    description: `As a Software Developer at Victory Packaging, I collaborated with developers to enhance system improvements, business logic, reports, schema design, and batch processing, ensuring seamless project execution throughout the Software Development Life Cycle. I refactored legacy code and optimized SQL queries using indexing and stored procedures, improving response time by 40%. Additionally, I reduced post-release defects by 40% through comprehensive debugging, rigorous testing, and thorough documentation. These efforts enhanced system performance, reliability, and maintainability, contributing to the overall efficiency of the application and business processes.`,
    technologies: ["REST APIs", "Java","SQL", "MSSQL RDS", "Database Sharding", "Automated Data Processing", "Batch Insertion", "Performance Monitoring", "SQL Query Optimization"]},
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "https://github.com/iaschowrai/Ecommerce-Project",
    // image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Spring MVC", "Microservice", "Oauth2", "Spring Security","RestCLient", "Kafka", "MySQL", "MongoDB", "Flyways", 'Docker', "Git"],
  },
  {
    title: "File Server REST API",
    link: "https://github.com/iaschowrai/FileServerWithCaching",
    // image: project2,
    description:
      "The File Server REST API is a Java-based Spring Boot application that provides endpoints for uploading, downloading, and deleting files. It serves as a simple file storage and retrieval system with caching capabilities for improved performance.",
    technologies: ["Java","Spring Boot","Spring MVC", "Spring Data JPA", "Postman"],
  },
  {
    title: "Hotel Booking Management System",
    link: "https://github.com/iaschowrai/HotelBooking",
    // image: project3,
    description:
              "This is a hotel management booking system built using Spring Boot, Spring Security, JWT Authentication, and MySQL. The system allows users to manage hotel bookings, view available rooms, and make reservations, while providing secure authentication and authorization mechanisms.",
    technologies: ["Spring Boot" , "Spring Security", "JWT (JSON Web Tokens)", "MySQL", "JPA/Hibernate", "JWT Authentication"],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/iaschowrai/iaschowrai",
    // image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite", "Bootstrap", "Tailwind", "Javascript"],
  },
  
];


export const CONTACT = {
  name: "Irshad Ahmed Schowrai",
  address: "44 Maywood Street, Apt -2, Worcester, Massachusetts, United States 01603. ",
  phoneNo: "+1 774 696 9620",
  email: "irshad_ahmeds@yahoo.com",
  linkedIn : "https://www.linkedin.com/in/iaschowrai/",
  github: "https://github.com/iaschowrai/"
};
