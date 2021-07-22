import Page from '../page';

class ContractSummary extends Page {

    get title() { return $("h1") }
    get type() { return $("[data-qa=contract-type]") }
    get jobTitle() { return $("[data-qa=job-title]") }
    get seniorityLevel() { return $("[data-qa=seniority-level]") }
    get rate() { return $("[data-qa=rate]") }
    get recurrence() { return $("[data-qa=rate] div") }
    get scope() { return $("[data-qa=dpa-row-undefined-value]") }
    get specialClause() { return $("//div[@data-qa='dpa-row-special-clause-value']/div[2]") }
    get country() { return $("[data-qa=contractors-country]") }
    get date() { return $("[data-qa=contractors-start-date]") }

}

export default new ContractSummary();