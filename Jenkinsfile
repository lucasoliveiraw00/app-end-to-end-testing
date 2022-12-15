pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Packages') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
            post {
                success {
                    publishChecks name: 'Teste',
                        summary: ':white_check_mark: Succesfully analysed',
                        title: 'Passed', text: readFile("jenkins_output.md")
                }
                failure {
                    publishChecks conclusion: 'FAILURE',
                        name: 'Teste', title: 'Failed', text: readFile("jenkins_output.md"),
                        summary: ':warning: The static analysis failed'
                }
                aborted {
                    publishChecks conclusion: 'CANCELED',
                        name: 'Teste', title: 'Aborted', text: readFile("jenkins_output.md"),
                        summary: ':no_entry: The static analysis was aborted'
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
