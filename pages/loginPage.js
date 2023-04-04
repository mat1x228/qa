const { I } = inject();
const locators = require('../utils/locators');

const { login_username, login_password, login_btn , messages} = locators.login;

module.exports = {
  url:'https://www.saucedemo.com/',

  async login(username, password) {
    try {
      I.fillField(login_username, username);
      I.fillField(login_password, password);
      I.click(login_btn);
    } catch (error) {
      console.error('Error during login:', error);
    }
  },
//вынести : будет повторяться в других тестах 
  async verifyPageUrl(url) {
    const fullUrl = /^https?:\/\//i.test(url) ? url : `http://${url}`;
    await I.seeInCurrentUrl(fullUrl);
  },

  async grabMessageText() {
    const textMessage = I.grabTextFrom(messages.error);
    return textMessage;
  }
};