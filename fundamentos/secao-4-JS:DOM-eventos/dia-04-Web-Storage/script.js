const pageBody = document.querySelector('body');
const btnColor = document.querySelector('#background-color');
const btnColorLetter = document.querySelector('#font-color');

const atualiza = () => {
    localStorage.setItem('body', pageBody.style.backgroundColor);
}


const colorBody = () => {
    
    btnColor.addEventListener('click', (clk) => {
        const target = clk.target.innerText;
        
        (target === 'white') ? pageBody.style.backgroundColor = 'white' : '';
        (target === 'black') ? pageBody.style.backgroundColor  = 'black' : '';
        (target === 'green') ? pageBody.style.backgroundColor = 'green' : '';
        (target === 'blue') ? pageBody.style.backgroundColor = 'blue' : '';
        (target === 'yellow') ? pageBody.style.backgroundColor = 'yellow' : '';
        atualiza();
        
    })  
}

const colorLetter = () => {

        btnColorLetter.addEventListener('click', (clk) => {
            const target = clk.target.innerText;

            target === 'black' ? pageBody.style.color = 'black' : '';
            target === 'red' ? pageBody.style.color = 'red' : '';
            target === 'white' ? pageBody.style.color = 'white' : '';
        })
}




colorBody();
colorLetter();