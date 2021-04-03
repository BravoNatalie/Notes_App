const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51IZO6eKH70FWCYg5L9AJrDSynmo6ITdPgSs5IGlk679Zx5Xko7Bg0YDhcdU5jVDCNjmRLMisBF5umIj8KXk0DNur00ZclZX4WK",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-content",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://lcvqes8nth.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_36FIkFcTX",
    APP_CLIENT_ID: "4bgpt8607bjejdntq31bskpg2h",
    IDENTITY_POOL_ID: "us-east-2:16e54fac-1df4-4709-a76a-aa519756fe6b",
  },
};

export default config;