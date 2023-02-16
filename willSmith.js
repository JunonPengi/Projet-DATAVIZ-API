fetch("https://api.themoviedb.org/3/person/1136406?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US")    
.then(reponse => reponse.json())                        //je convertis ma réponse en json
.then(reponse2 => {   //je récup ma reponse en console log pour l'afficher

let name = reponse2.name;
let birth = [];
birth.push(reponse2.birthday);
birth.push(reponse2.place_of_birth);
let bio = reponse2.biography;
let image = reponse2.profile_path;


console.log(reponse2)
document.getElementById("birth").innerHTML = birth;
document.getElementById("name").innerHTML = name;
document.getElementById("bio").innerHTML = bio;
document.getElementById("image").src = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + image;
})

/*btn.onclick = () => {
    fetch("https://api.themoviedb.org/3/person/2888?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US"+champ.value)    //champ.value pour lier ce que rentre le user dans le input.
        .then(reponse => reponse.json())
        .then(data => {
            output.textContent = "";      //pour vider l'output à chaque nouvelle requête
            output.textContent = `Compte de $(data.name)`;       //lien avec la div output créée pour afficher ce qu'on recup
            const img = document.createElement("img");     //pour afficher une image, création d'une balise image
            img.src = data.avatar_url;       //et donc img aura pour source ce que je veux recup
            output.appendChild(img);
    })
}*/