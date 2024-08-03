const cl=console.log;
 

var imgarray = [

{ title : "city", imgUrl : 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
{ title : "food and drink", imgUrl : 'https://plus.unsplash.com/premium_photo-1680117665452-bedcc8c33603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww'},
{ title : "fashion", imgUrl : 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0eWxlfGVufDB8fDB8fHww'},
{ title : "home", imgUrl : 'https://images.unsplash.com/photo-1680609989998-6183fcea718b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'},
{ title : "hand", imgUrl : 'https://images.unsplash.com/photo-1717501218424-b4724c7882bd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
{ title : "3D", imgUrl : 'https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
{ title : "heart", imgUrl : 'https://plus.unsplash.com/premium_photo-1722578617155-09b2a94f6c0a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
{ title : "hope", imgUrl : 'https://images.unsplash.com/photo-1610733376381-010db4468779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9wZXxlbnwwfHwwfHx8MA%3D%3D'},
{ title : "logistic", imgUrl : 'https://images.unsplash.com/photo-1644352744450-a391b8ce158d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9naXN0aWN8ZW58MHx8MHx8fDA%3D'},
{ title : "nature", imgUrl : 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0aW9uYWx8ZW58MHx8MHx8fDA%3D'},
{ title : "mobile", imgUrl : 'https://plus.unsplash.com/premium_photo-1661658740167-45b56833412b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlfGVufDB8fDB8fHww'},
{ title : "bottel", imgUrl : 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90dGVsfGVufDB8fDB8fHww'},

]

let imagecontainer=document.getElementById("imagecontainer");

let result='';
for(let i = 0; i<imgarray.length; i++){
    result+= `
    
    
    <div class="col-md-4 mb-4"> 
            <div class="card imgcard">
                <div class="card-header bg-dark ">
                    <h3 class="m-0 text-white text-capitalize ">${imgarray[i].title}</h3>
                </div>
                <div class="card-body">
                   <img src= "${imgarray[i].imgUrl}"
                     >
                </div>
                <div class="card-footer    d-flex justify-content-between text-right">
                    <button class="btn btn-outline-primary text-capitalize">edit</button>
                    <button class="btn btn-outline-danger text-capitalize">remove</button>

                </div>
            </div>
        </div>
    
    `
}


imagecontainer.innerHTML=result;