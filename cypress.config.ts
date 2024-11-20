import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
  viewportWidth: 2560,
  viewportHeight: 1440,
  defaultCommandTimeout: 120000,
  requestTimeout: 120000,
  responseTimeout: 1200000,
  pageLoadTimeout: 1200000,
  e2e: {
    setupNodeEvents(on, config) {
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      addCucumberPreprocessorPlugin(on, config)

      return config
    },
    supportFile: false,
    chromeWebSecurity: false,
    specPattern: '**/*.feature',
  },
})
