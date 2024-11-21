import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SauceDemo } from '../../code/sauceDemo/sauceDemo'
import { Helper } from '../../code/helper/helper'
import { credentials } from '../../code/utils/credentials'

const sauceDemo: SauceDemo = new SauceDemo()
const helper: Helper = new Helper()

Given('I visit the Sauce Demo page', () => {
    sauceDemo.visitSauceDemo()
});

When('I log in', () => {
    sauceDemo.login()
});

When('I add product {int} to the cart', (productNumber: number) => {
    sauceDemo.cartIsEmpty()
    sauceDemo.addToCart(productNumber)
});

When('I order product {int}', (productNumber: number) => {
    sauceDemo.cartIsEmpty()
    sauceDemo.addToCart(productNumber)
    sauceDemo.assertItemIsAddedToCart(productNumber)
    sauceDemo.clickCheckout()
    sauceDemo.fillAdressForm()
    sauceDemo.clickContinue()
    sauceDemo.assertCheckoutReview()
    sauceDemo.clickFinish()
});

When('I mock the {string} event', (eventAlias: string) => {
    const url =
    eventAlias === 'uniqueTokenEventAlias'
      ? credentials.sauceDemoSubmitUniverseUrl
      : credentials.sauceDemoSummedEventsUrl;
    helper.mockSauceDemoEvent(url, eventAlias);
});

Then('I should see the home page', () => {
    sauceDemo.assertHomePage()
});

Then('I should see the home page products and their prices', () => {
    sauceDemo.checkHomeProductsAndPrices();
});

Then('The cart should show the correct product {int} details', (productNumber: number) => {
    sauceDemo.assertItemIsAddedToCart(productNumber)  
});

Then('The order should be successfully completed', () => {
    sauceDemo.assertOrderComplete()
});
  
Then('The events should be successfully mocked', () => {
    helper.assertSauceEventIsMocked('uniqueTokenEventAlias');
    helper.assertSauceEventIsMocked('summedTokenEventAlias');
});
  
Then('The test should fail intentionally for verification', () => {
    assert(
        false,
        'Forced failure to verify screenshot and video capture for failed test cases',
    )
});