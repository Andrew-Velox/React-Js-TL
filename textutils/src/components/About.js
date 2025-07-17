// import React, { useState } from 'react'

export default function About({
    mode="light",
    toogleMode,
}) {

    // const [myStyle,setMyStyle] = useState({
    //         color:'black',
    //         backgroundColor:'white',
            
    //     })

    //     const [btntext,setBtnText] = useState("Enable Dark Mode")
    //     const toggleStyle = () =>{
    //         if(myStyle.color === 'white'){
    //             setMyStyle({
    //                 color:'black',
    //                 backgroundColor:'white',
    //                 border:"1px solid black",
                    
    //             })
    //             setBtnText("Enable Dark Mode")
    //         }
    //         else{
    //             setMyStyle({
    //                 color:'white',
    //                 backgroundColor:'black',
    //                 border:"1px solid white",
                    
    //             })
    //             setBtnText("Enable Light Mode");
    //         }
    //     }
  return (
    <div className={`container mt-4 py-4 bg-${mode==="light"? "light":"dark"}`} style={{color: mode==="light"? "black":"white"}}>
        <h1 className='text-center'>About Us</h1>
        <hr />
      <div className={`accordion text-${mode==='light'?"dark":"light"}`} id="accordionExample" >
        <div className={`accordion border bg-${mode} text-${mode==='light'?"dark":"light"}`} >
            <h2 className="accordion-header">
            <button className={`accordion-button collapsed bg-${mode} text-${mode==='light'?"dark":"light"} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse collapse show text-${mode==='light'?"dark":"light"}`} data-bs-parent="#accordionExample" >
            <div className="accordion-body">
                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className={`accordion-item bg-${mode} text-${mode==='light'?"dark":"light"}` }  >
            <h2 className="accordion-header">
            <button className={`accordion-button collapsed bg-${mode} text-${mode==='light'?"dark":"light"} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className={`accordion-item bg-${mode} text-${mode==='light'?"dark":"light"}` } >
            <h2 className="accordion-header">
            <button className={`accordion-button collapsed bg-${mode} text-${mode==='light'?"dark":"light"} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container">
            <button onClick={toggleStyle} className='btn btn-primary m-3 mx-0' type='button'>{btntext}</button>
        </div> */}
    </div>
  )
}
