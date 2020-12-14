const form_names = ['אני', 'אתה', 'את', 'אתם', 'אנחנו', 'הם', 'הוא', 'היא']

let results = new Map();

function root_field() {
document.getElementById('root').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^\u0627-\u063A\u0641-\u064A]{3,4}/g, '').replace(/(.{1})/g, '$1 ').trim();
});}

const replChars = s => {
  const d = {
  'F': root[0],
  '3': root[1],
  'L': root[2], 
  'a': '\u064E', //Fatha
  'e': '\u0650', //Kisra
  '0': '\u0652', //Sukun
  'u': '\u064F', //Damma
  '2':'\u0654', // Hamza Above
  'y': 'ي',
  't': 'ت',
  'U': 'و',
  'n': 'ن',
  'A': 'ا',
  'b': 'ب'
  }
  return s.replace(/F|3|L|a|e|0|u|2|y|t|U|n|A|b/g, x => d[x])
}

function ReplaceTextPast(){
root = document.getElementById("root").value.split(" ");
const forms = {
'first_singular_male': "Fa3aL0t",
'second_singular_male': "Fa3aL0t",
'second_singular_female': "Fa3aL0tey",
'second_plural': "Fa3aL0tuUA",
'first_plural': "Fa3aL0naA",
'third_plural': "Fa3aLuUA",
'third_singular_male': "Fa3aL",
'third_singular_female': "Fa30Lat"
}
Object.entries(forms).forEach(
  ([key, value]) => results.set(key,replChars(value,root))
);
tableCreate(results);
}

function ReplaceTextPresent(){
//var results = new Map();
root = document.getElementById("root").value.split(" ");
const forms = {
'first_singular_male': "baF03uL",
'second_singular_male': "batuF03uL",
'second_singular_female': "batuF03uLy",
'second_plural': "batuF03uLu",
'first_plural': "banuF03uL",
'third_plural': "bayuF03uLuU",
'third_singular_male': "bayuF03uL",
'third_singular_female': "batuF03uL"
}
Object.entries(forms).forEach(
  ([key, value]) => results.set(key,replChars(value,root))
);
tableCreate(results);
}

function ReplaceTextFuture(){
root = document.getElementById("root").value.split(" ");
const forms = {
'first_singular_male': "Aa2F03uL",
'second_singular_male': "tuF03uL",
'second_singular_female': "tuFu30Ley",
'second_plural': "tuF03uLu",
'first_plural': "nuF03uL",
'third_plural': "yuF03uLuU",
'third_singular_male': "yuF03uL",
'third_singular_female': "tuF03uL"
}
Object.entries(forms).forEach(
  ([key, value]) => results.set(key,replChars(value,root))
);
tableCreate(results);
}

function tableCreate() {
  var tbl = document.getElementById('conjugations');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 2; j++) {
        var td = document.createElement('td');
        if (j==0){
          var counter=1;
          for (const item in form_names) {
            if (i == 0 && counter == 1) td.appendChild(document.createTextNode('צורה'));
          	if (i == counter) td.appendChild(document.createTextNode(form_names[item]));
            counter++;
          }
        }
        if (j==1){
        var counter=1;
        for (let [key, value] of results.entries()) {
            if (i == 0 && counter == 1) td.appendChild(document.createTextNode('הטיה'))
 						if (i == counter) td.appendChild(document.createTextNode(value))
            counter++;
					}
        }
        tr.appendChild(td)
    }
    tbdy.appendChild(tr);
  }
  tbl.innerHTML="";
  tbl.appendChild(tbdy);
}
