
class todo{


    add()
    {
        
        
        let input = document.querySelector('.todo-input');
        if(input.value.length==0)
        {
            return;
        }
        
       
        
        let obj={};
      
        let priority=document.querySelector('.priority').value
        
       
            for(let item=0;item<todos.length;item++)
            {
                
                if(todos[item].todo.toLowerCase()===input.value.toLowerCase())
                {
                    
                    return;
                }
            }
            
        
       
       
        obj.todo =input.value;
        obj.priority = priority; 

        todos.push(obj)
       
        this.adjust();
        
       
    }
    
    adjust()
    {
        
        
        
        todos.sort((a,b) => (b.priority - a.priority))
        let doc =  document.querySelector('.todo-list');
        doc.innerHTML=''
        todos.forEach((item,index) =>
        {
            let div=document.createElement('div');
            div.classList.add('todo-content');
            let h1 = document.createElement('h1');
            let h2 = document.createElement('h2');
            h1.innerHTML = item.todo;
            let button = document.createElement('button');
            button.innerHTML = 'Delete';
            button.classList.add('delete');
             if(item.priority=='3')
            {
                h2.innerHTML="Priority : High";
                div.classList.add('three');
            }
            else if(item.priority=='2')
            {
                h2.innerHTML=" Priority : Medium";
                div.classList.add('two');
            }
            else{
                h2.innerHTML="Priority : Low";
                div.classList.add('one');
            }  
            button.addEventListener('click', (event) =>
            {
            let target =  event.target.closest('div')
            todos.splice(index,1)
            target.remove();
            
            

            })
            div.append(h1,h2, button);
            doc.appendChild(div)
        })

    }

}

var todos =[];

let Todo = new todo();
document.querySelector('.create').addEventListener('click', () =>
    {
        Todo.add();
    })
  
document.querySelector('.todo-input').addEventListener('keyup',(event)=>
{
    if(event.key=='Enter')
    {
        Todo.add();
    }
} )



   
