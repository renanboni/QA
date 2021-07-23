import LoginPage from  '../pageobjects/login/login.page';
import HomePage from '../pageobjects/home/home.page';
import ContractPage from '../pageobjects/contract/contract.page';
import FixedRate from '../pageobjects/fixed_rate/fixed_rate.page';
import ContractSummary from '../pageobjects/contract_summary/contract_summary.page';
import DateUtils from '../utils/date_utils';

describe('Login', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('test1@gmail.com', 'Stef@ny2021');
        await HomePage.closePopup();
    });

    it('should create a fixed rate', async () => {
        await HomePage.goToContractPage();
        await ContractPage.goToFixedRatePage();
        await FixedRate.fillContractSection("Contract Name", "Contract Type", "Scope");
        await FixedRate.fillRateSection("GBP", "Week", 1000);
        await FixedRate.fillSpecialClause("Clause");
        await FixedRate.fillContractorsResidence("United States", "Colorado");
        await FixedRate.createContract();

        await expect(ContractSummary.title).toHaveText("Contract Name");
        await expect(ContractSummary.jobTitle).toHaveText("Contract Type");
        await expect(ContractSummary.type).toHaveText("Fixed rate");
        await expect(ContractSummary.scope).toHaveText("Scope");
        await expect(ContractSummary.seniorityLevel).toHaveText("Senior (Individual Contributor Level 3)");
        await expect(ContractSummary.specialClause).toHaveText("Clause");
        await expect(ContractSummary.country).toHaveText("Colorado (United States)");
        await expect(ContractSummary.rate).toHaveTextContaining("£1,000");
        await expect(ContractSummary.recurrence).toHaveText("Per week");
        await expect(ContractSummary.date).toHaveText(DateUtils.getYesterday());
    });
});
