

const init = {articles: []};
export default function reducer (state= init, action){
    if (action.type === 'ADD_ARTICLE'){
     return Object.assign({},state,state.articles.concat(action.payload))
    }
    return state;
}