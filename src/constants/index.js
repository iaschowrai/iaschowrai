// import project1 from "../assets/pictures/project-1.jpg";
// import project2 from "../assets/pictures/project-2.png";
// import project3 from "../assets/pictures/project-3.png";
// import project4 from "../assets/pictures/project-4.png";

export const HERO_CONTENT =  { 

  p1: `I'm a Software Engineer who thrives on solving complex problems and creating systems that have a real-world impact. 
  My journey in tech started with a curiosity to understand how things work behind the scenes, and that curiosity turned into a passion for building efficient, scalable, and reliable solutions. 
  I love the challenge of breaking down large, abstract problems and transforming them into something tangible, useful, and efficient.`,
  
  p2: `Over the years, I’ve had the opportunity to work on a variety of projects from backend-heavy systems to full-stack solutions, each one offering a unique set of challenges. 
  What excites me most is the ability to collaborate with others and see an idea evolve into a fully-fledged product that drives real business value. 
  Whether I'm architecting a new system or optimizing an existing one, I always look for ways to push the boundaries of what’s possible, ensuring that every solution is not just functional, but truly impactful.`
  }

export const RESUMELINK = {
  resume : "https://drive.google.com/file/d/1E_cqlvDiCtr0ezKjUMvv1yMO0ImpNTRp/view?usp=sharing"
};

export const EXPERIENCES = [
  {
    year: "Mar/2024 - Present",
    role: "Software Engineer",
    company: "Wavesoft Solutions Inc.",
    // description: `Led the design and development of Marketplace Seller Center Pricing microservices using Java 17, Spring Boot, and SOLID principles to build scalable, fault-tolerant distributed systems. Optimized GraphQL APIs integrated with Elasticsearch and MySQL (JPA/Hibernate), reducing query execution time by 60% and achieving P99 latency of ~40ms under 3,000+ RPM. Revamped APIs using Spring WebFlux with reactive retry, cutting downstream failures by 60% and improving system resilience. Automated CI/CD pipelines using GitHub Actions, Jenkins, Docker, and Azure Kubernetes Service for seamless deployments. Implemented observability with Prometheus, Grafana, and Spring Boot Actuator for real-time monitoring, and achieved 100% test coverage with JUnit, Mockito, and Cucumber to ensure code reliability and maintainability.`,
    description: [
      "Designed and developed high-availability Marketplace Pricing & Incentive microservices using Java 17 and Spring Boot, supporting ~300K daily active users.",
      "Built and optimized GraphQL and REST APIs aggregating data from Elasticsearch and downstream services, achieving ~40ms P99 latency under high load.",
      "Improved reliability by implementing WebClient timeouts, controlled retries, and reactive processing, reducing worst-case latency from seconds to milliseconds.",
      "Deployed containerized services using Docker and Kubernetes with CI/CD pipelines, ensuring seamless releases.",
      "Implemented observability with Prometheus, Grafana, and Spring Boot Actuator for monitoring and proactive incident response.",
      "Participated in code reviews, mentored junior engineers, and maintained high test coverage using JUnit, Mockito, and Cucumber."
    ],
    // technologies: ["Java", "Spring Boot", "RESTful APIs", "GraphQL API", "Elastic Search", "Kafka", "MySQL", "Azure/GCP", "Junit", "Mockito", "Cucumber", "Prometheus", "Grafana", "Kubernetes" ]
  },
  {
    year: "May/2021 - Dec/2021",
    role: "Senior Consultant",
    company: "Ernst & Young LLP",
    // description: `As a Senior Consultant at Ernst & Young LLP, I led the end-to-end design and delivery of a full-stack shipment tracking platform using Java 17, Spring Boot, and ReactJS on a distributed microservices architecture, empowering logistics teams with real-time visibility and data-driven decision-making. Partnered with product owners to translate business requirements into scalable technical solutions, enhancing the React-based dashboard with Redux and hooks for responsive, timezone-aware analytics. Designed and secured REST APIs with Spring Security and JWT authentication, improving data integrity and cross-service communication. Modernized the backend by adopting reactive WebClient, reducing API latency by 40%, and integrated Redis caching to boost response speed by 80%. Optimized PostgreSQL operations using JPA/Hibernate for faster data access and reporting. Drove CI/CD automation through Azure DevOps and Jenkins for containerized deployments on Kubernetes, ensuring faster release cycles and zero downtime. Established observability with Prometheus and Grafana for proactive monitoring and system reliability. Championed engineering excellence through code reviews, mentoring, and achieving 98% automated test coverage with JUnit, Mockito, and Jest, ensuring maintainable, business-aligned software delivery.`,
    description: [
      "Led the design and delivery of a distributed shipment tracking platform using Spring Boot and React, serving ~250K daily active users.",
      "Migrated REST APIs to GraphQL and introduced Redis caching, reducing latency by up to 80%.",
      "Implemented event-driven architecture using Kafka with Transactional Outbox and Saga patterns to ensure data consistency across services.",
      "Optimized PostgreSQL operations using JPA/Hibernate for faster data access and reporting.",
      "Automated CI/CD pipelines for containerized deployments on Kubernetes and improved system reliability through monitoring with Prometheus and Grafana.",
      "Mentored team members, conducted code reviews, and ensured 98% automated test coverage with JUnit, Mockito, and Jest."
    ],
    // technologies: ["React.js", "Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Avro", "Schema Registry","Time Intelligence", "StreamAPI"]
  },
  {
    year: "Sep/2020 - May/2021",
    role: "Senior Developer",
    company: "JK Technosoft Ltd",
    // description: `led the design and development of a robust data processing and reporting platform integrating AWS S3, AWS Lambda, and MySQL to automate large-scale data ingestion, transformation, and storage. I engineered Spring Batch jobs to process S3-hosted CSV data and generate PDF reports with optimized Hibernate interactions, improving database performance and data accuracy. To enhance reliability and reduce integration dependencies, I built secure RESTful APIs with Spring Boot and implemented mock services and automated API testing using REST Assured, cutting integration issues across distributed environments. I deployed containerized microservices with Eureka Server on AWS EKS using Jenkins CI/CD, GitHub, Maven, and AWS ECS, achieving a scalable, fault-tolerant, and production-ready architecture supporting critical business data operations.`,
    description: [
      "Developed a Spring Boot–based batch processing system to ingest large CSV files, store in AWS S3, and process over 1M records/day using Spring Batch.",
      "Engineered reliable batch jobs with Hibernate and MySQL, reducing manual reprocessing and job failures.",
      "Built secure REST APIs with Spring Boot and implemented automated API testing with REST Assured.",
      "Deployed containerized microservices using Docker, AWS EKS, Jenkins CI/CD, and GitHub.",
      "Designed scalable, fault-tolerant architecture to support critical business data operations."
    ],
    // technologies: ["React.js", "Java", "Spring Boot", "AWS", "Spring Batch", "Java Beans", "Data Visualization", "Pagination", "Filtering", "Sorting"]

  },
  {
    year: "June/2014 - Dec/2019",
    role: "Software Developer",
    company: "Victory Packaging",
    // description: `Collaborated with developers to enhance system improvements, business logic, reports, schema design, and batch processing, ensuring seamless project execution throughout the Software Development Life Cycle. I refactored legacy code and optimized SQL queries using indexing and stored procedures, improving response time by 40%. Additionally, I reduced post-release defects by 40% through comprehensive debugging, rigorous testing, and thorough documentation. These efforts enhanced system performance, reliability, and maintainability, contributing to the overall efficiency of the application and business processes.`,
    description: [
      "Developed and maintained backend services using Java and SQL to support core business operations.",
      "Optimized database queries and stored procedures, improving performance by up to 60%.",
      "Refactored legacy code, reducing post-release defects by 40% and improving system reliability.",
      "Implemented batch processing and automated data workflows, enhancing operational efficiency.",
      "Collaborated with teams to ensure high-quality code and maintainable software solutions."
    ],
    // technologies: ["REST APIs", "Java","SQL", "MSSQL RDS", "Database Sharding", "Automated Data Processing", "Batch Processing", "Performance Monitoring", "SQL Query Optimization"]},
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "https://github.com/iaschowrai/Ecommerce-Project",
    // image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    // technologies: ["Java", "Spring Boot", "Spring Cloud", "Spring MVC", "Microservice", "Oauth2", "Spring Security","RestCLient", "Kafka", "MySQL", "MongoDB", "Flyways", 'Docker', "Git"],
  },
  {
    title: "File Server REST API",
    link: "https://github.com/iaschowrai/FileServerWithCaching",
    // image: project2,
    description:
      "The File Server REST API is a Java-based Spring Boot application that provides endpoints for uploading, downloading, and deleting files. It serves as a simple file storage and retrieval system with caching capabilities for improved performance.",
    // technologies: ["Java","Spring Boot","Spring MVC", "Spring Data JPA", "Postman"],
  },
  {
    title: "Hotel Booking Management System",
    link: "https://github.com/iaschowrai/HotelBooking",
    // image: project3,
    description:
              "This is a hotel management booking system built using Spring Boot, Spring Security, JWT Authentication, and MySQL. The system allows users to manage hotel bookings, view available rooms, and make reservations, while providing secure authentication and authorization mechanisms.",
    // technologies: ["Spring Boot" , "Spring Security", "JWT (JSON Web Tokens)", "MySQL", "JPA/Hibernate", "JWT Authentication"],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/iaschowrai/iaschowrai",
    // image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    // technologies: ["HTML", "CSS", "React", "Vite", "Bootstrap", "Tailwind", "Javascript"],
  },
  
];

export const TECHNOLOGIES = [
  "Java 8 & 17",
  "Spring Boot",
  "Spring MVC",
  "Spring WebFlux",
  "Spring Security",
  "Spring Cloud",
  "Spring Batch",
  "Microservices Architecture",
  "RESTful APIs",
  "GraphQL",
  "Kafka",
  "Event-Driven Architecture",
  "JPA/Hibernate",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Cassandra",
  "Redis",
  "Elasticsearch",
  "AWS (S3, EC2, Lambda, EKS)",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitHub Actions",
  "Terraform",
  "CloudFormation",
  "CI/CD Pipelines",
  "Observability & Monitoring (Prometheus, Grafana, Splunk, ELK Stack)",
  "Unit & Integration Testing (JUnit, Mockito, Cucumber, Jest)",
  "React.js",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Python",
  "JWT Authentication",
  "OAuth2",
  "Security Best Practices",
  "Data Modeling & Optimization",
  "SQL Query Tuning",
  "Asynchronous Processing",
  "Batch Processing",
  "API Gateway Design",
  "Containerization",
  "Production Support & Incident Management",
  "Performance Tuning",
  "Automation & DevOps Principles",
  "Agile Methodologies",
  "Code Review & Mentoring",
  "Version Control (Git)",
  "Software Design Patterns (SOLID, Transactional Outbox, Saga)",
  "CI/CD Automation",
  "Cloud-Native Architecture",
  "Full-Stack Development"
];



export const CONTACT = {
  name: "Irshad Ahmed Schowrai",
  address: "1221 E Apache Blvd, Apt 2057, Tempe, Arizona, United States 85281. ",
  phoneNo: "+1 774 696 9620",
  email: "irshad_ahmeds@yahoo.com",
  linkedIn : "https://www.linkedin.com/in/iaschowrai/",
  github: "https://github.com/iaschowrai/"
};
