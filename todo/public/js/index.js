// const TodoList = JSON.parse(localStorage.getItem("datalistTodo"));
// const btn_submit_add = document.querySelector("#btnSubmit");
// const modal_edit = document.querySelector(".modal_edit_newtask");
// var data;
// const modal_add = document.querySelector(".modal_add_newtask");

// function openFormAdd()
// {   
//     modal_add.classList.remove("none");
// }

// if(TodoList==null)
// {
//     data=[
//         {
//             type:"todo",
//             category:"Thêm task",
//             title:"Hãy thêm task",
//             content:"Thêm task cần thực hiện",
//             dateTime : Date(Date.now().toString()).slice(0,15),
//         },
//     ];
// }
// else
//     {
//         data = TodoList;
//     }
//     const todo = document.getElementById("listTodo");
//     const doing = document.getElementById("listDoing");
//     const finished = document.getElementById("listFinished");
//     function clear_data()
//     {
//     root.innerHTML = "";
//     }
//     function renderData(data)
//     {   
     
//         data.forEach((item,index)=>{
//             if(item.type==="todo")
//             {
//                 root = todo;
//             }
//             else if(item.type==="doing")
//             {
//                 root = doing;
//             }
//             else if(item.type==="finished")
//             {
//                 root = finished;
//             }
//             root.innerHTML = root.innerHTML + `<div class="content__item">
//             <div class="content__item-header">
//                 <div class="content__item-heading">
//                     <h2 class="content__item-category">${item.category}</h2>
//                     <h1 class="content__item-title">${item.title}</h1>
//                 </div>
//                 <div class="content__item-action">
//                     <button class="btn btn--edit" onclick="openFormEdit(${index})">
//                         <i class="fas fa-edit"></i>
//                     </button>
//                     <button class="btn btn--delete" onclick="deleteTask(${index})">
//                         <i class="fas fa-trash-alt"></i>
//                     </button>
//                 </div>
//             </div>
//             <div class="content__item-body">
//                 <p class="content__item-content">${item.content}</p>
//                 <p class="content__item-date">${item.dateTime}</p>
//             </div>`;
//     });
//     }    
    
//     window.onload = () => {
//         renderData(data);
//       };
      

//       btn_submit_add.addEventListener("click",function(e){
//         const type="todo";
//         const title = document.querySelector("#addTitle").value;
//         const category = document.querySelector("#addCategory").value;
//         const content = document.querySelector("#addContent").value;
//         const datetime = Date(Date.now().toString()).slice(0,15);
//         console.log(type,category,title,content,datetime);
//         insert_task(type,title,category,content,datetime);
//         clear_data();
//         renderData(data);
//         e.preventDefault();
        
//     });      
//     function insert_task(type,category,title,content,dateTime)
// {
    
//     const newTask = {
//         type,
//         category,
//         title,
//         content,
//         dateTime,
//     }
//     data.push(newTask);
//     localStorage.setItem("datalistTodo",JSON.stringify(data));
//     console.log(data);
// }
// function openFormEdit(index)
// {   
    
//     modal_edit.classList.remove("none");
//     btn_edit.classList.remove("none");
// }
     




const TodoList = JSON.parse(localStorage.getItem("datalistTodo"))
const btn_submit_add = document.querySelector("#btnSubmit");
const modal_edit = document.querySelector(".modal_edit_newtask");
var data;
if(TodoList==null)
{
    data=[
        {
            type:"todo",
            category:"Thêm task",
            title:"Hãy thêm task",
            content:"Thêm task cần thực hiện",
            dateTime : Date(Date.now().toString()).slice(0,15),
        },
    ];
}
    else
    {
        data = TodoList;
    }
// form add
const modal_add = document.querySelector(".modal_add_newtask");

function openFormAdd()
{   
    modal_add.classList.remove("none");
}
// function clear_data()
// {
//     root.innerHTML = "";
// }
function renderData(data)
{   
    
    data.forEach((item,index)=>{
        if(item.type==="todo")
        {
            root = todo;
        }
        else if(item.type==="doing")
        {
            root = doing;
        }
        else if(item.type==="finished")
        {
            root = finished;
        }
        root.innerHTML = root.innerHTML + `<div class="content__item">
        <div class="content__item-header">
            <div class="content__item-heading">
                <h2 class="content__item-category">${item.category}</h2>
                <h1 class="content__item-title">${item.title}</h1>
            </div>
            <div class="content__item-action">
                <button class="btn btn--edit content__item-btn" onclick="openFormEdit(${index})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn--delete content__item-btn" onclick="deleteTask(${index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div class="content__item-body">
            <p class="content__item-content">${item.content}</p>
            <p class="content__item-date"><i class="fa-regular fa-clock"></i>  &nbsp; ${item.dateTime}</p>
        </div>`;
});
}
function count()
{
    let todo = 0,doing = 0 ,finished = 0;
    data.forEach((item)=>{
        if(item.type==="todo")
        {
            todo++;
        }
        else if(item.type==="doing")
        {
            doing++;
        }
        else if(item.type==="finished")
        {
            finished++;
        }
    });
}
window.addEventListener("load", (event) => {
    renderData(data);
    localStorage.setItem("datalistTodo",JSON.stringify(data));
  });

 btn_edit = document.querySelector(".btn--edit");


btn_submit_add.addEventListener("click",function(e){
    e.preventDefault();
    const type="todo";
    const title = document.querySelector("#addTitle").value;
    const category = document.querySelector("#addCategory").value;
    const content = document.querySelector("#addContent").value;
    const datetime = Date(Date.now().toString()).slice(0,15);
    console.log(type,category,title,content,datetime);
    insert_task(type,title,category,content,datetime);
    renderData(data);
    
});

function insert_task(type,category,title,content,dateTime)
{
    
    const newTask = {
        type,
        category,
        title,
        content,
        dateTime,
    }
    data.push(newTask);
    localStorage.setItem("datalistTodo",JSON.stringify(data));
    console.log(data);
}
function openFormEdit(index)
{   
    modal_edit.classList.remove("none");
    const title = document.querySelector("#editTitle").value = data[index].title;
    const category = document.querySelector("#editCategory").value = data[index].category;
    const content = document.querySelector("#editContent").value = data[index].content;
    const datetime = Date(Date.now().toString()).slice(0, 15);
    const radio_todos = document.getElementsByClassName("radio_todo");
   
    for(let i = 0; i < radio_todos.length; i++){
        if(data[index].type === radio_todos[i].value)
        {
            radio_todos[i].checked = true;
        }
    }
    const btn_submit_edit = document.querySelector(".btn-form_edit");
    btn_submit_edit.addEventListener("click",function(e){
        data[index].title = document.querySelector("#editTitle").value;
        data[index].category = document.querySelector("#editCategory").value;
        data[index].content = document.querySelector("#editContent").value;
        data[index].dateTime = datetime;
        const radio_todos = document.getElementsByClassName("radio_todo");
        for(let i = 0; i < radio_todos.length; i++){
            if(radio_todos[i].checked === true)
            {
                data[index].type = radio_todos[i].value;
            }
        }
        localStorage.setItem("datalistTodo",JSON.stringify(data));
        clear_data();
        renderData(data);
        e.preventDefault();
    });
    
}
const btn_close_form = document.getElementsByClassName("icon_x");

for(let i = 0; i < btn_close_form.length; i++){
    btn_close_form[i].addEventListener("click", function(){
        console.log("click");
        modal_add.classList.add("none");
        modal_edit.classList.add("none");
    })
}

function deleteTask(index)
{
    data.splice(index,1);
    
    localStorage.setItem("datalistTodo",JSON.stringify(data));
    location.reload();
    renderData(data);
    
}