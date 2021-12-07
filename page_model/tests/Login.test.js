import ProductsPage from '../pages/ProductsPage'
import { lockedOutUser, standardUser, invalidUser } from '../utils/Roles'

fixture('Test Scenario: Login into SwagLabs application.')

test('TC#0: Login with a locked out user.', async t => {
    await t.useRole(lockedOutUser)
})

test('TC#1: Login with a valid user.', async t => {
    await t.useRole(standardUser)
    await ProductsPage.validateProductsPage()
})

test('TC#2: Login with an invalid user.', async t => {
    await t.useRole(invalidUser)
})