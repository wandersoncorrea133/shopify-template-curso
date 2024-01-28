class Test extends HTMLElement {
  constructor() {
    super();
    this.changeColor();
  }

  changeColor() {
    console.log('veio aqui');
    const divElement = this.querySelector('#ola');
    console.log('Elemento selecionado:', divElement);
    if (divElement) {
      divElement.addEventListener('click', () => {
        divElement.style.color = 'red';
      });
    } else {
      console.log('Nenhum elemento foi encontrado com o id "ola".');
    }
  }
}

customElements.define('provide-test', Test);