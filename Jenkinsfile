def notifyBuild(String buildStatus = 'STARTED') {

  publishChecks name: 'example', title: 'Pipeline Check', summary: 'check through pipeline',
    text: 'you can publish checks in pipeline script',
    detailsURL: 'https://github.com/jenkinsci/checks-api-plugin#pipeline-usage',
    actions: [[label:'an-user-request-action', description:'actions allow users to request pre-defined behaviours', identifier:'an unique identifier']]

}

node('macos') {
    stage('Build') {
        //
        sh 'yarn install'
    }
    stage('Test') {
        //
        notifyBuild()
        sh 'ls -la'
    }
    stage('Deploy') {
        //
    }
}
