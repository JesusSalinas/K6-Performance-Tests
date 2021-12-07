import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('input#user-name')
        this.passwordField = Selector('input#password')
        this.loginButton = Selector('input#login-button')
        this.errorMessage = Selector('h3')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.logoutLink = Selector('a#logout_sidebar_link')
    }

    async submitLoginForm(username, password) {
        await t
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password)
            .click(this.loginButton)
    }

    async validateErrorMessageInvalidLogin() {
        await t
            .expect(this.errorMessage.textContent).eql('Epic sadface: Username and password do not match any user in this service')
    }

    async validateErrorMessageLockedOutUser() {
        await t
            .expect(this.errorMessage.textContent).eql('Epic sadface: Sorry, this user has been locked out.')
    }

    async validateLoginPage() {
        await t
            .expect(this.usernameField.exists).ok()
            .expect(this.passwordField.exists).ok()
            .expect(this.loginButton.value).eql('LOGIN')
    }


    async logoutApplication() {
        await t
            .click(this.menuButton)
            .click(this.logoutLink)
    }
}
export default new LoginPage