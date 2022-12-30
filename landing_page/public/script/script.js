
var coll = document.getElementsByClassName("card");

function removeall()
{
    for( i = 0; i <coll.length; i++)
    {
        if(  coll[i].classList.contains("card--active") )
        {
            coll[i].classList.remove("card--active");
        }
    }
}
    
for( i = 0; i <coll.length; i++)
    { 
      
      coll[i].addEventListener("click",function()
    {

        
              if(  this.classList.contains("card--active") )
              {
                this.classList.remove("card--active");
    
            }
            else
            {
                removeall();
                this.classList.add("card--active");
            }
            
        
    })
    }

    // for(const btn of coll)
    // {
    //     btn.addEventListener("click",function()
    //     {
    //         if(btn.classList.contains("card--active"))
    //         {   
    //             btn.classList.remove("card--active");
    //         }else
    //         {             
    //             btn.classList.add("card--active");
    //         }
    //     })
    // }

