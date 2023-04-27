// don't forget to install npm i axios
axios.get('https://pokeapi.co/api/v2/pokemon/mewtwo')
    .then(res =>{
        console.log(res)
    })
    .catch(err=>console.log(err))