
function main () {
    const add_button = document.getElementById('track-button');
    add_button.addEventListener('click', track_n_del);
  }
  
  
  function track_n_del(e){
    e.preventDefault();
    

    const miles = document.getElementById('input-miles').value;
    const day = document.getElementById('input-day').value;
    const date = document.getElementById('input-date').value;
      
      
    document.getElementById('input-miles').value = '';
    document.getElementById('input-day').value = '';
    document.getElementById('input-date').value = '';
    if (miles ==="" || date==="" || day==="")
    {
      // if the values in the field are empty
      alert('Please enter values in all the fields');
    } 
    else {
        // if they have some value we need to manipulate them
      const list=document.getElementById('miles-list');
      const newitem = document.createElement('li');
      const newcard = document.createElement('div');
      const newcardbody = document.createElement("div");
      const miles_h3 = document.createElement("h3");
      const day_h4 = document.createElement("h4");
      const date_h4 = document.createElement("h4");
      const close_icon = document.createElement("BUTTON");
      close_icon.innerHTML="remove"
      
      miles_h3.append(document.createTextNode(miles));
      day_h4.append(document.createTextNode(day));
      date_h4.append(document.createTextNode(date));
      
      newcard.appendChild(close_icon)
      newcardbody.appendChild(miles_h3);
      newcardbody.appendChild(day_h4);
      newcardbody.appendChild(date_h4);
      newcard.appendChild(newcardbody);
      newitem.appendChild(newcard);
      list.appendChild(newitem);
      
      
      
      close_icon.classList.add('text-right')
      newitem.classList.add('list-group-item');
      
      newcardbody.classList.add('card-body');
      
        // to remove the card
      close_icon.addEventListener('click',()=>{
        while (newitem.firstChild) {
          newitem.removeChild(newitem.firstChild);
        }
        list.removeChild(newitem);
      })
    }

    
  }
  
  
  window.onload = main;
