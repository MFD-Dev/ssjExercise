let isCelebrity = true;
let validTicket = true;
let bribe = 9001;

if ((isCelebrity == true && validTicket == true) || bribe > 9000){
    document.getElementById('show').innerHTML = 'No concert for you';
    console.log('Hello')
} else {
    document.getElementById('show').innerHTML = 'It/s here'
    console.log('Else')
}

document.getElementById('show').innerHTML = 'Hi'