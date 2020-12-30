const BASE_URL = 'http://127.0.0.1:3000/';
function CurrentData()
{
    let url_string = window.location.href
    let url = new URL(url_string);
    var id = url.searchParams.get("id");
    if(id != null && id != "")
    {
        axios.get(BASE_URL + 'api/product/' + id).then((response) => {

            let result = response.data.data[0];
            console.log(result.name);
            document.getElementById('name').value = result.name;
            document.getElementById('brand').value = result.brand;
            document.getElementById('price').value = result.price;
            document.getElementById('amount').value = result.amount;
            document.getElementById('desc').value = result.desc;
        }).catch((err) => {
            console.log(err);
        });
    }   
}

function Update()
{
    let url_string = window.location.href
    let url = new URL(url_string);
    var id = url.searchParams.get("id");
    if(id != null && id != "")
    {
        let payLoad = {
            id:  id,
            name : document.getElementById('name').value,
            brand  : document.getElementById('brand').value,
            price : document.getElementById('price').value,
            amount : document.getElementById('amount').value,
            desc : document.getElementById('desc').value
        }
        axios.put(BASE_URL + 'api/product', payLoad).then((response) => {
            let confrimed = confirm("Update Successfully, Direct to Home?");
            if(confrimed)
            {
                window.location.href =  BASE_URL + "index";
            }
        }).catch((err) => {
            console.log(err);
        });
    }   
}