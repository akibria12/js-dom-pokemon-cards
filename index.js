
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// select the <ul> for placing pokemon cards
const cardsList = document.querySelector('ul');




for (i=0; i <= data.length-1; i++) {
//   // create the HTML elements as defined in the template
  const li = document.createElement('li')
  li.setAttribute('class', 'card')
  cardsList.appendChild(li)

  const h2 = document.createElement('h2');
  h2.innerText = data[i].name
  li.appendChild(h2)


// ensure I put the right attribute values: class, src, width
  const img = document.createElement('img');
  img.setAttribute('class', 'card--img')
  img.setAttribute('width', '256')
  img.src = data[i].sprites.other['official-artwork'].front_default
  li.appendChild(img)

  
const skills = document.createElement('ul')
skills.setAttribute( 'class', 'card--text')
li.appendChild(skills)

for (j = 0; j < data[i].stats.length; j++) {
  const skillLevels = document.createElement('li')
  const name = data[i].stats[j].stat.name
  const base_stat = data[i].stats[j].base_stat
  skillLevels.innerText = `${name}: ${base_stat}`
  skills.appendChild(skillLevels)}
}
