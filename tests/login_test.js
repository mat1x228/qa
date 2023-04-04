const assert = require('assert');
const { I } = inject();
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const users = require('../data/users');


Feature('Login')

Before(() => {
  I.amOnPage('https://www.saucedemo.com/');
});

Scenario('Login with valid data', async () => {
  const username = users.valid.name;
  const password = users.valid.password;

  LoginPage.login(username, password);

  const productsTitle = await I.grabTextFrom("span.title");
  
  LoginPage.verifyPageUrl(InventoryPage.url);
  assert.equal(productsTitle, 'Products');
}).tag('@login').tag('@valid');

Scenario('Login with invalid data', async () => {
  const username = users.invalid.name;
  const password = users.invalid.password;

  LoginPage.login(username, password);

  const errorMessage = await LoginPage.grabMessageText();

  LoginPage.verifyPageUrl(LoginPage.url);
  assert.equal(errorMessage, 'Epic sadface: Username and password do not match any user in this service');
}).tag('@login').tag('@invalid');

Scenario('Empty log&pass', async () => {
  const username = users.empty.name;
  const password = users.empty.password;

  LoginPage.login(username, password);

  const errorMessage = await LoginPage.grabMessageText();

  LoginPage.verifyPageUrl(LoginPage.url);

  assert.equal(errorMessage, 'Epic sadface: Username is required');
}).tag('@login').tag('@empty');



