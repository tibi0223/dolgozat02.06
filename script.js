let furl = "https://novenyek-2ac0d-default-rtdb.europewest1.firebasedatabase.app/ingatlanok";

function getData(){
    fetch(furl+".json")
    .then( res=> res.json()).
     then((json)=>{
        data=[]
     })
    }
    