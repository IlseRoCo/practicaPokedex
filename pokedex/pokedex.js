const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./imags/none.png");
            pokeNombre(" ");
            pokeId(" ");
            pokeTipo(" ");
            pokeStat(" ");
            pokeMove(" ");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeNam = data.species.name;
            pokeNombre(pokeNam);
            console.log(pokeNam);

            let tipos = [data.types]            
            pokeTipo(tipos);

            let pokeIden = data.id;
            pokeId(pokeIden);
            console.log(pokeIden);

            let stat = [data.stats]            
            pokeStat(stat);

            let move = [data.moves]            
            pokeMove(move);
            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNombre = (nombre) => {
    document.getElementById('pokeNam').innerHTML = nombre.toUpperCase();
}

const pokeId = (pokId) => {
    if (pokId != " ") {
        document.getElementById('pokeIden').innerHTML = `No. ${pokId}`;
    }
    else{
        document.getElementById('pokeIden').innerHTML = " ";
    }
}

const pokeTipo = (tipos) => {
    document.getElementById('tiPoke').innerHTML = " ";
    if (tipos != " ") {
    tipos.forEach(function (elemento) {
        elemento.forEach(function (tipo, indice) {
            document.getElementById('tiPoke').innerHTML += '<p class="pTipoTxt">' + tipo.type.name.toUpperCase() + '</p>';
        }
        )
    })
    }
    else {
        document.getElementById('tiPoke').innerHTML += '<p class="pTipoTxt">' + "NO ENCONTRADO" + '</p>';
    }
}

const pokeStat = (stat) => {
    document.getElementById('statPoke').innerHTML = " ";
    document.getElementById('statPoke').innerHTML += '<p >ESTADÍSTICAS</p>';
    if (stat != " ") {        
        stat.forEach(function (elemento) {
        elemento.forEach(function (estat, indice) {
            console.log(JSON.stringify(estat));
            //document.getElementById('statPoke').innerHTML += '<th>' + estat.stat.name.toUpperCase() + '</th>' +'<th>' + estat.base_stat + '</th>';
            document.getElementById('statPoke').innerHTML += '<table > <tr> <th class="thStat1">' + estat.stat.name.toUpperCase() + '</th> <th class="thStat2">' + estat.base_stat + '</th> </tr></table>';
            })
        })
    }
    else{
        document.getElementById('statPoke').innerHTML = " ";
        document.getElementById('statPoke').innerHTML += '<p >ESTADÍSTICAS</p>';
    }
}

const pokeMove = (move) => {
    document.getElementById('movePoke').innerHTML = " ";
    document.getElementById('movePoke').innerHTML += '<p >' + 'MOVIMIENTOS' + '</p>';
    if (move != " ") {   
        move.forEach(function (elemento) {
            elemento.forEach(function (movi, indice) {
                //document.getElementById('movePoke').innerHTML += '<p >' + movi.move.name.toUpperCase() + '</p>';
                document.getElementById('movePoke').innerHTML += '<table><tr><th class="thStat3">' + movi.move.name.toUpperCase() + '</th></tr></table>';
            }
            )
        })
    }
    else{
        document.getElementById('movePoke').innerHTML = " ";
        document.getElementById('movePoke').innerHTML += '<p >' + 'MOVIMIENTOS' + '</p>';
    }
}
