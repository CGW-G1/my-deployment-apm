const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "testing 123"
}

if (env) {

    switch (env.toUpperCase()) {
        case "STAGE":
            config.baseURL = "https://stage.localhost/hellothisisAuntt"
            break;
        case "PRODUCTION": {
            config.baseURL = "https://localhost.com"
        }
    }
}

export default config;