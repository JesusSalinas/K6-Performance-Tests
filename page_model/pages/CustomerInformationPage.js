import {Selector, t} from 'testcafe'

class CustomerInformationPage {
    constructor(){
        this.appLogo = Selector('.app_logo')
        this.titlePage = Selector('div#contents_wrapper > .subheader')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.shoppingCartIcon = Selector('svg[role="img"]')
        this.firstnameField = Selector('input#first-name')
        this.lastnameField = Selector('input#last-name')
        this.zipCodeField = Selector('input#postal-code')
        this.cancelButton = Selector('.btn_secondary.cart_cancel_link')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage = Selector('h3')
    }

    async validateCheckoutFirstStep() {
        await t
            .expect(this.titlePage.textContent).eql('Checkout: Your Information')
            .expect(this.firstnameField.exists).ok()
            .expect(this.lastnameField.exists).ok()
            .expect(this.zipCodeField.exists).ok()
            .expect(this.cancelButton.textContent).eql('CANCEL')
            .expect(this.continueButton.value).eql('CONTINUE')
            .expect(this.appLogo.exists).ok()
            .expect(this.menuButton.exists).ok()
            .expect(this.shoppingCartIcon.exists).ok()
    }

    async fillInformationForm(firstName, lastName, zipCode) {
        await t
            .typeText(this.firstnameField, firstName)
            .typeText(this.lastnameField, lastName)
            .typeText(this.zipCodeField, zipCode)
    }

    async navigateToCheckoutSecondStep() {
        await t
            .click(this.continueButton)
    }

    async validateErrorMessageMissingInfo() {
        await t
            .expect(this.errorMessage.exists).ok('Error: First Name is required')
    }
}
export default new CustomerInformationPage