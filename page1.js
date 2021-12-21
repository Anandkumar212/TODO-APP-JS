function addIcon(){
   
    var box=document.createElement("div");// list box
    box.setAttribute("id","new")
    box.innerText="Add new list \n \n"
    
    var input=document.createElement("input")
    input.type="text"
    input.value=""
    input.id="name"
     
    var addbutton=document.createElement("button")
    addbutton.setAttribute("id","add")
    addbutton.innerText="add"
    var closeButton=document.createElement("div")
    closeButton.setAttribute("id","close")
    closeButton.innerText="close"
    var div=document.getElementById("div")
    div.appendChild(box);
    box.appendChild(input);
    box.appendChild(addbutton);
    box.appendChild(closeButton);
    var task=document.getElementById("task")
    var icon=document.getElementById("icon")
    icon.style.filter="blur(5px)"
task.style.filter="blur(5px)";

closeButton.addEventListener("click",function()
{
   var cbtn=document.getElementById("new")
   cbtn.style.display="none";
   icon.style.filter="blur(0px)"
   task.style.filter="blur(0px)";
 
//    var j=document.createElement("div");
//     j.setAttribute("id","close")
//     j.appendChild(closeButton);
})
addbutton.addEventListener("click",function(){
    // alert("did something");
     
 
    name1=document.getElementById("name").value;
    const tempObj = {
        id:1,
        inputItem : name1,
        completed: true
      
    }
    list.push(tempObj);
    
    var x=document.createElement("div") //creating card
    x.setAttribute("class","newbox")

    var div =document.createElement("button")//button ,div
    div.setAttribute("class","div")//input text box here to button tag
    x.appendChild(div)

    var y=document.createElement("hr")
    y.setAttribute("class","line")
    x.appendChild(y)

    var b=document.createElement("div")
    b.setAttribute("class","taskbox")
   //b.innerHTML="hi"
    x.appendChild(b)

    var z=document.createElement("div")
    z.setAttribute("class","iconbox")
    x.appendChild(z)
    
    var a=document.createElement("button")
    a.innerHTML='<i class="fas fa-plus-circle"></i>'
    // a.setAttribute("class","aicon")
    z.appendChild(a)

    var u=document.createElement("div")
    u.setAttribute("class","iconbox1")
    x.appendChild(u)

    var dbutton=document.createElement("button")
    dbutton.innerHTML  ='<i class="fas fa-trash-alt"></i>'
    u.appendChild(dbutton)
    div.innerText = list[list.length-1].inputItem;
     icon.style.filter="blur(0px)"
     task.style.filter="blur(0px)";
    var parent=document.getElementById("parent")
    parent.appendChild(x)

    var p=document.createElement("div");
    p.setAttribute("class","new1")
    p.appendChild(box);
    deleteButton();
    headButton();

    
a.addEventListener("click",function(){

    var box=document.createElement("div");
    box.setAttribute("id","new")
    box.innerText="Add new item\n \n"
    
    var input=document.createElement("input")
    input.type="text"
    input.value=""
    input.id="taskname"
     
    var plusbutton=document.createElement("button")
    plusbutton.setAttribute("id","plus")
    plusbutton.innerText="add"
    
    var closeButton=document.createElement("div")
    closeButton.setAttribute("id","close")
    closeButton.innerText="close"
    var div=document.getElementById("div")
    div.appendChild(box);
    box.appendChild(input);
    box.appendChild(addbutton);
    box.appendChild(closeButton);
    plus();
   
}) 

 function plus(){  //item to be access
    plusbutton.addEventListener("click",function(){
       
    name2=document.getElementById("taskname").value;
  
    
    const temp = {
        id:1,
        inputItem : name2,
        completed: true
      
    }
    item.push(temp);
    // var tbox=document.createElement("div")
    // b.appendChild(tbox)
    b.innerHTML=item[item.length-1].inputItem;

   })
}

function deleteButton(){
    dbutton.addEventListener("click",function(){
 //     var delbutton=document.createElement("button")
    // delbutton.innerHTML  ='<i class="fas fa-trash-alt"></i>'
    // u.appendChild(delbutton);
    var delbutton=document.createElement("div");//j
    delbutton.setAttribute("class","iconbox1")//j
    delbutton.appendChild(x);//j.//div
    var deletebox=document.getElementsByClassName("newbox")
    deletebox[0].style.display="none";
   
    })


}
function headButton(){

    div.addEventListener("click",function(){
        var newcard=document.createElement("div")
        newcard.setAttribute("id","newcard")
     var headingbox=document.createElement("div")
     headingbox.setAttribute("class","headbox")
     headingbox.innerHTML= list[list.length-1].inputItem;
     
     var backbutton=document.createElement("button")
    backbutton.setAttribute("class","bbt")//back
     backbutton.innerHTML='<i class="fas fa-arrow-circle-left"></i>' +"back"
    //  backbutton.innerText="back"

     var addsym=document.createElement("button")
     addsym.setAttribute("class","addsym")
     addsym.innerHTML='<i class="fas fa-plus-circle"></i>'



     var card1=document.createElement("div")
     card1.setAttribute("class","card1");
     
     newcard.appendChild(backbutton)
     newcard.appendChild(headingbox)
     newcard.appendChild(addsym)
      
    var container=document.getElementById("container")
     container.appendChild(newcard)


   
     x.style.display="none"
     //same code
    var m=document.createElement("div")
    m.setAttribute("class","card1")
    
    var n =document.createElement("div")//button ,div
    n.setAttribute("class","div")//input text box here to button tag
    n.innerHTML=list[list.length-1].inputItem;
    m.appendChild(n)

    var o=document.createElement("hr")
    o.setAttribute("class","line")
    m.appendChild(o)
    
    var b=document.createElement("div")
    b.setAttribute("class","taskbox")
   // b.innerHTML="hi"
    m.appendChild(b)
    // var p=document.createElement("div");
    // p.setAttribute("class","new1")
    // p.appendChild(box);
    
    var z=document.createElement("div")
    z.setAttribute("class","iconbox")
    m.appendChild(z)
    
    var a=document.createElement("button")
    a.innerHTML='<i class="fas fa-plus-circle"></i>'
    // a.setAttribute("class","aicon")
    z.appendChild(a)

    var u=document.createElement("div")
    u.setAttribute("class","iconbox1")
    m.appendChild(u)

    var dbutton=document.createElement("button")
    dbutton.innerHTML  ='<i class="fas fa-trash-alt"></i>'
    u.appendChild(dbutton)

     
    // var dummy=document.getElementById("dummy")
    // dummy.appendChild(hbutton)
     
      var main=document.getElementById("maincard")
      main.appendChild(m)
      bbutton()


      function bbutton(){
        backbutton.addEventListener("click",function(){
            main.style.display="none"
            container.style.display="none"
            x.style.display="block"

        })
    //     var hbutton=document.createElement("div");//j
    // hbutton.setAttribute("class","div")//j
    //   hbutton.appendChild(m)

    }
      

    })
    
   
}
   

})
list=[];
item=[];

}




