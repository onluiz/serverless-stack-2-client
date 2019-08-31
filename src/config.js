const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-psd725a3bgmj"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://4vvz1qnjmc.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BSZ14MOj9",
    APP_CLIENT_ID: "57pe8qm3u62a9h0v4pllc0klu5",
    IDENTITY_POOL_ID: "us-east-1:44aa8188-7d5e-4c15-bb2e-7596903141a9"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1v3dkeqe79xqy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://j3ps5k1l7e.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ai3nop8he",
    APP_CLIENT_ID: "2jt69ffrnpkgmlv4qkeo200d94",
    IDENTITY_POOL_ID: "us-east-1:e271ffc1-56b1-4868-acb6-08c3800673a2"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
