## Docker build
```docker build -t sample-service .```
## Docker run
```docker run sample-service```
## Start K8S
```sudo minikube start```
## Copy docker image 
```docker image save -o sample-service.tar sample-service:latest```

```minikube image load sample-service.tar```
## Apply services
```kubectl apply -f sample-headless-service.yaml```

```kubectl apply -f sample-stateful-set.yaml```

```kubectl apply -f nginx-config-map.yaml```

```kubectl apply -f nginx-deployment.yaml```

## Get info of the nginx service
```minikube service nginx-service```



