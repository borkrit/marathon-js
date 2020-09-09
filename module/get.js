class getFight {
    getPokemons = async() =>{
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
        const body = await response.json();
        return body;
    }

    getPlayerPok = async() => {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const body = await response.json();
        return body;
    }

     getFight = async() => {
            const response = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=25&attackId=1&player2id=1');
            const body = await response.json();
            return body.kick;
            
        }
}

export default getFight