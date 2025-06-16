/* Test to run on Docker Containers */
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
                bat 'docker build -t playwright-docker -f docker/Dockerfile .'
            }
        }

        stage('Run Tests in Docker') {
            steps {
                bat 'docker run --rm -v %cd%:/app -w /app playwright-docker npm test'
            }
        }
    }
}

