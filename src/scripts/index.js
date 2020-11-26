import '../styles/index.scss';


const baseUrl = "https://st-johnsuni-api.herokuapp.com/api/";

const searchq  = document.querySelectorAll('input[type=checkbox]');
const filter = document.querySelector('#filter-btn');
const qcode = document.querySelector('#qcode').value;
const qtitle= document.querySelector('#qtitle').value ;
const qname= document.querySelector('#qname').value ;
const qlevel = document.querySelector('#qlevel').value;
const card = document.querySelector('.card');





filter.addEventListener('click',()=>{

    for (let list of searchq) {
        if(list.checked === true){
            filterBy(list.value);

        }         


      }


    });




  


  function filterBy(v){
    
  if(v === 'qcode'){
  
    filterByCode();
    
  }
  else if(v === 'qtitle'){
    filterByTitle();
    }

 else if(v === 'qlevel'){
     filterByLevel();
        }

else if(v === 'qname'){
        filterByInstructor();
            
        }
    }

    function ui(m){

       card.innerHTML= `
       <h2 class="card-title">${m.title}</h2>
       <div class="card-body">
       <ul>
        <li>Course code: ${m.course_code} </li>
        <li>Level: ${m.course_level}</li>
        <li>Instructor:${m.instructor} </li>
       </ul>
       </div>     
        
        `;


    }

    function filterByCode(){
        fetch(baseUrl+`by_course_code/${qcode}`)
        .then(m=>{
            return m.json();
        })
        .then(m=>{
            m.forEach(m=>{ 
                ui(m);
               
            });
        });

    }


    function filterByTitle(){
        //console.log('qqqq',v);
      fetch(baseUrl+`by_title/${qtitle}`)
      .then(m=>{
          return m.json();
      })
      .then(m=>{
        m.forEach(m=>{ 
            ui(m);
           
        });
      });

  }

  function filterByInstructor(){
    fetch(baseUrl+`by_insructor/${qname}`)
    .then(m=>{
        return m.json();
    })
    .then(m=>{
        ui(m);
    });

}


function filterByLevel(v){
  fetch(baseUrl+`by_level/${qlevel}`)
  .then(m=>{
      return m.json();
  })
  .then(m=>{
      ui(m);
  });

}



