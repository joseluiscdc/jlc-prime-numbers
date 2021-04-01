pipeline {
  agent any
    
  tools {
      nodejs "node-14.5.0"
  }
    
  stages {
    
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Run Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}