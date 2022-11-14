## Serverless notes app

Notes app implemented with serverless framework on AWS. Repo created for course [SST Guide](https://sst.dev/#preface) 

## First set up
1. Install node `brew install node` (version v19.0.1 tested)
2. Install AWS CLI `brew install awscli`
3. Configure `aws`:
4. Run `npm install`

## Useful commands

### Live lambda development

Read more [here](https://docs.sst.dev/live-lambda-development)

`npx sst start`

### Live local frontend development

In `frontend` directory run `npm start`

### Deploy stage to AWS

`sst deploy --stage stage-name`