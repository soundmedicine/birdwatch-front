const birds = document.querySelector('.birds')
const server = 'https://wildwatcher.herokuapp.com/birds'
const button = document.querySelector('#button')

fetch(server)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data.birds)
        data.birds.forEach(function(object) {
        let birdCard = document.createElement('li')
        let rowDiv = document.createElement('div')
        let colDiv = document.createElement('div')
        let cardDiv = document.createElement('div')
        let imageDiv = document.createElement('div')
        let image = document.createElement('img')
        let title = document.createElement('span')
        let addButton = document.createElement('a')
        let add = document.createElement('i')
        let minusButton = document.createElement('a')
        let minus = document.createElement('i')
        let contentCard = document.createElement('div')
        let sciName = document.createElement('p')
        let fact = document.createElement('p')
        let sightings = document.createElement('p')

        rowDiv.setAttribute('class', 'row')
        colDiv.setAttribute('class', 'col s12 m6')
        cardDiv.setAttribute('class', 'card')
        imageDiv.setAttribute('class', 'card-image')
        image.setAttribute('src', `${object.image}`)
        image.setAttribute('class', 'responsive-img')
        title.setAttribute('class', 'card-title')
        title.innerHTML = `${object.commonName}`
        addButton.setAttribute('class', 'btn-floating halfway-fab waves-effect waves-light red')
        addButton.setAttribute('id', 'button')
        add.setAttribute('class', 'materialize-icons')
        add.innerHTML = '+'
        minusButton.setAttribute('class', 'btn-floating btn-small waves-effect waves-light orange')
        minusButton.setAttribute('id', 'button')
        minus.setAttribute('class', 'materialize-icons')
        minus.innerHTML = '-'
        contentCard.setAttribute('class', 'card-content')
        sciName.setAttribute('style', 'font-weight: bold')
        sciName.textContent = `${object.scientificName}`
        fact.textContent = `${object.fact}`
        sightings.setAttribute('class', 'sightings')
        sightings.textContent = 'Sightings: ' + `${object.sightings}`

        cardDiv.appendChild(contentCard)        
        birdCard.appendChild(rowDiv)
        rowDiv.appendChild(colDiv)       
        colDiv.appendChild(cardDiv)
        cardDiv.appendChild(imageDiv)  
               
        imageDiv.appendChild(addButton)
        imageDiv.appendChild(image)
        imageDiv.appendChild(title)

        addButton.appendChild(add)
        minusButton.appendChild(minus)
        contentCard.appendChild(sciName)        
        contentCard.appendChild(fact)
        contentCard.appendChild(sightings)
        contentCard.appendChild(minusButton)
        birds.appendChild(birdCard)

        addButton.addEventListener('click', function() {
            object.sightings += 1
            sightings.textContent = 'Sightings: ' + object.sightings
        })

        minusButton.addEventListener('click', function() {
            if (object.sightings > 0) {
                object.sightings -= 1
            } else {
                object.sightings = 0
            }
            sightings.textContent = 'Sightings: ' + object.sightings
        })

        // birdCard.outerHTML = `
        //     <div class="row">
        //         <div class="col s12 m6">
        //             <div class="card">
        //                 <div class="card-image">
        //                     <img src="${object.image}">
        //                     <span class="card-title">${object.commonName}</span>
        //                     <a class="btn-floating halfway-fab waves-effect waves-light red" id="button"><i class="material-icons">add</i></a>
        //                 </div>
        //                 <div class="card-content">
        //                     <p>${object.fact}</p>
        //                     <p>Scientific Name: ${object.scientificName}</p>
        //                     <p class="sightings">Sightings: ${object.sightings}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>`})

    })

    .catch(function(err) {
        console.log(err.message)
})
    })
    