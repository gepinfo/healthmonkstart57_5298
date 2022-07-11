module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "foodmanager-5298",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart57-5298-foodmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8011",
                    "protocol": "tcp",
                    "hostPort": "8011"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart57.local:27017/healthmonkstart57_5298?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart57.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart57.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart57.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart57.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart57.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart57.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart57.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart57.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart57"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart57",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "medicationmanager-5298",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart57-5298-medicationmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8012",
                    "protocol": "tcp",
                    "hostPort": "8012"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart57.local:27017/healthmonkstart57_5298?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart57.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart57.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart57.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart57.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart57.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart57.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart57.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart57.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart57"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart57",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "prescriptionmanager-5298",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart57-5298-prescriptionmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8013",
                    "protocol": "tcp",
                    "hostPort": "8013"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart57.local:27017/healthmonkstart57_5298?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart57.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart57.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart57.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart57.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart57.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart57.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart57.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart57.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart57"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart57",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "healthmonkstart57",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "healthmonkstart570",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
