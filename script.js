
const todo = [{name:'Read Four Books Today',
               dueDate: '2026-02-13'},

               {name:'Play Tennis',
                dueDate: '2026-02-13'
               }];

function renderTodo() {
let todoListHTML = '';

for(let i = 0; i < todo.length; i++) {

  const todoListObject = todo[i]
  const {name, dueDate} = todoListObject
  const html = `<div>${name}</div>
                <div>${dueDate}</div>
                    <button onclick="
                    todo.splice(${i}, 1)
                    renderTodo();
                    " class= "delete-button">Delete</button>
                    
                    `

  todoListHTML +=html;
  document.querySelector('.js-div').innerHTML = todoListHTML;
 console.log(html)
}

}

 function addTodoElement() {

  const dateElement = document.querySelector('.js-input-date')
  const dueDate = dateElement.value
    
const todoElement = document.querySelector('.js-input')
  const name = todoElement.value

    todo.push({name, 
                dueDate} )

      todoElement.value = '';
      renderTodo()

 }

 renderTodo();
 
 function enterKey(event) {
        if(event.key === 'Enter') {
          addTodoElement()
        }

        }

        