pipeline {
    agent {
        label 'docker' // Or just use `any` if you're not assigning agents
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sainiboyz1/playwright-docker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-docker -f docker/Dockerfile .'
            }
        }

        stage('Run Tests in Container') {
            steps {
                sh 'docker run --rm -v $PWD:/app -w /app playwright-docker npm test'
            }
        }
    }
}
