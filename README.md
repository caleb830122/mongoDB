# mongoDB 
A mongoDB that runs in a Docker container
To run it in the detach mode, use the command below

```
docker compose up -d   
```
Then find the ID of the instance of the mongoDB
```
docker exec -it <instanceID> bash        
```

In the bash terminal of your docker container, use this command
```
mongo mongodb://localhost:27017 -u rootuser -p rootpass
```

