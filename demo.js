 //selecting input
        var input=document.getElementById("input")
        var container=document.getElementById("list-container")
        let todos=[]//array
        function update()
        {
            if(input.value ===""){
                alert("please Enter a task");
                return;
            }
            todos.push(input.value)
            console.log(todos)
            var item=document.createElement("li")//create li tag
            item.className='li';
            item.textContent=input.value
            //complete
            item.addEventListener('click', () => {
                item.classList.toggle('complete')
            });
            //delete btn
            var btn=document.createElement("button")
            btn.textContent='Delete';
            btn.className="del-btn";
            btn.onclick =(e)=>{
                item.remove()
                alert(" delete!")
            }
            item.appendChild(btn)
            container.append(item)
            input.value=""   
        }