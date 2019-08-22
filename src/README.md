# Deploy on Google Cloud using Kubernetes

Set current project id
```
gcloud config set project {PROJECT_ID}
```

Create the cluster if it does not exists yet
```
gcloud container clusters create nodeapi-cluster --zone us-east1-b --machine-type f1-micro 
```

Connect `kubectl` to the created cluster
```
gcloud container clusters get-credentials nodeapi-cluster --zone us-east1-b
```

Build and tag docker image and tag it for uploading
```
docker build -t gcr.io/{PROJECT_ID}/nodeapi-image:v1 .
```

Upload the image we just built
```
gcloud docker -- push gcr.io/{PROJECT_ID}/nodeapi-image:v1
```

Create deployment
```
kubectl create -f deployment.yaml --save-config
```

Create service
```
kubectl apply -f service.yaml
```

To scale, change number replicas on deployment.yaml and run
```
kubectl apply -f deployment.yaml
```

To delete everything 
```
$ kubectl delete service/nodeapi
$ kubectl delete deployment/nodeapi-deployment
$ gcloud container clusters delete nodeapi-cluster --zone us-east1-b 
```