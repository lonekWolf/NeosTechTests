pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test -g "Visibility Actions"
        '''
      }
    }
    post {
        success {
          archiveArtifacts artifacts: 'playwright-report', followSymlinks: false
        }
    } 
  }
}
