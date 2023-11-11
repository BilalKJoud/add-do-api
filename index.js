// fetch('http://localhost:3000/')
//       .then(response => response.json())
//       .then(json =>{
//         var ul = document.getElementById('loulou') 
//         json.forEach(element => { 
//             var li = document.createElement('li');
//             li.innerHTML = element.name;
//             li.style.listStyle = "none";
//             li.style.display = "inline-block";
           

//             var lid = document.createElement('li');
//             lid.innerHTML = element.id;
//             lid.style.listStyle = "none";
            
//             var img = document.createElement('img');
//             img.src = element.image;
//             img.style.width = "100px";
//             img.style.display = "block";
//             img.style.marginTop = "10px";
//             img.style.borderRadius = "10px";
//             img.style.borderRadius = "10px";
            
//             li.appendChild(img);
            
//             ul.appendChild(lid)
//             ul.appendChild(li);
            
           
//         });
//               console.log(json)
//          }) 
       
   function addstudent()
   {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var txtname = document.getElementById('txt_name')
    var txtid = document.getElementById('txt1_id')
    var txtimage = document.getElementById('txt2_image')
    var raw = JSON.stringify({
       "id": txtid.value,
      "name": txtname.value,
      "Image":txtimage.value
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/addstudents", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
   }     