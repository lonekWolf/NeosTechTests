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
    stage('Test Dictionaries') {
      steps {
        sh '''
          npx playwright test tests/Dictionaries
        '''
      }
    }
    stage('Test FilteringObjectsAndForms') {
      steps {
        sh '''
          npx playwright test tests/FilteringObjectsAndForms
        '''
      }
    }
    stage('Test Grid') {
      steps {
        sh '''
          npx playwright test tests/Grid
        '''
      }
    }
    stage('Test GUI') {
      steps {
        sh '''
          npx playwright test tests/GUI
        '''
      }
    }
    stage('Test Login') {
      steps {
        sh '''
          npx playwright test tests/Login
        '''
      }
    }
    stage('Test Methods') {
      steps {
        sh '''
          npx playwright test tests/Methods
        '''
      }
    }
    stage('Test SetFocus') {
      steps {
        sh '''
          npx playwright test tests/SetFocus
        '''
      }
    }
    stage('Test ViewSettings') {
      steps {
        sh '''
          npx playwright test tests/ViewSettings
        '''
      }
    }
    stage('Test VisibilityActions') {
      steps {
        sh '''
          npx playwright test tests/VisibilityActions
        '''
      }
    }
    stage('Rename Report') {
      steps {
        script {
          def timestamp = sh(script: "date +'%Y%m%d_%H%M'", returnStdout: true).trim()
          sh """
            if [ -d playwright-report ]; then
              mv playwright-report playwright-report_${timestamp}
            fi
          """
          env.REPORT_DIR = "playwright-report_${timestamp}"
        }
      }
    }
  }
  post {
        success {
          script {
            def reportDir = env.REPORT_DIR ?: 'playwright-report'
            archiveArtifacts allowEmptyArchive: true, artifacts: "${reportDir}/"
          }
        }
    } 
}
