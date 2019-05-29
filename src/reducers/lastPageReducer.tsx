export default (state = 1, action: any) => {
    switch (action.type) {
        case 'COUNT_PAGES':
            return action.payload;
        default:
            return state;
    }
};