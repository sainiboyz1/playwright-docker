pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/sainiboyz1/playwright-docker.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npx playwright test --reporter=list,allure-playwright'
      }
    }

    stage('Allure Report') {
      steps {
        allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/test-results/**/*.png', allowEmptyArchive: true
    }
  }
}
