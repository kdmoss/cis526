/** site.js 
 * You should add your JavaScript code to this file.  
 * See the assignment description in Guide for what
 * your code needs to accomplish.
 */

let head = document.getElementById('table-categories');
let table = document.getElementById('responsive-table');

standards.forEach(function(standard) {
  
  let row = document.createElement('div');
  row.classList.add('row');
  
  for (let i = 0; i < Object.keys(standard).length - 1; i++) {
    
    let column = document.createElement('div');
    column.classList.add('col');
    row.appendChild(column);
  }  
    
  let identifier = document.createElement('p');
  identifier.innerText = standard.identifier;
  identifier.classList.add('identifier');
  row.children[0].appendChild(identifier);
  
  let subconcept = document.createElement('p');
  subconcept.innerText = standard.subconcept;
  row.children[2].append(createLabel('Subconcept'), subconcept);
  
  let statement = document.createElement('p');
  statement.innerText = standard.statement;
  statement.classList.add('statement');
  
  let description = document.createElement('p');
  description.innerText = standard.description;
  description.classList.add('description');
  
  row.children[1].append(createLabel(standard.identifier), statement, description);
  row.children[3].append(createLabel('Practices'));
  
  standard.practices.forEach(function(practice) {
    
    let text = row.children[3].innerHTML;
    let paragraph = document.createElement('p');
    
    paragraph.classList.add('practice');
    paragraph.innerText = practice;    
    
    row.children[3].appendChild(paragraph);
 });
  
  let button = document.createElement('button');
  button.classList.add('toggle-info');
  button.innerText = 'more...';
  button.addEventListener('click', () => { toggleContent(button); });
  row.appendChild(button);
  
  table.appendChild(row);
});

function createLabel(tag) {
  
  let label = document.createElement('p');
  label.classList.add('label');
  label.innerText = tag;
  return label;
}

function toggleContent(button) {
  
  let cols = button.parentNode.getElementsByClassName('col');
  let description = button.parentNode.querySelector('p.description');
  
  for (let i = 2; i < cols.length; i++) 
    cols[i].classList.toggle('block', button.innerText == 'more...');
  
  if (button.innerText == 'more...') {
    
    description.classList.add('inline-block');
    button.innerText = 'less...';
  }
  else {
    
    description.classList.remove('inline-block');
    button.innerText = 'more...';
  }
}