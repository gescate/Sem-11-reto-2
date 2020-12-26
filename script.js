
    
document.querySelector("button").onclick = function (event) {
    let abc = []
    event.preventDefault()
    const task = document.querySelector('.js_task');

    let node = document.createElement("article")
            node.innerHTML =  `<hr>
            <div class="task">
            <div class="icon">
                <i class="far fa-check-circle" id="check"></i>
                <h2 class="abc">${task.value}</h2>
            </div>
            <div class = "trash">
            <i class="far fa-trash-alt"></i>
        </div>
      `
      

        clear = function () {
            document.querySelector("form").reset()
            return false
        }
        clear()
                 
    

        node.querySelector(".fa-trash-alt").onclick = function () {
            node.remove()
        }   
        
        document.querySelector(".list").appendChild(node)
        
        document.querySelector(".icon").onclick = function() { 
            document.getElementById("check").classList.toggle("new");
                              
        }
    }
    var d = new Date();
    var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre", "Octubre","Noviembre","Diciembre"];
    document.getElementById("demo").innerHTML =`${d.getDate()} de ${months[d.getMonth()]}`;
