Click on the following link to create a clone of a space with the necessary content structure already set up for the project.

https://app.storyblok.com/#!/build/192330

Now, we need to set our preview URL for our development server.

Once you duplicated the space, go to "Settings" menu of Storyblok and "Visual Editor", then change the URL in Location (default environment) to https://localhost:3010/
. Keep in mind that you need to start the "https" server in your localhost, and it should listen to the "3010" port.

You can follow this guide for setting up a dev server with HTTPS Proxy for macOs and for Windows.

Go to the "Settings" menu of the Storyblok space and retrieve the "preview" token from the Access Tokens section.

In the code base, create a .env file at the root of the project and create this environment variable

STORYBLOK_PREVIEW_TOKEN= “your preview token”

with the preview token you just retrieved.
