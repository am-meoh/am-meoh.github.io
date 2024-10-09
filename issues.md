# Netlify Deploy Issue

- in Netlify, we need to provide the `Build command` and `Publish Directory` values correctly
  - Go to `Build & Deploy` and under the `Build settings` section, click the `Configure` button
  - set the value for the `Build command` to be `npm run build`
  - set the value for the `Publish directory` to be `dist`

# Netlify Refresh or Links not working

- https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router
- https://docs.netlify.com/routing/redirects/#basic-redirects

# Auth0 LinkedIn Social Connection Issue

- Generally follow the [Auth0 LinkedIn Integration Instructions](https://manage.auth0.com/dashboard/us/dev-zm8k7g0jntagspap/marketplace/integrations/linkedin-social-connection)
- But we could end up with this error explained [here](https://community.auth0.com/t/error-your-linkedin-network-will-be-back-soon-when-using-linkedin-social-connection/136532) while trying to loign

# Social Icons and Svg

see https://tw-elements.com/docs/standard/components/social-buttons/

# Using dynamic img src for img (Vite Specific)

```
<img :src="someVariable">
```

- Doesnt work with relative paths
- https://stackoverflow.com/questions/72718199/vue-3-require-is-not-defined-for-img-src
- Need to use https://vitejs.dev/guide/assets.html#importing-asset-as-url

# Netlify Image CDN

- if we need to provide URLs for images to be used elsewhere, such as in the Auth0 Universal Login widgets,
  - we can create an invisible <img> in one of our pages and then use https://developers.netlify.com/guides/how-to-serve-optimized-images-using-netlify-image-cdn/ to generate a url similar to this `https://meoh-dev.netlify.app/.netlify/images?url=/assets/auth0-logo-ds4biniu.png`

# Dark Mode

https://www.npmjs.com/package/tw-colors
https://www.youtube.com/watch?v=7_mqThfC_yM
https://vueuse.org/core/useDark/
https://cruip.com/implementing-tailwind-css-dark-mode-toggle-with-no-flicker/
https://dev.to/mokkapps/dark-mode-switch-with-tailwind-css-nuxt-3-58dk
