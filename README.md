# 🚀 SIT737 - Task 5.2D: Dockerization & Cloud Publishing

This project demonstrates how to containerize a simple **Node.js microservice** using **Docker** and publish the image to **Google Cloud Platform's Artifact Registry**. This is a practical exercise from Deakin University's SIT737 - Cloud-Native Application Development unit.

---

## 📦 Project Overview

We created a basic Express-based Node.js microservice, Dockerized it, and pushed it to a private Docker repository on Google Cloud's Artifact Registry. This README outlines the entire process from development to cloud deployment.

---

## 🛠 Tools & Technologies Used

- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Google Cloud SDK](https://cloud.google.com/sdk)
- [Artifact Registry (GCP)](https://cloud.google.com/artifact-registry)
- [Git & GitHub](https://github.com)

---

## 🌐 GCP Configuration

- **Project ID**: `sit737-25t1-nair-a46d95f`  
- **Region**: `australia-southeast1` (Melbourne)  
- **Artifact Registry Name**: `my-repo`

---

## 📁 Folder Structure

sit737-2025-prac5d/ ├── index.js ├── Dockerfile ├── package.json ├── README.md



---

## ✅ Step-by-Step Instructions

### 🔰 STEP 1: Set up Google Cloud Artifact Registry

1. **Authenticate to GCP**  
   ```
   gcloud auth login
Set your GCP project


gcloud config set project sit737-25t1-nair-a46d95f
Enable the Artifact Registry API


gcloud services enable artifactregistry.googleapis.com
Create your private Docker registry
(Only run this once — skip if it already exists)


gcloud artifacts repositories create my-repo \
  --repository-format=docker \
  --location=australia-southeast1 \
  --description="Private Docker registry for SIT737 Task 5.2D"
🔐 STEP 2: Authenticate Docker to GCP

gcloud auth configure-docker australia-southeast1-docker.pkg.dev
🐳 STEP 3: Build and Tag Your Docker Image
Ensure you're in the same folder as your Dockerfile and index.js.

Build the Docker image


docker build -t my-microservice .
Tag the image for Artifact Registry


docker tag my-microservice australia-southeast1-docker.pkg.dev/sit737-25t1-nair-a46d95f/my-repo/my-microservice:latest
⬆️ STEP 4: Push the Image to Artifact Registry

docker push australia-southeast1-docker.pkg.dev/sit737-25t1-nair-a46d95f/my-repo/my-microservice:latest
🧪 STEP 5: Run the Microservice Locally (From Cloud)
To verify the image works when pulled from Artifact Registry:


docker run -d -p 8080:8080 australia-southeast1-docker.pkg.dev/sit737-25t1-nair-a46d95f/my-repo/my-microservice:latest
Then visit http://localhost:8080 to check the service.

🚀 STEP 6: Push Source Code to GitHub
If your GitHub repo isn’t linked yet:


git init
git remote add origin https://github.com/srii03/sit737-2025-prac5d
git add .
git commit -m "Task 5.2D - Dockerized microservice and pushed to GCP"
git push -u origin main
📝 Sample Microservice Code (index.js)
javascript
Copy
Edit
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello from SIT737 Microservice!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
🐋 Dockerfile
Dockerfile

# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Start the app
CMD [ "node", "index.js" ]
📌 Notes
Make sure Docker is installed and running.

GCP SDK should be installed and authenticated.

You must enable billing for your GCP project to use Artifact Registry.

🔗 Useful Links
Google Cloud Artifact Registry Docs

Node.js Official Docs

Docker Hub

GitHub Repository

🙌 Author
Srii03 – SIT737 Cloud Native Application Development
GitHub: srii03

