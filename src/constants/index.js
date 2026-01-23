// src/constants/index.js

export const HERO_CONTENT = {
  p1: `I'm a Software Engineer who thrives on solving complex problems and creating systems that have a real-world impact.
My journey in tech started with a curiosity to understand how things work behind the scenes, and that curiosity turned into a passion for building efficient, scalable, and reliable solutions.
I love the challenge of breaking down large, abstract problems and transforming them into something tangible, useful, and efficient.`,

  p2: `Over the years, I've had the opportunity to work on a variety of projects from backend-heavy systems to full-stack solutions, each one offering a unique set of challenges.
What excites me most is the ability to collaborate with others and see an idea evolve into a fully-fledged product that drives real business value.
Whether I'm architecting a new system or optimizing an existing one, I always look for ways to push the boundaries of what's possible, ensuring that every solution is not just functional, but truly impactful.`
};

export const RESUMELINK = {
  resume: "https://drive.google.com/file/d/1Z6c-YnxGrdXeJTxAlesR4uL9z-ku9REv/view?usp=sharing"
};

export const EXPERIENCES = [
  {
    year: "Mar/2024 - Present",
    role: "Software Engineer",
    company: "Wavesoft Solutions Inc.",
    description: [
      "Designed and developed high-availability Marketplace Pricing & Incentive microservices using Java 17 and Spring Boot, supporting ~300K daily active users.",
      "Built and optimized GraphQL and REST APIs aggregating data from Elasticsearch and downstream services, achieving ~40ms P99 latency under high load.",
      "Improved reliability by implementing WebClient timeouts, controlled retries, and reactive processing, reducing worst-case latency from seconds to milliseconds.",
      "Deployed containerized services using Docker and Kubernetes with CI/CD pipelines, ensuring seamless releases.",
      "Implemented observability with Prometheus, Grafana, and Spring Boot Actuator for monitoring and proactive incident response.",
      "Participated in code reviews, mentored junior engineers, and maintained high test coverage using JUnit, Mockito, and Cucumber."
    ]
  },
  {
    year: "May/2021 - Dec/2021",
    role: "Senior Consultant",
    company: "Ernst & Young LLP",
    description: [
      "Led the design and delivery of a distributed shipment tracking platform using Spring Boot and React, serving ~250K daily active users.",
      "Migrated REST APIs to GraphQL and introduced Redis caching, reducing latency by up to 80%.",
      "Implemented event-driven architecture using Kafka with Transactional Outbox and Saga patterns to ensure data consistency across services.",
      "Optimized PostgreSQL operations using JPA/Hibernate for faster data access and reporting.",
      "Automated CI/CD pipelines for containerized deployments on Kubernetes and improved system reliability through monitoring with Prometheus and Grafana.",
      "Mentored team members, conducted code reviews, and ensured 98% automated test coverage with JUnit, Mockito, and Jest."
    ]
  },
  {
    year: "Sep/2020 - May/2021",
    role: "Senior Developer",
    company: "JK Technosoft Ltd",
    description: [
      "Developed a Spring Boot–based batch processing system to ingest large CSV files, store in AWS S3, and process over 1M records/day using Spring Batch.",
      "Engineered reliable batch jobs with Hibernate and MySQL, reducing manual reprocessing and job failures.",
      "Built secure REST APIs with Spring Boot and implemented automated API testing with REST Assured.",
      "Deployed containerized microservices using Docker, AWS EKS, Jenkins CI/CD, and GitHub.",
      "Designed scalable, fault-tolerant architecture to support critical business data operations."
    ]
  },
  {
    year: "June/2014 - Dec/2019",
    role: "Software Developer",
    company: "Victory Packaging",
    description: [
      "Developed and maintained backend services using Java and SQL to support core business operations.",
      "Optimized database queries and stored procedures, improving performance by up to 60%.",
      "Refactored legacy code, reducing post-release defects by 40% and improving system reliability.",
      "Implemented batch processing and automated data workflows, enhancing operational efficiency.",
      "Collaborated with teams to ensure high-quality code and maintainable software solutions."
    ]
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "https://github.com/iaschowrai/Ecommerce-Project",
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication."
  },
  {
    title: "File Server REST API",
    link: "https://github.com/iaschowrai/FileServerWithCaching",
    description: "The File Server REST API is a Java-based Spring Boot application that provides endpoints for uploading, downloading, and deleting files. It serves as a simple file storage and retrieval system with caching capabilities for improved performance."
  },
  {
    title: "Hotel Booking Management System",
    link: "https://github.com/iaschowrai/HotelBooking",
    description: "This is a hotel management booking system built using Spring Boot, Spring Security, JWT Authentication, and MySQL. The system allows users to manage hotel bookings, view available rooms, and make reservations, while providing secure authentication and authorization mechanisms."
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/iaschowrai/iaschowrai",
    description: "A personal portfolio website showcasing projects, skills, and contact information."
  }
];

export const TECHNOLOGIES = [
  "Java 8 & 17", "Spring Boot", "Spring MVC", "Spring WebFlux", "Spring Security", "Spring Cloud", "Spring Batch",
  "Microservices Architecture", "RESTful APIs", "GraphQL", "Kafka", "Event-Driven Architecture", "JPA/Hibernate",
  "MySQL", "PostgreSQL", "MongoDB", "Cassandra", "Redis", "Elasticsearch", "AWS (S3, EC2, Lambda, EKS)", "Azure",
  "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "CloudFormation", "CI/CD Pipelines",
  "Observability & Monitoring (Prometheus, Grafana, Splunk, ELK Stack)", "Unit & Integration Testing (JUnit, Mockito, Cucumber, Jest)",
  "React.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "JavaScript", "Python", "JWT Authentication",
  "OAuth2", "Security Best Practices", "Data Modeling & Optimization", "SQL Query Tuning", "Asynchronous Processing",
  "Batch Processing", "API Gateway Design", "Containerization", "Production Support & Incident Management",
  "Performance Tuning", "Automation & DevOps Principles", "Agile Methodologies", "Code Review & Mentoring",
  "Version Control (Git)", "Software Design Patterns (SOLID, Transactional Outbox, Saga)", "CI/CD Automation",
  "Cloud-Native Architecture", "Full-Stack Development"
];

export const CONTACT = {
  name: "Irshad Ahmed Schowrai",
  address: "1221 E Apache Blvd, Apt 2057, Tempe, Arizona, United States 85281",
  phoneNo: "+1 774 696 9620",
  email: "irshad_ahmeds@yahoo.com",
  linkedIn: "https://www.linkedin.com/in/iaschowrai/",
  github: "https://github.com/iaschowrai/"
};
