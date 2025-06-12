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
        bat 'docker-compose up --abort-on-container-exit --build'
      }
    }

    stage('Generate Allure Report') {
      steps {
        bat 'npx allure generate allure-results --clean -o allure-report'
        bat 'npx allure open allure-report'
      }
    }
  }
}
