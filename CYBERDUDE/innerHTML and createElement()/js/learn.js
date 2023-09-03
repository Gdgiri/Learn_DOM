// createElement()
const main=document.getElementById("main");

function createAlertviaDOM(msg){
   
    const div= document.createElement("div");
    const textNode=document.createTextNode(msg);

    div.append(textNode);
    div.className="alert";
    main.prepend(div);
    div.style.color="red";
}

createAlertviaDOM("hello i was created");

// innerHTML
function createAlertviatemplate(msg){
    const template=`
<div class="alert">
${msg }
</div>
`;

main.innerHTML+= template;
}

createAlertviatemplate("hello i have been created ")



