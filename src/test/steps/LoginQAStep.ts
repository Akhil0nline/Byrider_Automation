import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import Login from "../../pages/LoginQA";

let QALogin: Login

Given('navigate to Discover pro QA and click on QA login', async function () {
    QALogin = new Login(fixture.page);
    await QALogin.navigateToSite(data.Title);
    await QALogin.ClickLoginQA();

})

When('click on login without enter username and password', async () => {

    await QALogin.ClickLogin();

    //await QALogin.enterUsername(data.userName);
    //await QALogin.enterPassword(data.password);

})

When('enter invalid username and password for QA login', async () => {

    await QALogin.enterUsername(data.userName);
    await QALogin.enterPassword(data.password);

})

Then('validation message for username and passsword displayed', async () => {

    await QALogin.Mandatoryfields();

})

Then('click on cancel button', async () => {

    await QALogin.ClickCancel();

})

Then('click on login button', async () => {

    await QALogin.ClickLogin();

})

Then('validation message for invalid credentials displayed', async () => {

    await QALogin.InvalidCredentials();

})