document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões
    var buttons = document.querySelectorAll('.button');

    // Adiciona um ouvinte de evento de clique a cada botão
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Adiciona a classe 'active' apenas ao botão clicado
            this.classList.add('active');
        });
    });
});