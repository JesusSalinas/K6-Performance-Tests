import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS, URL } from '../utils/Constants'

fixture('Test Scenario: Logout from SwagLabs application.')
    .page(URL)

test
    .before(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
        await ProductsPage.validateProductsPage()
    })
    ('TC#3: Logout from products page.', async t => {
        await LoginPage.logoutApplication()
        await LoginPage.validateLoginPage()
})