def DETAILS_URL="https://google.com"
STAGE_NAME = "Teste"
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

                script {
                    detailsText = readFile("jenkins_output.md")
                }
            }
            post {
                success {
                    publishChecks detailsURL: DETAILS_URL, name: STAGE_NAME,
                        summary: ':white_check_mark: RTI Connext DDS libraries downloaded.',
                        title: 'Passed', text: detailsText
                }
                failure {
                    publishChecks conclusion: 'FAILURE', detailsURL: DETAILS_URL,
                        name: STAGE_NAME, title: 'Failed', text: detailsText,
                        summary: ':warning: Failed downloading RTI Connext DDS libraries.'
                }
                aborted {
                    publishChecks conclusion: 'CANCELED', detailsURL: DETAILS_URL,
                        name: STAGE_NAME, title: 'Aborted', text: detailsText,
                        summary: ':no_entry: The download of RTI Connext DDS libraries was aborted.'
                }
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
}
