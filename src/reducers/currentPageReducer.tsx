export default (state:number = 1, action: any) => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return action.payload;
        default:
            return state;
    }
};