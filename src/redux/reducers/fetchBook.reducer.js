const fetchBook = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BOOK':
            return action.payload;
        default:
            return state;
    }
};

export default fetchBook;