## 🚀 Tech Stack

- **Frontend**: React.js
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Security Tools**:
  - [SonarQube](https://www.sonarqube.org/)
  - [Trivy](https://github.com/aquasecurity/trivy)
  - [GitLeaks](https://github.com/gitleaks/gitleaks)

---

## ⚙️ Features

✅ Continuous Integration  
✅ Code Linting & Formatting  
✅ Unit Testing  
✅ Static Code Analysis (SonarQube)  
✅ Docker Image Build & Push  
✅ Container & Filesystem Scanning (Trivy)  
✅ Secrets Scanning (GitLeaks)  
✅ Upload Reports as Artifacts

## 🔁 CI/CD Pipeline

**GitHub Actions** pipeline is triggered on every push to `main`:

### 1️⃣ Build & Test
- `npm install`
- `npm run build`
- `npm test`
- `npm audit fix`

### 2️⃣ Linting
- Runs `npm run lint` and auto-fixes where possible

### 3️⃣ SonarQube Analysis
- Static code analysis + Quality Gate enforcement

### 4️⃣ Docker Image
- Builds and pushes image to DockerHub  
- **Image**: [`pepuhove/devsecops`](https://hub.docker.com/r/pepuhove/devsecops)

### 5️⃣ Security Scans
- **Trivy**: Scans source files & Docker image  
- **GitLeaks**: Detects hardcoded secrets  
- **Reports**: Uploaded as GitHub artifacts

---

## 🐳 Docker Usage

### Pull and Run:
```bash
docker pull pepuhove/devsecops:latest
docker run -d -p 8080:80 pepuhove/devsecops:latest
Open http://localhost:8080 in your browser.
