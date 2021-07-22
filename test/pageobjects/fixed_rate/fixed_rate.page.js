import Page from '../page';

class FixedRate extends Page {

    get contractNameInput () { return $('input[name="name"]') }
    get jobTitleInput () { return $('input[name="jobTitle"]') }
    get seniorityDropdown () { return  $('.select__control')  }
    get seniorOption() { return  $('#react-select-2-option-3')  }
    get seniorityInput() { return  $('input[name="seniorityLevel"]') }
    get calendar() { return  $('div[name="effectiveDate"]') }
    get yesterdayCalendarButton() { return $("//*[contains(@class,'react-calendar__tile--active')]/preceding-sibling::*[1]") }
    get scopeInput() { return $("[name='scope']") }
    get nextButton() { return $("button=next") }
    get rateInput() { return $("[name='rate']") }
    get currencySelector() { return $("[data-qa=currency-select] input[type=text]") }
    get recurrenceSelector() { return $("[data-qa=cycle-select] input[type=text]")}
    get specialClauseButton() { return $("[data-qa=special-clause-card] button") }
    get specialClauseInput() { return $("[data-qa=special-clause-card] textarea") }
    get taxResidenceInput() { return $("[data-qa=contractor-tax-residence] input") }
    get taxProvinceInput() { return $("[data-qa=contractor-tax-residence-province] input") }
    get createContractButton() { return $("button=create contract") }

    async fillContractSection(contractName, jobTitle, scope) {
        await (await this.contractNameInput).setValue(contractName);
        await (await this.jobTitleInput).setValue(jobTitle);
        await (await this.seniorityDropdown).click();
        await (await this.seniorOption).click();
        await (await this.calendar).click();
        await (await this.yesterdayCalendarButton).click();
        await (await this.scopeInput).setValue(scope + "\n");
        await (await this.nextButton).click();
    }

    async fillRateSection(currency, recurrence, value) {
        await (await this.rateInput).setValue(value);
        await (await this.currencySelector).setValue(currency + "\n");
        await (await this.recurrenceSelector).setValue(recurrence + "\n");
        await (await this.nextButton).click();
        await (await this.nextButton).click();
    }

    async fillSpecialClause(clause) {
        await (await this.specialClauseButton).click();
        await (await this.specialClauseInput).setValue(clause);
        await (await this.nextButton).click();
    }

    async fillContractorsResidence(residence, province) {
        await (await this.taxResidenceInput).setValue(residence + "\n");
        await (await this.taxProvinceInput).setValue(province + "\n");
    }

    async createContract() {
        await (await this.createContractButton).click();
    }
}

export default new FixedRate();


