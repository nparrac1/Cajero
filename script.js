let total = 0;

function agregarProducto(element) {
    const productoPrecio = parseInt(element.getAttribute('data-precio'));
    total += productoPrecio;
    document.getElementById('total').innerText = `Total: $${total}`;
}

function calcularCambio() {
    const pagoInput = document.getElementById('pago');
    const pago = parseInt(pagoInput.value);
    const cambio = pago - total;

    if (cambio >= 0) {
        document.getElementById('cambio').innerText = `Cambio: $${cambio}`;
    } else {
        document.getElementById('cambio').innerText = 'Pago insuficiente.';
    }

    // Reiniciar total y pago
    total = 0;
    document.getElementById('total').innerText = `Total: $${total}`;
    pagoInput.value = '';
}
