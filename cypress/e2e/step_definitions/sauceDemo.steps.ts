import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SauceDemo } from '../../code/sauceDemo/sauceDemo'

const sauceDemo: SauceDemo = new SauceDemo()

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

Then('I should see the home page', () => {
    sauceDemo.assertHomePage()
});

Then('I should see the home page products and their prices', () => {
    sauceDemo.checkHomeProductsAndPrices();
});

Then('the cart should show the correct product {int} details', (productNumber: number) => {
    sauceDemo.assertItemIsAddedToCart(productNumber)  
});
