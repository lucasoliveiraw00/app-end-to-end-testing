pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Dependency') {
            steps {
                script {
                    try {
                        sh 'ls -la'
                        publishChecks(name: 'Sucesso', conclusion: 'SUCCESS')
                    } catch (err) {
                        publishChecks(name: 'Failed', conclusion: 'FAILURE')
                    } finally {
                        publishChecks(name: 'finally', conclusion: 'COMPLETED')
                    }

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
