const birds = document.querySelector('.birds')
const server = 'http://localhost:3000/birds'
console.log("HEYYYYY BIRDS")

fetch(server)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        data.forEach(function(object) {
        let birdCard = document.createElement('li')
        birds.appendChild(birdCard)
        birdCard.outerHTML = `
            <div class="row">
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                            <img src="${object.image}">
                            <span class="card-title">${object.commonName}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <p>${object.fact}</p>
                            <p>Scientific Name: ${object.scientificName}
                        </div>
                    </div>
                </div>
            </div>`})

    })
    .catch(function(err) {
        console.log(err.message)
    })