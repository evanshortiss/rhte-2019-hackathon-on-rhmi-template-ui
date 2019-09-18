# RHTE 2019 RHMI Hackathon Template UI

This is a template repository used to build a UI to render results fetched from
the Junction & Parking Meters API built as part of the Solution Pattern
[here](https://github.com/evanshortiss/rhte-2019-hackathon-on-rhmi).

This repository is utilises Patternfly 4 for building the UI. It was generated
from the  on the [Patternfly React Seed](https://github.com/patternfly/patternfly-react-seed).

## Quickstart

The following steps will launch a development server that serves the frontend
on `http://localhost:9000`. This also includes endpoints to fetch meter and
junction data using `http://localhost:9000/meters` and
`http://localhost:9000/junctions`.

```bash
# ensure you have yarn installled globally
npm install yarn -g

# clone the project (if developing locally)
git clone https://github.com/evanshortiss/rhte-2019-hackathon-on-rhmi-template-ui

# navigate into the project directory
cd rhte-2019-hackathon-on-rhmi-ui

# create an environment variables file (.env)
# replace the stub Google Map API key in .env with a real one
cp .env.example .env

# create JSON files with to hold API data
# *you* will need to paste expected API responses in these
touch mock-api-server/api-data/junctions.json
touch mock-api-server/api-data/meters.json

# install dependencies
yarn

yarn build # build the project
yarn start # start the development server
```

## Development Scripts

Install development/build dependencies
`yarn`

Start the development server
`yarn start:dev`

Run a production build
`MAPS_API_KEY=$YOUR_GMAPS_API_KEY yarn build`

Run the test suite
`yarn test`

Run the linter
`yarn lint`

Run the code formatter
`yarn format`

Launch a tool to inspect the bundle size
`yarn bundle-profile:analyze`

## Deployment

You can deploy this using the Node.js s2i builder. This will invoke the
`yarn build` script, then use the `server.js` when running on OpenShift.

When performing a build the `MAPS_API_KEY` environment variable needs to
set in the build container.

## Configurations
* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./webpack.common.js)
* [Jest Config](./jest.config.js)
* [Editor Config](./.editorconfig)

## Code Quality Tools
* For accessibility compliance, we use [react-axe](https://github.com/dequelabs/react-axe)
* To keep our bundle size in check, we use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* To keep our code formatting in check, we use [prettier](https://github.com/prettier/prettier)
* To keep our code logic and test coverage in check, we use [jest](https://github.com/facebook/jest)
