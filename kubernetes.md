https://firegroup.atlassian.net/wiki/spaces/SO/pages/516980744/List+Pod+in+K8s+on+AWS+-+PROD+STAG

# usage cronjob
kubectl get cj -n socialhead | grep widget
kubectl describe -n socialhead cj widget-v2-schedule-sync-source-media-1616573640-kkddn
kubectl exec -it shop-schedule-uat-handle-product-deleted -c shop-schedule-uat bash -n socialhead

# usage pod
// get list pod
kubectl get po -n socialhead | grep shopapi-prod 
kubectl get po -n socialhead | grep shop-prod
kubectl get po -n socialhead | grep shop-uat
kubectl get po -n socialhead | grep "shop-worker-prod.*Run"
kubectl get po -n socialhead | grep "shop-worker-uat.*Run"
kubectl get po -n socialhead | grep "shop-worker-uat.*Pen"
kubectl get po -n socialhead | grep shopapi-uat
kubectl get po -n socialhead | grep widgetapi-stag
kubectl get po -n socialhead | grep widget-stag
kubectl get po -n socialhead | grep widget-worker
kubectl get po -n socialhead | grep widget-worker-v2-uat
kubectl get po -n socialhead | grep widgetapi-v2-uat
kubectl get po -n socialhead | grep widgetapi-v2-prod
kubectl get po -n socialhead | grep "widget-v2-worker-prod.*Run"

# access to pod
mkdir -m 777 -p storage/app/public
kubectl exec -it shop-worker-uat-54dc9684cd-tlcqt -c shop-worker-uat bash -n socialhead
kubectl exec -it shopapi-stag-55b9b95f54-27vdb -c shopapi-stag bash -n socialhead
kubectl exec -it shop-worker-stag-7f5f94b6c5-g45sz -c shop-worker-stag bash -n socialhead
kubectl exec -it widgetapi-stag-6bd767c9fb-m9vf2 -c widgetapi-stag bash -n socialhead
kubectl exec -it widgetapi-prod-68c857d4f8-wq8fs -c widgetapi-prod bash -n socialhead
kubectl exec -it widget-worker-stag-666465c795-8vkbn -c widget-worker-stag bash -n socialhead
kubectl exec -it widgetapi-v2-uat-7794cbd49f-4r5pq -c widgetapi-v2-uat bash -n socialhead
kubectl exec -it widgetapi-v2-prod-5bc7c4d45d-6fc4w -c widgetapi-v2-prod bash -n socialhead
rm -rf vendor/sohead/core/migrations/*
kubectl exec -it widgetapi-v2-uat-7d78884ffc-2md27 -c widgetapi-v2-uat bash -n socialhead

// get list containers in a pod
kubectl describe -n socialhead pod/widgetapi-v2-prod-84568cc8bf-4tz46 | grep Image
kubectl describe -n socialhead pod/widget-worker-v2-uat-5db65d56bb-ktrvt | grep Image

// logs help
kubectl logs --help

// get logs from container
kubectl logs -n socialhead shopapi-stag-cfc454d4d-4d2dr -c shopapi-stag -f 

// get logs from container 10 rows
kubectl logs -n socialhead shop-worker-stag-58fd97747d-tffjh -c shopapi-worker-stag --tail=10 -f=true
kubectl logs -n socialhead shopapi-stag-7d5cbbff6-ng279 -c shopapi-stag-nginx --tail=10 -f=true
kubectl logs -n socialhead shop-worker-prod-575b7757bf-m7srm -c shop-worker-prod --tail=10 -f=true
kubectl logs -f --tail 10 -n socialhead widgetapi-prod-8fcc85f5-qdfq6 -c widgetapi-prod-nginx

// get logs from containers by -label app
kubectl logs -n socialhead deploy/shopapi-stag-nginx --tail=10000 --since=20m > shopapi-stag-nginx.log
kubectl logs -n socialhead deploy/shop-worker-uat --tail=10000 --since=20m > shop-worker-uat.log

kubectl logs -n socialhead -lapp=shop-worker-stag -c shop-worker-stag --tail=10 -f=true
kubectl logs -n socialhead -lapp=shop-worker-uat -c shop-worker-uat --tail=10000 --since=20m > shop-worker-uat.log
kubectl logs -n socialhead -lapp=shop-worker-stag -c shop-worker-stag --tail=10000 --since=20m > shop-worker-stag.log
kubectl logs -n socialhead -lapp=shopapi-stag -c shopapi-stag --tail=100000 --since=20m > shopapi-stag.log
kubectl logs -n socialhead -lapp=shopapi-prod -c shopapi-prod --tail=100000 --since=20m > shopapi-prod.log
kubectl logs -n socialhead -lapp=widget-v2-worker-prod -c widget-v2-worker-prod --tail=100000 --since=20m > widget-worker-prod.log
# new
kubectl logs -f deploy/shop-worker-prod -c shop-worker-prod -n socialhead --tail=10000 --since=50m > shop-worker-prod.log
kubectl logs deploy/shop-worker-uat -c shop-worker-uat -n socialhead --tail=10000 --since=50m > shop-worker-uat.log
kubectl logs deploy/widget-worker-stag -c widget-worker-stag -n socialhead --tail=10000 --since=50m > widget-worker-stag.log
kubectl logs deploy/widget-v2-worker-prod -c widget-v2-worker-prod -n socialhead --tail=10000 --since=50m > widget-worker-prod.log

# install 
// google-cloud-sdk
https://cloud.google.com/sdk/docs/quickstart-macos
macOS 64-bit (x86_64)
Download to [home directory]
> ./google-cloud-sdk/install.sh
Restart terminal
> gcloud init
> gcloud auth list

// kubernetes on Homebrew
https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-macos
> brew install kubectl 
> kubectl version --client

// point kubernetes to gcloud resource
gcloud container clusters get-credentials gke-staging --zone asia-southeast1-a --project fireappsvn

# AWS
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html
// download the macOS pkg file
// install iam
brew install aws-iam-authenticator
aws-iam-authenticator help
// config
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

// sample a right way to config
cat ~/.aws/credentials
[default]
aws_access_key_id = AKIAZRNSXTLVNRITDTH5
aws_secret_access_key = /8HMg5UZJHkuTXnyJHwOIDW2F/lhuBON7DxYewQo
source_profile=default
role_arn=arn:aws:iam::655894223594:role/eksrole-socialhead


// Connect to Cluster
aws eks update-kubeconfig --name fa-prod-eks

# switching 
// display list of contexts
kubectl config get-contexts
// display the current-context
kubectl config current-context
// set the default context to [cluster-name]
kubectl config use-context arn:aws:eks:ap-southeast-1:655894223594:cluster/fa-prod-eks
kubectl config use-context arn:aws:eks:ap-southeast-1:655894223594:cluster/fa-staging-eks

# kubectl-aliases
https://github.com/ahmetb/kubectl-aliases#installation
https://raw.githubusercontent.com/ahmetb/kubectl-alias/master/.kubectl_aliases
Download to [home directory]