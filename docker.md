# remove all containers
docker-compose down
docker system prune -a

# list all images
docker images -a

# view log container
docker ps
docker logs 117a4debc918
docker logs 977d2052ec2b --tail=10 --follow 

# restart container
docker ps
docker restart 117a4debc918

# rebuid image
docker-compose build --no-cache --force-rm 'laravel-horizon' 