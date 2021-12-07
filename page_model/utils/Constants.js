import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USERS: [
        {
            USERNAME: process.env.USERNAME,
            PASSWORD: process.env.PASSWORD
        },
        {
            USERNAME: 'locked_out_user',
            PASSWORD: process.env.PASSWORD
        },
        {
            USERNAME: 'problem_user',
            PASSWORD: process.env.PASSWORD
        },
        {
            USERNAME: 'performance_glitch_user',
            PASSWORD: process.env.PASSWORD
        }
    ],
    INVALID_USER: {
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    }
}

export const URL = process.env.URL