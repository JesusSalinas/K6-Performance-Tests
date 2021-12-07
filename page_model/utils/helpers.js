import ProductsPage from '../pages/ProductsPage'

export async function getRandomNumber(number) {
    const value = await Math.floor(Math.random() * number)
    return value + 1
}

export async function addMultipleItems(quantity) {
    for (var i = 1; i <= quantity; i++) {
        await ProductsPage.addSingleItem(i)
    }
}