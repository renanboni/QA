import LoginPage from  '../pageobjects/login/login.page';
import HomePage from '../pageobjects/home/home.page';

describe('Create a fixed rate contract', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('stefany.hf9@gmail.com', 'Stef@ny2021');
        await HomePage.closePopup();
    });

    it('should go to the contract page', async () => {
        await HomePage.goToContractPage();
    });
});
