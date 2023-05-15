let fila = []
let opcao = ''

do {
    let pacientes = "";
    for (let i = 0; i < fila.length; i++) {
        pacientes += `${(i + 1)}º - ${fila[i]}\n`
    }

    opcao = prompt(
        `Pacientes na fila:
        \n${pacientes}
        \nO que deseja fazer?
        \n1. Novo paciente
        \n2. Consultar paciente
        \n3. Sair
        `
    )

    switch (opcao) {
        case '1':
            const novoPaciente = prompt('Digite o nome do paciente')
            fila.push(novoPaciente)
            break;
        case '2':
            const constultarPaciente = fila.shift()
                if (constultarPaciente) {
                    alert(`O paciente consultado é: ${constultarPaciente}`) 
                } else {
                    alert('A fila está vazia')
                }
            break;
        case '3':
            alert('Encerrando a lista de pacientes');
            break;
        default: 
            alert('Opção inválida')
    }

} while (opcao !==  "3")
