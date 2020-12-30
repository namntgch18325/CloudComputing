const BASE_URL = 'http://127.0.0.1:3000/';
function create()
{
    let payLoad = {
        name : document.getElementById('name').value,
        brand  : document.getElementById('brand').value,
        price : document.getElementById('price').value,
        amount : document.getElementById('amount').value,
        desc : document.getElementById('desc').value
    }
    axios.post(BASE_URL + 'api/product', payLoad).then((response) => {
        let confrimed = confirm("Create Successfully, Direct to Home?");
        if(confrimed)
        {
            window.location.href =  BASE_URL + "index";
        }
    }).catch((err) => {
        console.log(err);
    });
}