pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Packages') {
            steps {
                withChecks('Python Tests') {
                    publishChecks name: "MyCheck", conclusion: "success", summary: "Everything is OK!"
                }
                // publishChecks name: 'Jenkins/SBXDEPLOY Deploy', status: 'IN_PROGRESS', title: 'Cleanup', conclusion: 'NONE'
                sh 'yarn install --frozen-lockfile'
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
