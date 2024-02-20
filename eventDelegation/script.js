const itemCardTemplate = (item) => {
  return `<li><input type="checkbox" />
  <input type="text" name=${item} value=${item} readonly />      
  <button type="button" data-action="edit"></button>
  <button type="button" data-action="update"></button>
  <button type="button" data-action="remove"></button></li>`  
}

const addItem = (e) => {
  e.preventDefault();
  const list = document.getElementById('item-list');
  const li = itemCardTemplate(e.target.elements['new-item'].value);
  list.insertAdjacentHTML('beforeend', li);
  e.target.reset();
};

const editItem = (textInput) => {
  textInput.readOnly = false;
  textInput.focus();
};

const updateItem = (textInput) => {
  textInput.readOnly = true;
};

const onInputTextBlur = (e) => {
  if (e.target.type === 'text' && !e.target.readOnly) 
  updateItem(e.target);
};

const onInputTextKeyDown = (e) => {
    if (e.key === 'Enter' && !e.target.readOnly) 
      e.target.previousElementSibling.focus();
};

const handleClick = (e) => {
  const action = e.target.dataset.action;
  const listItem = e.target.closest('li');
  if (action === 'edit')
    editItem(listItem.children[1]);
  else if (action === 'remove')
    listItem.remove();
};

document.getElementById('add-item').addEventListener('submit', addItem);
document.getElementById('item-list').addEventListener('click', handleClick);
document.getElementById('item-list').addEventListener('blur', onInputTextBlur, true); // Use capture phase
document.getElementById('item-list').addEventListener('keydown', onInputTextKeyDown, true); // Use capture phase

