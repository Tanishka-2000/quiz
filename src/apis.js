const categories = {
    'history': 23,
    'sports': 21,
    'space': 17
}

export function getQuiz(cat){
    const url = 'https://opentdb.com/api.php?amount=20&category='+ categories[cat] +'&difficulty=easy&type=multiple';
    try{
       return fetch(url)
       .then(response => response.json())
       .then(data => data.results)
    }catch(e){
        throw new Error(e)
    }
}