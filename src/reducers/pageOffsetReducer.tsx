export default (state = 0, action: any) => {
    switch (action.type) {
        case 'CHANGE_OFFSET':
            return action.payload;
        default:
            return state;
    }
};