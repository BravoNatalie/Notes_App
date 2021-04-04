<h1 align=center>
<img src="https://res.cloudinary.com/nataliebravo/image/upload/v1617569033/Notes_App_github_assets/note_app_cover_zpjm2l.png" />
</h1>

<div align="center">
  
![License](https://img.shields.io/badge/license-MIT-737CA1) 
![Node_Badge](https://img.shields.io/badge/node-14.15.4-green)
![Npm_Badge](https://img.shields.io/badge/npm-6.14.10-yellow)
![React_Badge](https://img.shields.io/badge/web-ReactJS-blue)
![Lambda_Badge](https://img.shields.io/badge/serveless-AWS%20Lambda-orange)
![S3_Bucket](https://img.shields.io/badge/storage-Amazon%20S3-569A31)
![DynamoDB](https://img.shields.io/badge/database-DynomoDB-4053D6)
[![Made by NatalieBravo](https://img.shields.io/badge/made%20by-NatalieBravo-blueviolet)](https://www.linkedin.com/in/nataliebravo/)
</div>


# Summary

- [About](#about)
- [Preview](#preview)
- [Built with](#technologies)
- [API Architecture](#api_architecture)
- [How to Use](#how-to-use)
- [License](#license)

<a id='about'/>

## :information_source: About

The :pencil:**Papier** a simple note taking app where you can pay to store your important notes.

The project was developed with the purpose of learning the serverless computing model, also known as "Functions as Service" (FaaS), and some of the technologies available in the [**Amazon AWS**](https://aws.amazon.com/) platform.


<a id='preview'/>

## :framed_picture: Preview

Check out how it looks:

<p align="center">
  <img alt="Web App"   src="https://res.cloudinary.com/nataliebravo/image/upload/v1617570403/Notes_App_github_assets/note_app_nqv0yc.gif" >
 

  <div class="row" style="display:flex">
  <div class="column" style="flex:33.33%;padding:5px;">
    <img src="https://res.cloudinary.com/nataliebravo/image/upload/v1617568653/Notes_App_github_assets/note_app_on_mobile_z5rfna.png" alt="home" style="width:100%;height:100%;">
  </div>
  <div class="column" style="flex:33.33%;padding:5px;">
    <img src="https://res.cloudinary.com/nataliebravo/image/upload/v1617568673/Notes_App_github_assets/note_app_on_mobile3_kibhvw.png" alt="login" style="width:100%;height:100%;">
  </div>
  <div class="column" style="flex:33.33%;padding:5px;">
    <img src="https://res.cloudinary.com/nataliebravo/image/upload/v1617568676/Notes_App_github_assets/note_app_on_mobile4_uhv4op.png" alt="MyNotes" style="width:100%;height:100%;">
  </div>
  <div class="column" style="flex:33.33%;padding:5px;">
    <img src="https://res.cloudinary.com/nataliebravo/image/upload/v1617568680/Notes_App_github_assets/note_app_on_mobile5_hn2e2t.png" alt="Creating a note" style="width:100%;height:100%;">
  </div>
</div>
<p />

<a id='technologies'/>

## :gear: Built With

This project was developed with the following technologies:

#### **Backend** <sub><sup>Serveless</sup></sub>
  - [AWS Lambda](https://aws.amazon.com/lambda/): for the serverless API
  - [API Gateway](https://aws.amazon.com/api-gateway/): to create, publish, maintain, monitor, and secure APIs
  - [Serveless Framework](https://www.npmjs.com/package/serverless): to deploy backend applications as independent functions
  - [Cognito](https://aws.amazon.com/cognito/): for user authentication and securing the API
  - [DynamoDB](https://aws.amazon.com/dynamodb/): for the database
  - [Amazon S3](https://aws.amazon.com/s3/): for hosting the app and file uploads
  - [Stripe](https://stripe.com/docs/api): for processing credit card payments
  - [AWS SDK](https://aws.amazon.com/pt/sdk-for-javascript/): for facilitate access to the AWS Services
  - [Seed](https://seed.run/): for automating Serverless deployments
  - [Sentry](https://sentry.io/): for error reporting
 

#### **Frontend** <sub><sup>React</sup></sub>
  - [React](https://pt-br.reactjs.org/): for the single page app
  - [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom): for routing
  - [React Bootstrap](https://react-bootstrap.github.io/): for the UI kit
  - [Context API](https://reactjs.org/docs/context.html): provides a way to pass data through the component tree without having to pass props down manually at every level
  - [Jest Dom](https://testing-library.com/docs/ecosystem-jest-dom/): for unit tests
  - [AWS Amplify](https://aws.amazon.com/pt/amplify/): for easily connect to the backend
  - [React Stripe](https://github.com/stripe/react-stripe-js): for accepting credit card payments in React
  - [React Icons](https://react-icons.netlify.com/#/): for include popular icons in our project
  - [Netlify](https://netlify.com/): for automating React deployments

<a id='api_architecture' />

## :information_source: API Architecture

First, we have the **Cognito User Pool** that is going to store all users and help sign in and sign them up. Once a user has been authenticated, he/she is verified with the **Cognito Identity Pool**, and then assigned to an IAM role. This role limits what the user has access to in the AWS account. So in summary, an authenticated user has access to two resources:
  * Files in the S3 bucket that are inside a folder with their federated identity id as the name of the folder.
  * The APIs we deployed using API Gateway.

We also have the **API Gateway** that handles any requests are done to our endpoints by sending them to the respective **Lambda** function. Since our **DynamoDB** database is not exposed publicly, it is only invoked by the Lambda functions. Finally, we use an **S3 bucket** to help our users upload files as attachments for their notes directly.


<p align="center">
  <img alt="Backend Architecture"src="https://res.cloudinary.com/nataliebravo/image/upload/v1617558730/Notes_App_github_assets/api_architecture_wlnmje.png">
<p />


<a id='how-to-use'/>

## :joystick: How to Use 

[Under Construction]


<!-- 
### Requirements

To run the application you'll need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
* [Expo](https://expo.io/learn)
* Clone the repository:
  * ```$ git clone https://github.com/BravoNatalie/Ecoleta.git ```

### Backend

In order o run the server on your machine, you'll need to change the ip address configuration.<br/> 
Create a **.env** file on the root of the [server/](https://github.com/BravoNatalie/Ecoleta/tree/master/server) folder and set an enviromental variable as the following:

```dotenv
APP_URL = http://192.168.1.31:3333
```

Now go to Ecoleta folder and run:

```bash
$ cd server

# install the dependencies
$ yarn install

# create the database
$ npm run knex:migrate
$ npm run knex:seed

# run api
$ yarn start
```

### Frontend

In order o run the web app on your machine, you'll need to change the ip address configuration.<br/> 
Create a **.env** file on the root of the [web/](https://github.com/BravoNatalie/Ecoleta/tree/master/web) folder and set a enviromental variable as the following:


```dotenv
REACT_APP_API_URL = http://localhost:3333
```

Now go to Ecoleta folder and run:


```bash
$ cd web

# install the dependencies
$ npm install

# run web app
$ npm start
``` -->


<a id='license'/>

## :page_with_curl: License

This project is under the **MIT license**. See the [LICENSE](https://github.com/BravoNatalie/Notes_App/blob/main/LICENSE) for more information.

## :mailbox_with_mail: Get in touch!

<p align="center">
<a href="https://www.linkedin.com/in/nataliebravo/" target="_blank" >
  <img alt="Linkedin - Natalie Bravo" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>
<a href="mailto:natalie.bravo@ice.ufjf.br" target="_blank" >
  <img alt="Email - Natalie Bravo" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 
<br/>
  Made with :coffee: and ❤️ by <b>Natalie Bravo</b>.
<p/>
