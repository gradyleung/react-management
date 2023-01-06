pipeline {
  agent any

  tools {
    nodejs "nodejs"
  }

  stages {
    stage('Dependency') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run start'
      }
    }
  }
}
