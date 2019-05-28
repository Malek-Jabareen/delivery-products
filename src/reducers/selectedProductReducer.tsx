export default (state = null, action: any) => {
    switch (action.type) {
        case 'SELECT_PRODUCT':
            return action.payload;
        default:
            return state;
    }
};