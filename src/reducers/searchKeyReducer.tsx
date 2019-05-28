export default (state = "", action: any) => {
    switch (action.type) {
        case 'SEARCH_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
};