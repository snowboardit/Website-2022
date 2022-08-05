/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/
require('dotenv').config()
import { config } from '@keystone-6/core';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';

const DB_URL = process.env.DB_URL || ""
const {
  ASSET_BASE_URL: baseUrl = `http://localhost:${process.env.PORT || '5000'}`,
} = process.env;


export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: `${DB_URL}`,
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data, // check that someone has session data before letting them see the Admin UI.
    },
    lists,
    storage: {
      local_images: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `${baseUrl}/imagesDB${path}`,
        serverRoute: {
          path: '/imagesDB',
        },
        storagePath: 'public/imagesDB',
      },
    },
    session,
    server: {
      cors: {
        origin: 'http://localhost:3000',
      },
    },

  })
);
