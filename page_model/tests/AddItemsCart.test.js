import { standardUser } from '../utils/Roles'
import ProductsPage from '../pages/ProductsPage'
import CartShoppingPage from '../pages/CartShoppingPage'
import { getRandomNumber, addMultipleItems} from '../utils/Helpers'

fixture('Test Scenario: Add items to the shopping cart.')
    .beforeEach( async t => {
        await t.useRole(standardUser)
        await ProductsPage.validateProductsPage()
    })

test('TC#4: Navigate to the Shopping car.', async t => {
    await ProductsPage.navigateToShoppingCart()
    await CartShoppingPage.validateShoppingCartPage()
})

test('TC#5: Add a single item to the shopping cart.', async t => {
    var amountItems = await ProductsPage.getAmountItemsFromInventory()
    var singleItem = await getRandomNumber(amountItems)
    await ProductsPage.addSingleItem(singleItem)
    await ProductsPage.navigateToShoppingCart()
    await CartShoppingPage.validateShoppingCartPage()
    await CartShoppingPage.validateItemsInCartShopping(1)
})

test('TC#6: Add multiple items to the shopping cart.', async t => {
    var amountItems = await ProductsPage.getAmountItemsFromInventory()
    var itemsQuantity = await getRandomNumber(amountItems)
    await addMultipleItems(itemsQuantity)
    await ProductsPage.navigateToShoppingCart()
    await CartShoppingPage.validateShoppingCartPage()
    await CartShoppingPage.validateItemsInCartShopping(itemsQuantity)
})