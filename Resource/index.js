const BASE_URL = 'http://127.0.0.1:3000/';

axios.get(BASE_URL + 'api/product').then(async (response) => {
    let res = response.data.data;
    let html = "";
    for(let i = 0; i < res.length; i++) {
        html+= '<tr id="' + res[i]._id +'">';
        html+= '<th scope="row">' + (i + 1) + '</th>';
        html+= "<td>"+  res[i].name +"</td>";
        html+= "<td>"+  res[i].brand +"</td>";
        html+= "<td>"+  res[i].price +"</td>";
        html+= "<td>"+  res[i].amount +"</td>";
        html+= "<td>"+  res[i].desc +"</td>";
        html+= '<td><button onclick="update(this)" id="' + res[i]._id +'" type="button" class="btn btn-primary">Update</button><br><br>';
        html+= '<button onclick="remove(this)" id="' + res[i]._id +'" type="button" class="btn btn-danger">Delete</button></td>';
        html+= "</tr>";
    }
    $(html).appendTo($("#tbody-table"));
}).catch((err) => {
    $("<h1>no data found</h1>").appendTo($("#tbody-table"));
});

function remove(html)
{
    let confrimed = confirm("Do you want to delete this product");
    if(confrimed)
    {
        let id = html.id;
        let payLoad = {
            id:id
        }
        axios({
            method: 'delete',
            url: BASE_URL + 'api/product',
            data: {
                id:id
            }
        }).then((response) => {
            document.getElementById(id).remove();
        })
        .catch((err) => {
    
        })
    }
    else console.log('no');
}

function update(html)
{
    window.location.href =  BASE_URL + "update?id=" + html.id;
}