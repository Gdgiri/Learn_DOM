const foodcontainerEl=document.getElementById("food-container");

const li=document.createElement("li");

li.textContent="puli-rice";
li.className="food-item";

// append

foodcontainerEl.append(li); // store last li list

//prepend

foodcontainerEl.prepend(li); // it store first li list

// before

foodcontainerEl.before(li); // it store before li

// after

foodcontainerEl.after(li); // it store after li

//old way of doing

// old way of before
foodcontainerEl.parentNode.insertBefore(li,foodcontainerEl);

// old way of after

foodcontainerEl.parentNode.insertBefore(li,foodcontainerEl.nextSibling);

// in the above code after as no define in code so that we declare after child node to mention nextsibling