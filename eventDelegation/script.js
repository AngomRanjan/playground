const itemCardTemplate = (item) => {
  return `<input type="checkbox" />
  <input type="text" name=${item} value=${item} readonly />      
  <button type="button" data-action="edit">edit</button>
  <button type="button" data-action="remove">remove</button>`  
}

const addItem = (val) => {
  const list = document.getElementById('item-list');
  const li = document.createElement('li');
  li.innerHTML = itemCardTemplate(val);
  list.appendChild(li);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target
  addItem(form.elements['new-item'].value);
  form.reset();
};
const removeItem = (node) => node.remove();
const toggleAction = (btnEditUpdate, newAction) => {
  btnEditUpdate.dataset.action = newAction;
  btnEditUpdate.textContent = newAction;
};
const editItem = (node) => {
  node.removeAttribute('readonly');
  node.focus();
};
const updateItem = (node) => {
  node.setAttribute('readonly', true);
  node.previousElementSibling.focus();
};
const handleListClick = (e) => {
  const action = e.target.dataset.action;
  switch (action) {
    case 'remove':
      removeItem(e.target.parentNode);
      break;
    case 'edit':
      editItem(e.target.previousElementSibling);
      toggleAction(e.target, 'update');
      break;
    case 'update':
      editItem(e.target.previousElementSibling);
      toggleAction(e.target, 'edit');
      break;

    default:
      // no action
      break;
  }
};

const handleChange = (e) => {
  if (e.target.type !== 'text') return;
  const k = e.target.defaultValue;
  console.log('change', e.target, k, e);
  e.target.defaultValue = e.target.value;
  e.target.setAttribute('readonly', true);
};

const onKeyUp = (e) => {
  if (e.target.type !== 'text' || e.target.readonly) return;
  if (e.key === 'Enter') e.target.previousElementSibling.focus();
  if (e.key === 'Escape') {
    e.target.value = e.target.defaultValue;
    e.target.previousElementSibling.focus();
  };

};

document.getElementById('add-item').addEventListener('submit', handleSubmit);
document.getElementById('item-list').addEventListener('click', handleListClick);
document.getElementById('item-list').addEventListener('change', handleChange);
document.getElementById('item-list').addEventListener('keyup', onKeyUp);
