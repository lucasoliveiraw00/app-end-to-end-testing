pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install node_modules') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }
        stage('Install node_modules') {
            steps {
                sh 'cd android; ./gradlew clean; ./gradlew assembleRelease; cd ..'
            }
        }
        // stage('Build detox android') {
        //     steps {
        //         sh 'yarn build:e2e:android:release'
        //     }
        // }
        // stage('Start emulator and run Detox integration tests') {
        //     steps {
        //         sh 'yarn test:e2e:android:release'
        //     }
        // }
        // stage('Test') {
        //     steps {
        //         sh 'ls -la'
        //     }
        // }
    }
}
