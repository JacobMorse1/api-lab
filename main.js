const getResBtn = document.querySelector('button')

function getResidents() {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(function(res) {
        // console.log(res.data['results'][0]['residents'])
        let resAld = res.data['results'][0]['residents']
        for(let i = 0; i < resAld.length; i++) {
            axios.get(resAld[i]).then(function(res) {
                // console.log(res.data)
                let newH2 = document.createElement('h2')
                newH2.textContent = res.data['name']
                // console.log(newH2)

                document.body.appendChild(newH2)

            })
        }
    })
}

getResBtn.addEventListener('click', getResidents)