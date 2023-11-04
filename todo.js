const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//{
 //   name: 'dinner',
 //   dueDate:'2020-12-22'
//}, {
//    name:'wash',
 //   dueDate:'2023-12-23'
//}
function rendertodolist() {
    let todoListHTML='';

    for(let i=0;i<todoList.length;i++) {
        const todoObject = todoList[i];
        const { title,work,dueDate } = todoObject;
        
        const html = `
        <p>
        ${title} <br> ${dueDate} <br> ${work}  <br>
        <button onclick="
        todoList.splice(${i},1);
        localStorage.setItem('todoList', JSON.stringify(todoList));

        rendertodolist();">
        Delete</button>
        </p>
        `;
        todoListHTML+=html;
    }

document.querySelector('.js-todo-list').innerHTML=
todoListHTML;
}

function addtodo() {

    const inputElement= document.querySelector('.js-name-input');
    const title= inputElement.value;
    const inputElement1= document.querySelector('.js-name-input1');
    const work= inputElement1.value;

    const dateInputElement= document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value;

    todoList.push({
        title: title,
        work:work,
        dueDate: dueDate
});
localStorage.setItem('todoList', JSON.stringify(todoList));
    inputElement.value='';
    inputElement1.value='';  //to clear box after clicking add
    rendertodolist();
}