import {Selector, t} from 'testcafe'

class CartShoppingPage {
    constructor(){
        this.appLogo = Selector('.app_logo')
        this.titlePage = Selector('div#contents_wrapper > .subheader')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.shoppingCartIcon = Selector('svg[role="img"]')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.continueShoppingButton = Selector('.cart_footer .btn_secondary')
        this.quantityLabel = Selector('.cart_quantity_label')
        this.desciptionLabel = Selector('.cart_desc_label')
        this.cartList = Selector('.cart_list')
    }

    async validateShoppingCartPage() {
        await t
            .expect(this.titlePage.textContent).eql('Your Cart')
            .expect(this.checkoutButton.textContent).eql('CHECKOUT')
            .expect(this.continueShoppingButton.textContent).eql('Continue Shopping')
            .expect(this.quantityLabel.textContent).eql('QTY')
            .expect(this.desciptionLabel.textContent).eql('DESCRIPTION')
            .expect(this.appLogo.exists).ok()
            .expect(this.menuButton.exists).ok()
            .expect(this.shoppingCartIcon.exists).ok()
    }

    async navigateToCheckoutFirstStep() {
        await t
            .click(this.checkoutButton)
    }

    async validateItemsInCartShopping(quantity) {
        var value = await this.cartList.child('.cart_item').count
        await t.expect(value).eql(quantity)
    }
}
export default new CartShoppingPage