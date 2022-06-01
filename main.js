let listItems = document.body.querySelector('.todo-list');
function renderList (item) {
    let container = document.createElement('div');
    let check = document.createElement('input');
    check.setAttribute('type','checkbox');
    let text = document.createElement('label');
    text.textContent = item.todo;
    check.checked = item.completed;
    listItems.appendChild(container)
    container.appendChild(check);
    container.appendChild(text);
}

    fetch('https://dummyjson.com/todos')
    .then (function (response) {
        return response.json();
    })
    .then (function (data){
        let feed = data.todos;
        feed.forEach(function (list){
            renderList(list);
        })
    });

