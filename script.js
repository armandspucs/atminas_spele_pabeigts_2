
//no adreses iegūst vārdu un ievieto to virsrakstā
let vards = window.location.hash;
vards = vards.replace('#','');
vards = decodeURI(vards);
document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards;

let laiks = 0 //new Number()

let klikski = 0

const laukumi       = ['L10','L11','L12','L13','L14','L15','L16','L17','L18','L19','L20','L21'];
const laukumiSaturs = ['😀','🤡' ,'😺' ,'🎃','😺' ,'🤖','😀','🎃' ,'🤖' ,'👽','👽' ,'🤡'];

let atvertieLaukumi = [] //new Array()

let pedejieDivi = []



function veiktGajienu(laukums)
{
	console.log( 'klikskis uz laukuma ' + laukums )

	klikski++ //kliksi = klikski+1

	let atvertsJaunsLaukums = false;

	if( atvertieLaukumi.indexOf(laukums) == -1 )
	{ 
		atvertsJaunsLaukums = true;
		console.log("atvērts jauns laukums")
	}


	
	if( atvertsJaunsLaukums )
	{	
		document.querySelector('#'+laukums+' div').style.display="block"
		//demo hidden object gam

		pedejieDivi.push(laukums)
	}

	//TODO: pārbaudīt vai visi laukumi nav atvērti
	//      un tad tikai tālāk iet


	//atvertieLaukumi.push(laukums)
	//////atvertieLaukumi.sort()
	//atvertieLaukumi = [... new Set(atvertieLaukumi)]
	////laukumiString = laukumi.toString()
	////atvertieLaukumiString = atvertieLaukumi.toString()

	//pedejieDivi.push(laukums)

	if( pedejieDivi.length == 2 )
	{
		console.log('divi laukumi atvērti, pārbaudam vai vai vienādi')

		atverts1_index = laukumi.indexOf( pedejieDivi[0] );
		atverts2_index = laukumi.indexOf( pedejieDivi[1] );

		if( laukumiSaturs[atverts1_index] == laukumiSaturs[atverts2_index] )
		{
			console.log('atvērti divi vienādi laukumi')
			atvertieLaukumi.push(pedejieDivi[0],pedejieDivi[1])
		}
		else
		{
			console.log('pēdējie divi nebija vienādi')
			let pedejieDivi_copy = pedejieDivi
			setTimeout(function() { pasleptLaukumu(pedejieDivi_copy[0]) }, 500);
			setTimeout(function() { pasleptLaukumu(pedejieDivi_copy[1]) }, 500);

		}


		pedejieDivi = []
	}


	if( laukumi.length == atvertieLaukumi.length  )
	{
		console.log('visi laukumi atvērti')
		alert('Apsveicam! \nlaiks: \nKlikški:'+klikski+' \n\nTagad vari pievienoties TOPAM');
		document.location = 'top.html#'+vards+','+klikski
		//goto tops
	}


}


function pasleptLaukumu(laukums)
{
	document.querySelector('#'+laukums+' div').style.display='none';
}





/*
document.querySelector("#b1").addEventListener('click', function(event) {
	alert(1)
})*/

/*
document.querySelector("#b1").onclick = function()
{
	document.querySelector("#b1 div").style.visibility="visible";
}

document.querySelector("#b2").onclick = function()
{
	document.querySelector("#b2 div").style.visibility="visible";
}
*/