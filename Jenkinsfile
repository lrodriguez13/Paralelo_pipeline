pipeline {
    agent any
 
    tools {nodejs "Node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente_1_1"
                    }
                    steps {
                        git url: 'https://github.com/lrodriguez13/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 2853f32d-e447-4a23-b20e-364fc8fa21f0  --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agente_1_2"
                    }
                    steps {
                        git url: 'https://github.com/lrodriguez13/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }
 
                stage('Slave 3') {
                    agent {
                        label "Agente_1_3"
                    }
                    steps {
                        git url: 'https://github.com/lrodriguez13/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

            }    
        }
    }     
}