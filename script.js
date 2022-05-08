let calcbtns = document.querySelectorAll('.calcbtns');
let expression ='';
Array.from(calcbtns).forEach((btn)=>{
    //we separated all the buttons with .calcbuts using Array.from() and now applying the code below on the Buttons
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            expression = eval(expression);
            document.querySelector('input').value = expression;
        }
        else if(e.target.innerHTML == 'C'){
            expression = '';
            document.querySelector('#result').value = expression;
        }
        else if(e.target.innerHTML == '%'){
            expression ='('+ expression + '/100)*';
            document.querySelector('#result').value = expression;
        }
        else if(e.target.innerHTML =='x^2'){
            expression = '(' + expression + '*' + expression + ')';
            document.querySelector('#result').value = expression;
        }
        else if(e.target.innerHTML == '+/-'){
            expression ='-' + expression;
            document.querySelector('#result').value = expression;
        }
        else{
            expression += e.target.innerHTML;
            document.querySelector('#result').value = expression;
        }
    })
})
