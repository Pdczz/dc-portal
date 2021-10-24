export const IS_DEV = process.env.NODE_ENV !== 'production'
export const BASE_URL = IS_DEV ? 'http://127.0.0.1:9090/api' : 'http://pdczz.com/api'

export const GITHUB_CLIENT_ID = IS_DEV ? 'fe0755eb905bb2cadfb5' : 'fe0755eb905bb2cadfb5'
