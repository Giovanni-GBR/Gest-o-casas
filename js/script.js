let totalCasas = 0
let casasAlugadas = 0
let casasLivres = 0
let faltaPagar = 0

const casas = [
    {
        id: 1,
        nome: "Casa 01",
        morador: "miguel",
        aluguel: 300,
        status: "pago",
        situacao: "Oculpado"
    },
    {
        id: 2,
        nome: "Casa 02",
        morador: "lucas",
        aluguel: 300,
        status: "atrasado",
        situacao: "Oculpado"
    },
    {
        id: 3,
        nome: "Casa 03",
        morador: "felipe",
        aluguel: 300,
        status: "pendente",
        situacao: "Oculpado"
    },
    {
        id: 4,
        nome: "Casa 04",
        morador: "",
        aluguel: 300,
        status: "pago",
        situacao: "Disponivel"
    }
]

function atualizarResumo() {
    const listaResumo = document.querySelector(".lista-resumo")
    let total = document.querySelector(".total")
    let alugadas = document.querySelector(".alugadas")
    let livres = document.querySelector(".livres")
    let atrasadas = document.querySelector(".atrasadas")

    
    total.textContent = casas.length
    alugadas.textContent = casas.filter(casa => casa.situacao === "Oculpado").length
    livres.textContent = casas.filter(casa => casa.situacao === "Disponivel").length
    atrasadas.textContent = casas.filter(casa => casa.status === "atrasado").length
}

function atualizarCasas() {
    const listaCasas = document.querySelector(".lista-casas")
    
    casas.forEach(casa => {
        let li = document.createElement("li")
        li.classList.add("card-casa")

        li.innerHTML = `<div class="sec-head-card ">
                            <i class="fa-solid fa-house-chimney fa-2xl icons ${casa.status}"></i>
                            <span class="head-status">
                                <p class="status-disp">${casa.situacao}</p>
                                <p class="status-pag ${casa.status}">${casa.status}</p>
                            </span>
                        </div>
                        <div class="sec-info-card">
                            <h4>${casa.nome}</h4>
                            <p><i class="fa-regular fa-user"></i> ${casa.morador}</p>
                            <button class="info-det">Ver detalhes</button>
                            <button class="info-att">Atualizar info</button>
                        </div>`
        listaCasas.appendChild(li)
    })
}
atualizarCasas()
atualizarResumo()