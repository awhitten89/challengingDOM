pipeline {
    agent {
        dockerfile true
    }

    stages {
        stage('build') {
            steps {
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm install'
                sh 'npm run cy:verify'
            }
        }
        
        stage('start local server') {
            steps {
                sh 'nohup npm run start:ci &'
            }
        }
        
        stage('cypress tests') {
            steps {
                echo "Running build ${env.BUILD_ID}"
                sh "npm run cy:run"
            }
        }
    }
    
    post {
        always {
            echo 'Stopping local server'
            sh 'pkill -f http-server'
        }
    }  
}