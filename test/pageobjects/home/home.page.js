import Page from '../page';

class HomePage extends Page {

    get greeting () { return $('h1[data-qa="heading"]') }
    get btnCreateContract () { return $('a[href="/create"] > li') }
    get onboardingPopup () { return $('div[data-qa="-popup"]') }
    get btnClose () { return $('button[data-qa="close"]') }

    async closePopup() {
        (await this.onboardingPopup).isDisplayed;
        await (await this.btnClose).click();
    }

    async goToContractPage() {
        await (await this.btnCreateContract).click();
    }
}

export default new HomePage();