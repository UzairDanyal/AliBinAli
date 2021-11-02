

// function (){

// }


function changeActiveBottom(args){
    console.log("change active bottom ");
    document.querySelectorAll(".bottomChange").forEach(e=>{
      if(e.classList.contains("tabbar-home-active")){
        e.classList.remove("tabbar-home-active");
      }
    });
    args.classList.add("tabbar-home-active"); 

  }



  function discountTab(args){

    document.querySelectorAll(".custom-tabs .col-33").forEach(e=>{
      e.classList.remove("active");
    });
    args.classList.add("active"); 
  }