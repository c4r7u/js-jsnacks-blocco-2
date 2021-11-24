const invitati = [];

const nomi =["michele", "andrea", "franco", "gino", "maurizio" ]
const cognomi =["pollo", "zolfo", "pancotti", "paolo", "pasta" ]


for(i = 0; i< 3; i++){
   const nome = Math.floor(Math.random()* nomi.length);
   const cognome = Math.floor(Math.random()*cognomi.length);
 
   const nomeCompleto = nomi[nome] + " " + cognomi [cognome];
   invitati.push(nomeCompleto);
}




console.log(invitati);

 