# NextJS-Hasura web service

- To start service, use `docker-compose run`. It will start on `http://localhost:3000/`
- Json file with init tails data is located at `web_app/data/tails.json`. Change it to see changes on request.

### /backend folder 
Hasura dockerfile, migrations and metadata (actions and types)

### /web_app folder
NextJS simple project with 1 handle to acquire the tails 

