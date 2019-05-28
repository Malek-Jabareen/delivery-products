export default (state = "", action: any) => {
    switch (action.type) {
        case 'SORT_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
};