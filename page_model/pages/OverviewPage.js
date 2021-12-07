import {Selector, t} from 'testcafe'

class OverviewPage {
    constructor(){
        this.appLogo = Selector('.app_logo')
        this.titlePage = Selector('div#contents_wrapper > .subheader')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.shoppingCartIcon = Selector('svg[role="img"]')
        this.quantityLabel = Selector('.cart_quantity_label')
        this.desciptionLabel = Selector('.cart_desc_label')
        this.cancelButton = Selector('.btn_secondary.cart_cancel_link')
        this.finishButton = Selector('.btn_action.cart_button')
        this.paymentInformationLabel = Selector('.summary_info > div:nth-of-type(1)')
        this.paymentInformationValue = Selector('.summary_info > div:nth-of-type(2)')
        this.shippingInformationLabel = Selector('.summary_info > div:nth-of-type(3)')
        this.shippingInformationValue = Selector('.summary_info > div:nth-of-type(4)')
        this.subTotalLabel = Selector('.summary_subtotal_label')
        this.taxLabel = Selector('.summary_tax_label')
        this.totalLabel = Selector('.summary_total_label')
        this.cartList = Selector('.cart_list')
    }

    async validateOverviewPage() {
        await t
            .expect(this.titlePage.textContent).eql('Checkout: Overview')
            .expect(this.quantityLabel.textContent).eql('QTY')
            .expect(this.desciptionLabel.textContent).eql('DESCRIPTION')
            .expect(this.cancelButton.textContent).eql('CANCEL')
            .expect(this.finishButton.textContent).eql('FINISH')
            .expect(this.appLogo.exists).ok()
            .expect(this.menuButton.exists).ok()
            .expect(this.shoppingCartIcon.exists).ok()
            .expect(this.paymentInformationLabel.textContent).eql('Payment Information:')
            .expect(this.paymentInformationValue.exists).ok()
            .expect(this.shippingInformationLabel.textContent).eql('Shipping Information:')
            .expect(this.shippingInformationValue.exists).ok()
            .expect(this.subTotalLabel.exists).ok()
            .expect(this.taxLabel.exists).ok()
            .expect(this.totalLabel.exists).ok()
    }

    async finishPurchase() {
        await t
            .click(this.finishButton)
    }

    async validateItemsInOverview(quantity) {
        var value = await this.cartList.child('.cart_item').count
        await t.expect(value).eql(quantity)
    }
}
export default new OverviewPage