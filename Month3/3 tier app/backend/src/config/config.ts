const isProd = process.env.NODE_ENV == "production";
const isDockerCompose = process.env.NODE_ENV == "docker-compose";

let mongoUrl;
if (isProd) mongoUrl = process.env.MONGO_URL;
else if (isDockerCompose) mongoUrl = "mongodb://mongo:27017/messages";
else mongoUrl = "mongodb://localhost:27017/messages";

export default {
  mongoUrl,
  mongoUsername: isProd ? process.env.MONGO_USERNAME : "test",
  mongoPassword: isProd ? process.env.MONGO_PASSWORD : "test",
};