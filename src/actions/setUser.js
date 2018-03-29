export const ADMIN = "ADMIN"
export const GUEST = "GUEST"
export const SET_USER = "SET_USER"
export default (user) => ({
    type: SET_USER,
    user
})