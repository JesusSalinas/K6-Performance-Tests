import {Selector, t} from 'testcafe'

class ProductsPage {
    constructor(){
        this.appLogo = Selector('.app_logo')
        this.titlePage = Selector('div#inventory_filter_container > .product_label')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.sorterButton = Selector('div#inventory_filter_container > .product_sort_container')
        this.shoppingCartIcon = Selector('svg[role="img"]')
        this.logoutLink = Selector('a#logout_sidebar_link')
        this.inventoryList = Selector('div#inventory_container > .inventory_list')
    }

    async validateProductsPage() {
        await t
            .expect(this.appLogo.exists).ok()
            .expect(this.titlePage.textContent).eql('Products')
            .expect(this.sorterButton.exists).ok()
            .expect(this.shoppingCartIcon.exists).ok()
            .expect(this.menuButton.exists).ok()
    }

    async navigateToShoppingCart() {
        await t
            .click(this.shoppingCartIcon)
    }

    async getAmountItemsFromInventory() {
        var value = await this.inventoryList.child('.inventory_item').count
        return value
    }

    async addSingleItem(item) {
        await t
            .click(Selector(`div:nth-of-type(${item}) > .pricebar > .btn_inventory.btn_primary`))
    }
}
export default new ProductsPage