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
        git 'https://github.com/your-org/your-playwright-repo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test --reporter=list,allure-playwright'
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
