pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Dependency') {
            steps {
                withChecks('My Tests') {
                    sh 'yarn install --frozen-lockfile'
                }
            }
        }
        stage('Build: Android') {
            steps {
                sh 'yarn build:e2e:android:release'
            }
        }
        stage('Tests: End-to-end') {
            steps {
                sh 'yarn test:e2e:android:release'
            }
        }
    }
}
