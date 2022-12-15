pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Packages') {
            steps {
                withChecks('Install: Packages') {
                    publishChecks conclusion: 'FAILURE', name: 'Install: Packages', title: 'Failed', text: 'Failed', summary: ':warning: Failed downloading RTI Connext DDS libraries.'

                    sh 'yarn install --frozen-lockfile'
                }
            }
        }
        // stage('Install: Packages') {
        //     steps {
        //         sh 'yarn install --frozen-lockfile'
        //     }
        // }
        // stage('Build: Android') {
        //     steps {
        //         sh 'yarn build:e2e:android:release'
        //     }
        // }
        // stage('Tests: End-to-end') {
        //     steps {
        //         sh 'yarn test:e2e:android:release'
        //     }
        // }
    }
}
