pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Packages') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }
        stage('Build: Android') {
            steps {
                sh 'yarn build:e2e:android:release'
            }
        }
        stage('Test: End-to-end') {
            steps {
                sh 'yarn test:e2e:android:release'
            }
        }
    }
}
