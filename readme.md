# Setting up a dev server
The Dev server build
```
docker-compose -f docker-compose-dev.yml up --build -d
```
Temporary solution : 

To develop live now you can turn off wiewer container and start project with 
```
npm run dev
```

# Build for produciton

as of now the dis folder is not served, we work on it to enable it

now we can buid as follow 

docker login localhost:8083

docker build -t localhost:8083/viewer:last .

docker push localhost:8083/viewer:last 

then run
```
docker-compose up --build -d
```