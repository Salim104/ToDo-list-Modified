
//selectors
const submit = document.querySelector('.submit');
const clear = document.querySelector('.clear');
const input = document.querySelector('#item')
const add = document.querySelector('.add')
const message= document.querySelector('.message');
const para = document.querySelector('.para');
const imp = document.querySelector('.hide')



submit.addEventListener('click',function(e){
    e.preventDefault() 
    if(input.value ===""){
        setInterval(() => {
            imp.classList.add('show');
        }, 2000);

    }else{
       
        let paragraph = document.createElement('p');
        paragraph.innerText = input.value;
        add.appendChild(paragraph);
    
        let btn= document.createElement('button');
        btn.innerHTML="X";
        paragraph.appendChild(btn);
    
        btn.addEventListener('click',function(){
        paragraph.remove();
       })
    }
   

})



clear.addEventListener('click',function(e){
    e.preventDefault() 
    input.value=" ";
})