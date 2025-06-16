pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sainiboyz1/playwright-docker.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('playwright-docker', '-f docker/Dockerfile .')
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    docker.image('playwright-docker').inside {
                        sh 'npm test'
                    }
                }
            }
        }
    }
}
