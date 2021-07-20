import Page from '../page';

class LoginPage extends Page {

    get inputUsername () { return $('input[name="email"]') }
    get inputPassword () { return $('input[type="password"]') }
    get btnSubmit () { return $('button[type="submit"]') }

    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
