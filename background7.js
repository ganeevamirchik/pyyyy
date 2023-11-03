document.querySelector('button').onclick = myClick;

function myClick(){
   //console.log('work');
    //get Input
    //input - value
    let a = document.querySelector('.i-1').value;
    document.querySelector('.out').innerHTML = a;
}