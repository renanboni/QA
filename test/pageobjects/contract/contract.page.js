import Page from '../page';

class ContractPage extends Page {

    get title () { return $('h1[class~="semi-bold"]') }
    get btnFixedRate () { return $('a[href~="/create/fixed"]') }

}

export default new ContractPage();