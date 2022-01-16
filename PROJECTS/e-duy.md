export CR_PAT=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
echo $CR_PAT | docker login ghcr.io -u tien.luckyfor --password-stdin

https://github.com/CloudOpsby/oriico-fe/pkgs/container/oriico-fe
docker pull ghcr.io/cloudopsby/oriico-fe:dockerfile-dac87d17-1641699653

docker run -d -p 5000:80 --name e-duy ghcr.io/cloudopsby/oriico-fe:dockerfile-dac87d17-1641699653

 curl ifconfig.io
docker exec -it eb17418aac98 bash
