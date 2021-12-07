import { Role } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS, URL } from '../utils/Constants'

export const lockedOutUser = Role(URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[1].USERNAME, CREDENTIALS.VALID_USERS[1].PASSWORD)
    await LoginPage.validateErrorMessageLockedOutUser()
}, {
        preserveUrl: true
})

export const standardUser = Role(URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
}, {
        preserveUrl: true
})

export const problemUser = Role(URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[2].USERNAME, CREDENTIALS.VALID_USERS[2].PASSWORD)
}, {
        preserveUrl: true
})

export const performanceGlitchUser = Role(URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[3].USERNAME, CREDENTIALS.VALID_USERS[3].PASSWORD)
}, {
        preserveUrl: true
})

export const invalidUser = Role(URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await LoginPage.validateErrorMessageInvalidLogin()
}, {
        preserveUrl: true
})