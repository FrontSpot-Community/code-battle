yarn install
yarn run build
docker build -t code-battle .
docker tag code-battle:latest frontspot/code-battle:latest
docker login
docker push frontspot/code-battle:latest