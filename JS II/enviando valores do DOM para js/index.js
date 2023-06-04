function register(element) {
    const username = element.children.name.value
    const password = element.children.password.value
    const confirmPassword = element.children.confirmPassword.value

    if (password === confirmPassword) {
        alert(`Usuário ${username} registrado`)
    } else {
        alert(`As senhas não conferem`)
    }
} 