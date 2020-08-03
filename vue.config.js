module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? 'https://mikatalk.github.io/resume-michael-mika-iriarte/'
    : `/`,

  filenameHashing: false,

  // pluginOptions: {
  //   prerenderSpa: {
  //     registry: undefined,
  //     renderRoutes: [
  //       '/'
  //     ],
  //     useRenderEvent: true,
  //     headless: true,
  //     onlyProduction: true
  //   }
  // }
}
