// Variaveis

let key = "@Mauro"
let task = document.querySelector(".tarefa")
let des = document.querySelector(".description")
let lista =[]

// Click botão Enter

    var input = document.querySelector(".tarefa");
        input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.querySelector(".btn").click();
        }
    });

// Validação e chamada de Logica

    function save() {

        if((task.value)=== ""){
            alert("Por favor digite algo")
        }else {
            executar ()
            salvarStorege()
    }}

// Criação de Lista

    function executar(){

        let novaTarefa = task.value;

        lista.push(novaTarefa); // Adiciona o valor da tarefa ao array lista// Limpa campo de lista
        console.log("Tarefa salva:", novaTarefa);
        task.value = ""
    
    
        let novaLinha = document.createElement("li"); // Cria um novo elemento h2
        novaLinha.textContent = novaTarefa; // Define o texto do novo h2 como o valor da tarefa
        des.appendChild(novaLinha);// Adiciona o novo h2 ao elemento .description

        let novoBotao = document.createElement("a"); // Cria um novo elemento
        novoBotao.setAttribute("href","#");
        novaLinha.appendChild(novoBotao)

        let botaoText = document.createTextNode("  Excluir"); //
        novoBotao.appendChild(botaoText)

        let posicao = lista.indexOf(novaTarefa)

        novoBotao.setAttribute("onclick", `deleteTarefa(${posicao})`)
    }

//Deletar Dados

    function deleteTarefa(posicao) {
        console.log(`Deletou item ${posicao}.`);
        lista.splice(posicao, 1);
        atualizarLista();
    }

//Atualizar Dados
    
    function atualizarLista() {
        des.innerHTML = ""; // Limpa a lista antes de recriar os itens
        lista.map((tarefa, index) => {
            let novaLinha = document.createElement("li");
            novaLinha.textContent = tarefa;
    
            let novoBotao = document.createElement("a");
            novoBotao.setAttribute("href", "#");
            novoBotao.textContent = "Excluir";
            novoBotao.setAttribute("onclick", `deleteTarefa(${index})`);
    
            novaLinha.appendChild(novoBotao);
            des.appendChild(novaLinha);
            salvarStorege()
            
        });

        
    }

// Salvar dados LocalStorege

    function salvarStorege(){
        localStorage.setItem(key,JSON.stringify(lista))
    }




