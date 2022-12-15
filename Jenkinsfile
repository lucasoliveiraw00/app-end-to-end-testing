pipeline {
    agent {
        label 'macos'
    }

    stages {
        stage('Install: Packages') {
            withChecks('Python Tests') {
                publishChecks status: IN_PROGRESS
                try {
                    sh 'yarn install --frozen-lockfile'
                    junit 'results.xml'
                } catch (FlowInterruptedException err) {
                    publishChecks status: CANCELLED
                    throw err
                } catch( Exception err) {
                    publishChecks status: FAILED
                    throw err
                }
            }
            // steps {
            //     publishChecks name: 'Jenkins/SBXDEPLOY Deploy', status: 'IN_PROGRESS', title: 'Cleanup', conclusion: 'NONE'
            //     sh 'yarn install --frozen-lockfile'
            // }
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
