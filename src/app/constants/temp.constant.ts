import { UserStory } from '../data/model/user-story.model';
export const ACTIVE_SPRINT_DATA = `[
  {
    "id": 1,
    "name": "As a project architect, I want to implement a Service Discovery/Registry for the platform.",
    "description": "Service Discovery/Registry helps the microservices communicate each other.",
    "priority": "HIGH",
    "estimatedTime": 12,
    "assignedTo": null
  },
  {
    "id": 2,
    "name": "As a platform user, I need to create an account in the platform.",
    "description": "User registration are allowed for all people.",
    "priority": "HIGH",
    "estimatedTime": 21,
    "assignedTo": null
  },
  {
    "id": 3,
    "name": "As a platform user, I want to authenticate into the platform.",
    "description": "Authentication once an account is created helps us to perform operations in the platform.",
    "priority": "HIGH",
    "estimatedTime": 8,
    "assignedTo": null
  },
  {
    "id": 5,
    "name": "As a responsible to review a project, I want to approve the changes once they were tagged as ready to review.",
    "description": "The responsibles of a project can approve the new updated applied to a project.",
    "priority": "MEDIUM",
    "estimatedTime": 16,
    "assignedTo": null
  },
  {
    "id": 7,
    "name": "As a project architect, I want to implement a Gateway service for the platform.",
    "description": "A gateway will be the unique access to the platform.",
    "priority": "HIGH",
    "estimatedTime": 12,
    "assignedTo": null
  },
  {
    "id": 8,
    "name": "As a project archited, I want to implement a centralized configuration service.",
    "description": "A centralized configuration service helps with the versioning a clearer organization.",
    "priority": "HIGH",
    "estimatedTime": 16,
    "assignedTo": null
  },
  {
    "id": 9,
    "name": "As a product owner, I want to share my project(s) to other users of the platform.",
    "description": "Mainly the owner of a project can share it to users with role TUTOR, REVISOR",
    "priority": "HIGH",
    "estimatedTime": 28,
    "assignedTo": null
  },
  {
    "id": 10,
    "name": "As a product owner, I want to upload my documents to the platform.",
    "description": "Documents can be uploaded to the platform.",
    "priority": "MEDIUM",
    "estimatedTime": 35,
    "assignedTo": null
  },
  {
    "id": 11,
    "name": "As a project manager, I want to manage projects of a project.",
    "description": "A created project can be edited and also deleted.",
    "priority": "MEDIUM",
    "estimatedTime": 6,
    "assignedTo": null
  },
  {
    "id": 12,
    "name": "As a project manager, I want to manage every sprint of a project.",
    "description": "Sprint can be configured based on the team's organization.",
    "priority": "LOW",
    "estimatedTime": 22,
    "assignedTo": null
  },
  {
    "id": 13,
    "name": "As a product owner, I want to add my features that will be implemented.",
    "description": "A project can have many sprints with some duration in which it will have deliveries.",
    "priority": "HIGH",
    "estimatedTime": 35,
    "assignedTo": null
  },
  {
    "id": 14,
    "name": "As a project architect, I want to document all the architectures and diagrams of the platform.",
    "description": "It is important to have everything documented, it helps everybody understand about how the system works.",
    "priority": "MEDIUM",
    "estimatedTime": 80,
    "assignedTo": null
  },
  {
    "id": 15,
    "name": "As a product owner, I want to support documents versioning.",
    "description": "Each resource uploaded to the platform can have many versions.",
    "priority": "HIGH",
    "estimatedTime": 35,
    "assignedTo": null
  },
  {
    "id": 16,
    "name": "As a platform user, I want to mark as done every feedback received through the comments.",
    "description": "Comments can be left to the project as a feedback for those with whom the project has been shared.",
    "priority": "LOW",
    "estimatedTime": 18,
    "assignedTo": null
  },
  {
    "id": 4,
    "name": "As a platform user, I need to receive some notifications when new updates were added to the projects.",
    "description": "If someone is subscribed to some project, he can receive some notifications with all the news of that project.",
    "priority": "LOW",
    "estimatedTime": 40,
    "assignedTo": null
  },
  {
    "id": 17,
    "name": "As a project architect, I want to configure Continuos Integration for the project.",
    "description": "Continuos integration will be managed with Git and GitHub",
    "priority": "HIGH",
    "estimatedTime": 4,
    "assignedTo": null
  },
  {
    "id": 18,
    "name": "As a project architect, I want to configure Continuos Delivery for the services",
    "description": "Continuos Delivery can be managed by Jenkins software. We need to research how to integrate it to our services.",
    "priority": "MEDIUM",
    "estimatedTime": 10,
    "assignedTo": null
  },
  {
    "id": 19,
    "name": "As a project architect, I want to integrate docker for our deployments.",
    "description": "Docker is a really helpful tool for deploying our services easily.",
    "priority": "MEDIUM",
    "estimatedTime": 20,
    "assignedTo": null
  },
  {
    "id": 20,
    "name": "As product owner, I need to see the statistics of the user stories about in-progress, to-do, done, etc states.",
    "description": "Statistics are really important as a report of any project because it helps us to see how it is going.",
    "priority": "MEDIUM",
    "estimatedTime": 15,
    "assignedTo": null
  },
  {
    "id": 21,
    "name": "As a product owner, I want to see a special panel to see all the issues found during the development.",
    "description": "This helps us to see the user stories that we need to review again.",
    "priority": "LOW",
    "estimatedTime": 40,
    "assignedTo": null
  },
  {
    "id": 22,
    "name": "As a platform user, I want to have an special panel for managing my documents.",
    "description": "A special panel for managing our resources helps us to interact easily with the platform.",
    "priority": "HIGH",
    "estimatedTime": 25,
    "assignedTo": null
  },
  {
    "id": 23,
    "name": "As a platform user, I want to have a panel where I can manage sharing feature.",
    "description": "Users need to share their projects with others.",
    "priority": "HIGH",
    "estimatedTime": 12,
    "assignedTo": null
  },
  {
    "id": 24,
    "name": "As a platform user, I need to logout from the system.",
    "description": "Once completed what a user wants to do, use can logout safely from the system.",
    "priority": "HIGH",
    "estimatedTime": 2,
    "assignedTo": null
  },
  {
    "id": 25,
    "name": "As a product owner, I want the platform web-app to be responsive",
    "description": "Responsive approach is the best option because it can be used from any kind of devices.",
    "priority": "MEDIUM",
    "estimatedTime": 30,
    "assignedTo": null
  },
  {
    "id": 26,
    "name": "As a project architect, we need to integrate DMS Service with mongodb database engine.",
    "description": "MongoDB is highly performance option for systems that requires flexibility for horizontal scalying.",
    "priority": "HIGH",
    "estimatedTime": 25,
    "assignedTo": null
  },
  {
    "id": 27,
    "name": "As a project architect, we want to integrate MySQL database engine to all our services except DMS",
    "description": "MySQL is a good option when we need to have a better performance for writte operations.",
    "priority": "HIGH",
    "estimatedTime": 60,
    "assignedTo": null
  },
  {
    "id": 28,
    "name": "As a project architect, I want to integrate SWAGGER to all our services for documenting the APIs.",
    "description": "SWAGGER is a great tool for documenting all our APIs",
    "priority": "MEDIUM",
    "estimatedTime": 45,
    "assignedTo": null
  },
  {
    "id": 29,
    "name": "As a project architect, I want to configure the properties for each profile that we need like DEV, QA, PRODUCTION, etc.",
    "description": "Having many profiles helps us to configure and deploy the system into each environment.",
    "priority": "LOW",
    "estimatedTime": 15,
    "assignedTo": null
  },
  {
    "id": 30,
    "name": "As a platform user, I need to have a diferent menu distribution when it is used from mobile devices.",
    "description": "We need to define how our platform needs to be shown in mobile devices.",
    "priority": "LOW",
    "estimatedTime": 8,
    "assignedTo": null
  },
  {
    "id": 31,
    "name": "As a platform user, I need to update my tasks' status.",
    "description": "We need to move our tasks from TO-DO to IN-PROGRESS, from IN-PROGRESS to REVIEW, etc.",
    "priority": "HIGH",
    "estimatedTime": 14,
    "assignedTo": null
  },
  {
    "id": 32,
    "name": "As a platform user, I need to create many projects into the platform.",
    "description": "Users should able to create as many projects as they require.",
    "priority": "HIGH",
    "estimatedTime": 25,
    "assignedTo": null
  },
  {
    "id": 33,
    "name": "As a platform user, I need to change from a project to another.",
    "description": "It is important change the main screen based on the project that we need to use.",
    "priority": "LOW",
    "estimatedTime": 30,
    "assignedTo": null
  },
  {
    "id": 34,
    "name": "As a project architect, I need to deploy our services in AWS platform.",
    "description": "Since AWS provides us a scalable environment, it is a great option to take into account for deploying our projects.",
    "priority": "MEDIUM",
    "estimatedTime": 70,
    "assignedTo": null
  },
  {
    "id": 6,
    "name": "As a product owner, I want to have a mobile app for accessing to the platform.",
    "description": "Users can also use the platform through a mobile app.",
    "priority": "LOW",
    "estimatedTime": 100,
    "assignedTo": null
  },
  {
    "id": 35,
    "name": "As a project architect, we need to scale our microservices using Kubernetes",
    "description": "Kubernetes is a great tools for scaling our services.",
    "priority": "LOW",
    "estimatedTime": 94,
    "assignedTo": null
  }
]`;
