function createalertviaDOM(msg){
    const main=document.getElementById("main");

    const div=document.createElement("div");
    
    const textNode= document.createTextNode(msg);
    
    // this is also creating div 
    
    // project performent for we not use innerText
    
    
    
    // div.textContent="successfull! Food is updated"
    
    // assigning the className
    div.className="alert";
    
    
    //append type
    div.append(textNode)
    
    // console.log(div);
    
    main.prepend(div);
    
    
}


createalertviaDOM("successfull! Food is updated" );