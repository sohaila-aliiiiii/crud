
var pname= document.getElementById("name")
var purl= document.getElementById("url")
var list=[];
if(localStorage.getItem('bookmark list') !=null)
    {
list=JSON.parse(localStorage.getItem('bookmark list'))

displayall()
    }

function add()
{
    var bookmark ={
        name:pname.value,
        url:purl.value
    }
    if(purl.value===''||purl.value===null)
        {
            alert("enter url")
        }
        else
        {
       
    list.push(bookmark)
    localStorage.setItem("bookmark list",JSON.stringify(list))
        
    display()
        
    clear()
        }
        

    console.log(list)
        
}
function clear()
{
    pname.value=null;
    purl.value=null;
}
function display()
{
    var lastindex= list.length-1;
    var contaner=
    `
    <tr>
                 <td>${lastindex+1}</td>
                 <td>${list[lastindex].name}</td>
             
                 <td>
                 <button  onclick="Visitsite(${lastindex})"  class="btn btn-danger btn-sm">visite</button>

                 </d>
                 <td>
                     <button onclick="deletesite(${lastindex})" class="btn btn-warning btn-sm">delete</button>
                 </td>
    
            </tr>
    `
    document.getElementById("tbody").innerHTML+=contaner;
}
function displayall()
{
  var contaner=``;
  for(var i=0; i<list.length;i++)
    {
        contaner+=`
        <tr>
                     <td>${i+1}</td>
                     <td>${list[i].name}</td>
                 
                     <td>
                     <button  onclick="Visitsite(${i})"  class="btn btn-danger btn-sm">visite</button>

                     </d>
                     <td>
                         <button onclick="deletesite(${i})" class="btn btn-warning btn-sm">delete</button>
                     </td>
        
                </tr>
        `
    }
    document.getElementById("tbody").innerHTML=contaner;

}
function deletesite(index)
{
    list.splice(index, 1)
    localStorage.setItem("bookmark list",JSON.stringify(list))
    displayall();
}
function Visitsite(indx)
{


    var httpcheek=/^http:\/\/www\.|https:\/\/|https:\/\//
    if(httpcheek.test(list[indx].url))
        {
            open(list[indx].url);
        }
         else
         {
             console.log(`https://${list[indx].url}`);
             open(`https://${list[indx].url}`);
         }
    
    
}
