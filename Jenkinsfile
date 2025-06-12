pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/sainiboyz1/playwright-docker.git'
      }
    }

    stage('Run in Docker') {
      steps {
        sh 'docker-compose up --abort-on-container-exit --build'
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npx allure generate allure-results --clean -o allure-report'
        sh 'npx allure open allure-report'
      }
    }
  }
}
