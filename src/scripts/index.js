import '../styles/index.scss';


const baseUrl = "https://st-johnsuni-api.herokuapp.com/api/";

const searchq  = document.querySelectorAll('input[type=checkbox]');
const filter = document.querySelector('#filter-btn');
const qcode = document.querySelector('#qcode').value;
const qtitle= document.querySelector('#qtitle').value;
const qname= document.querySelector('#qname').value;
const qlevel = document.querySelector('#qlevel').value;



filter.addEventListener('click',()=>{

    for (let list of searchq) {
        if(list.checked === true){
            filterBy(list.value);

        }
        
       


      }

    
   


    
      
    });




  


  function filterBy(v){
    
  if(v === 'qcode'){
    console.log(qcode);
  
    filterByCode(qcode);
  }
  else if(v === 'qtitle'){
    filterByTitle(qtitle);
    }

 else if(v === 'qlevel'){
     filterByLevel(qlevel);
        }

else if(v === 'qname'){
        filterByInstructor(qname);
            
        }
    }


    function filterByCode(v){
        fetch(baseUrl+`by_course_code/${v}`)
        .then(m=>{
            return m.json();
        })
        .then(m=>{
            console.log(m);
        });

    }