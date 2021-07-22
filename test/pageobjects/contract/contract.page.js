import Page from '../page';

class ContractPage extends Page {

    get title () { return $('h1[class~="semi-bold"]') }
    get btnFixedRate () { return $('a[href~="/create/fixed"]') }

    async goToFixedRatePage() {
        await (await this.btnFixedRate).click();
    }
}

export default new ContractPage();