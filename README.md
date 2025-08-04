# 🚀Simple Node.js Application with CI/CD Pipeline

This project showcases a simple Node.js application that is automatically tested. The application is then built into a Docker image, which is pushed to Docker Hub. Finally, the image is deployed to a remote server using GitHub Actions as part of a continuous integration and deployment (CI/CD) pipeline.

## 🧱 Tech Stack

- 🟩**Node.js** (v18)
- 🚂**Express.js** web framework
- 🧪**Jest** & **Supertest** for unit testing
- 🐳**Docker** for containerization
- ⚙️**GitHub Actions** for CI/CD

## 🔁 CI/CD Workflow

The GitHub Actions pipeline does the following when code is pushed to the `main` branch:

01. ✅ **Checks out** the source code
02. ⚙️ **Sets up Node.js v18**
03. 📥 **Installs dependencies**
04. 🧪 **Runs tests** using Jest
05. 🔐 **Authenticates to DockerHub**
06. 🐳 **Builds Docker image**
07. 🚢 **Pushes image** to DockerHub
08. 💻 **Logging into Remote server with ssh key** 
09. 📦 **Pulls docker image from DockerHub**
10. 📦 **Runs Container**

##  🔐 Environment Secrets & Variables
 
Make sure to update your GitHub Repository secrets and variables with:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`
- `SERVER_IP`
- `SERVER_KEY`
- `SERVER_USER`

## 💻 Access The Application
• Access your Node.js application with public IP address
`http://ip-address/`
