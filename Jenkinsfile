pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install:  Dependencies') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }
        stage('Build:  Android') {
            steps {
                sh 'yarn build:e2e:android:release'
            }
        }
        stage('Tests e2e:  Detox Tests') {
            steps {
                sh 'yarn test:e2e:android:release'
            }
        }
    }
}
