Based on post here: https://github.com/AMIS-Services/sig-kubernetes/blob/master/SIG01/lab00-setup/setupNativeWIN10.md

# Raw how-to
https://github.com/AMIS-Services/sig-kubernetes/blob/master/SIG01/lab00-setup/setupNativeWIN10.md


k8s-stuff windows:
enable hyperv (bios and windows)
install chocolatey 
install boxstarter: choco install boxstarter -y
In boxstarter shell ( C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy bypass -NoExit -Command "&'C:\ProgramData\Boxstarter\BoxstarterShell.ps1'" )
Install: 

choco install docker-desktop -y
choco install kubernetes-cli -y
choco install nodejs -y
install wsl2 https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi 

Docker desktop -> Enable kubernetes, and check all boxes
maybe: kubectl config use-context docker-for-desktop
kubectl get nodes

npx create-react-app hello
cd hello
npm  run-script build
Dockerfile content: 
FROM nginx:1.19.0
COPY build/ /usr/share/nginx/html
 
npm  run-script build
docker build -t hello .
docker tag hello localhost:5000/z1y/hello:13.10
docker push localhost:5000/z1y/hello:13.10
 
 
docker build -t hwa .
docker tag hwa localhost:5000/z1y/hwa:1.3
docker push localhost:5000/z1y/hwa:1.3
 
 
mkdir hello-api
dotnet new sln
mkdir hello-webapi
dotnet new webapi
dotnet sln add .\hello-webapi\
 

