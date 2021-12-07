import {Selector, t} from 'testcafe'

class SuccessPurchasePage {
    constructor(){
        this.appLogo = Selector('.app_logo')
        this.titlePage = Selector('div#contents_wrapper > .subheader')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.shoppingCartIcon = Selector('svg[role="img"]')
        this.successMessage = Selector('div#checkout_complete_container > .complete-header')
        this.note = Selector('div#checkout_complete_container > .complete-text')
        this.brandIcon = Selector('div#checkout_complete_container > img[alt="Pony Express"]')
    }

    async validateSuccessPurchasePage() {
        await t
            .expect(this.titlePage.textContent).eql('Finish')
            .expect(this.successMessage.textContent).eql('THANK YOU FOR YOUR ORDER')
            .expect(this.note.textContent).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
            .expect(this.appLogo.exists).ok()
            .expect(this.menuButton.exists).ok()
            .expect(this.shoppingCartIcon.exists).ok()
            .expect(this.brandIcon.exists).ok()
    }
}
export default new SuccessPurchasePage