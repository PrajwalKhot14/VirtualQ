let loadStatusPage =  () => {   
    window.location.href='./status.html'
}
let loadErrandsPage =  () => {   
    window.location.href='./Errands.html'
}

let backErrandsPage = () => {
    window.location.href='./Errands.html'
}

let cafePage = () => {
    let query = document.getElementById('search-query').value
    
    window.location.href = "./search_result.html?query=" + query 
    console.log(query)
}

let gasPage = () => {
    window.location.href = "./search_result.html?query=gas_station" 
    console.log(query)
}

let libraryPage = () => {
    window.location.href = "./search_result.html?query=library"
    console.log(query)
}

let loadHomePage =  () => {   
    window.location.href='./index.html'
}