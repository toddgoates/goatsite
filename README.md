# GoatSite

This is the personal portfolio website of Todd Goates and was built with Angular 7.x. It will be hosted on AWS and is designed from the ground up to be completely serverless.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See the Deployment section below for notes on how to deploy the project to AWS.

### Prerequisites

Your machine should have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://github.com/angular/angular-cli)

### Installation

Once you have the prerequisites installed, clone this repo onto your local machine:

```
git clone https://github.com/toddgoates/goatsite.git
```

Then navigate to the local repo in your terminal and install the required packages with:

```
npm install
```

### Development server

Run `ng serve -o` to start up a dev server. This will automatically open up a tab in your browser to `http://localhost:4200/`. The app will instantly reload in your browser if you change any of the source files.

## Build

Run `ng build --prod` to build a production-ready project. The build artifacts will be stored in the `dist/` directory.

## Deployment

The easiest way to deploy the files to S3 is to use the [AWS CLI](https://aws.amazon.com/cli/). Once this has been installed on your system, you will need to set up an IAM user with access keys that has permissions to put objects on S3. To push your `dist/` directory to S3, run the following from the root of your project:

`aws s3 cp dist s3://[some bucket name]/prod --recursive --cache-control max-age=2592000`

### Cloudfront Invalidation

Because the site is set up as a Cloudfront distribution, it can take some time for the newly deployed changes to appear on the live site. If a deployment needs go into effect sooner, you can use a [Cloudfront Invalidation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html). If you choose to create an Invalidation, be aware that there is a limit to how many paths can be invalidated within a month before being charged. Also make sure that your IAM user has the necessary permissions to run the following:

`aws cloudfront create-invalidation --distribution-id [some distribution id] --paths /index.html /*.js /*.css`

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details
