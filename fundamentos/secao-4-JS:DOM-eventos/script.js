const corpo = document.querySelector('body');
const title = document.createElement('h1');
const main = document.createElement('main');
const section = document.createElement('section');
const paragrafo = document.createElement('p');
const leftSection = document.createElement('section');
const rightSection = document.createElement('section');
const image = document.createElement('img');
const list = document.createElement('ul');
const numeracao = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

const script = () => {
    title.innerText = 'TrybeTrip - Agência de Viagens';
    title.classList.add('title');
    main.classList.add('main-content');
    section.classList.add('center-content');
    paragrafo.innerText = `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."`;
    leftSection.classList.add('left-content');
    rightSection.classList.add('right-content')
    image.classList.add('small-image');
    image.src = 'https://picsum.photos/200';
    


    corpo.appendChild(title);
    corpo.appendChild(main);
    main.appendChild(section);
    main.appendChild(paragrafo);
    main.appendChild(leftSection);
    main.appendChild(rightSection);
    leftSection.appendChild(image);
    

    for (let index = 0; index < numeracao.length; index += 1) {
        const listItens = document.createElement('li');
        listItens.innerText = numeracao[index];
        list.appendChild(listItens);
        
    }
    rightSection.appendChild(list);

    for (let index = 0; index < 3; index += 1){
        const subTitle = document.createElement('h3');
        subTitle.classList.add('description')
        subTitle.innerText = `testa ${index}`;
        main.appendChild(subTitle);
    }

    console.log(list);
    
    

}

script();