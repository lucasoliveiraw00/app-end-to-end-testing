def DETAILS_URL="https://google.com"
def detailsText
pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Packages') {
            steps {
                publishChecks detailsURL: DETAILS_URL, name: 'Waiting for executor',
                    summary: ':white_check_mark: Build started.',
                    title: 'Passed'

                sh 'ls -la'
            }
        }
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
    post {
        success {
            publishChecks conclusion: 'SUCCESS' detailsURL: DETAILS_URL, name: 'Install: Packages',
                summary: ':white_check_mark: RTI Connext DDS libraries downloaded.',
                title: 'Passed', text: 'teste'
        }
        failure {
            publishChecks conclusion: 'FAILURE', detailsURL: DETAILS_URL,
                name: 'Install: Packages', title: 'Failed', text: 'teste',
                summary: ':warning: Failed downloading RTI Connext DDS libraries.'
        }
        aborted {
            publishChecks conclusion: 'CANCELED', detailsURL: DETAILS_URL,
                name: 'Install: Packages', title: 'Aborted', text: 'teste',
                summary: ':no_entry: The download of RTI Connext DDS libraries was aborted.'
        }
    }
}
