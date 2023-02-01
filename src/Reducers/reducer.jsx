const initialState = {
    characters: [],
    comics: [],
}
console.log(initialState);

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SUCCES':
            return {
                ...state,
                characters: action.payload.characters
            }
        case 'GET_COMICS':
            return {
                ...state,
                comics: action.payload.comics
            }
            default:
                return state
            }
        }
        
export default reducer;