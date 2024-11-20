import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SauceDemo } from '../../code/sauceDemo/sauceDemo'

const sauceDemo: SauceDemo = new SauceDemo()

Given('I visit the Sauce Demo page', () => {
    sauceDemo.visitSauceDemo()
});

When('I log in', () => {
    sauceDemo.login()
});

Then('I should see the home page', () => {
    sauceDemo.assertHomePage()
});
