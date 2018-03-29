import { ADMIN, GUEST, SET_USER } from "../actions/setUser"
export default (user = GUEST, action) => {
    switch (action.type) {
        case SET_USER: {
            return action.user
        }
        default: {
            return user
        }
    }
}