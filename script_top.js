
//no adreses iegūst vārdu un ievieto to virsrakstā
let adrese = window.location.hash;
adrese = adrese.replace('#','');
adrese = decodeURI(adrese);
adrese = adrese.split(",");

let vards   = adrese[0]
let klikski = adrese[1]
document.querySelector('.virsraksts').innerHTML = 'Apsveicam '+vards+', klikšķi:'+klikski;



let topsJson = [
    {
      "id": 0,
      "vards": "Liene",
      "klase": "10b",
      "laiks": "500",
      "klikski": "35",
      "datums": "2021-11-24",
      "piezimes": ""
    },
    {
        "id": 1,
        "vards": "Jānis",
        "klase": "10b",
        "laiks": "500",
        "klikski": "35",
        "datums": "2021-11-24",
        "piezimes": ""
    },
    {
        "id": 2,
        "vards": "Jana",
        "klase": "10b",
        "laiks": "500",
        "klikski": "35",
        "datums": "2021-11-24",
        "piezimes": ""
    }
  ]



  async function iegutDatusNoApi(url)
  {
    let datiNoServera = await fetch(url);
    let datiJson = await datiNoServera.json();
    return datiJson;
  }

  
function atlasitTop()
{

  for (i = 0; i < topsJson.length; i++)
  {
      console.log(i);

      let tabula = document.querySelector(".tops");

      

      tabula.innerHTML = tabula.innerHTML+`
      <tr id="`+topsJson[i]['id']+`">
      <td> `+topsJson[i]['vards']+` </td>
      <td> `+topsJson[i]['klase']+` </td>
      <td> `+topsJson[i]['laiks']+` </td>
      <td> `+topsJson[i]['klikski']+` </td>
      <td> `+topsJson[i]['datums']+` </td>
      </tr>`;

  }

}

atlasitTop();


