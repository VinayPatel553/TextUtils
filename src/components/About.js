import React from 'react'

export default function About(props) {
      // const [mystyle, setmystyle] = useState({
      //       color:'black',
      //       backgroundColor:'white',
      // })

      let mystyle = {
            color:props.mode==='dark'?'white':'#042743',
            backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',

      }
      // const [btntext, setbtntext] = useState("Enable Dark Mode");
      // const togglestyle=()=>{
      //       if(mystyle.color==='white'){
      //             setmystyle({
      //                   color:'black',
      //                   backgroundColor:'white',
      //                   border:'1px solid'
      //             })
      //             setbtntext("Enable Light Mode")
      //       }
      //       else{
      //             setmystyle({
      //                   color:'white',
      //                   backgroundColor:'black',
      //             })
      //             setbtntext("Enable Dark Mode")
      //       }
      // };
      return (
            <div className='container'>
                  <h2 className='my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h2>
                  <div className="accordion" id="accordionExample" style={mystyle}>
                        <div className="accordion-item">
                              <h2 className="accordion-header">
                                    <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          <strong>Analyze Your Text</strong>
                                    </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
                                    <div class="accordion-body" style={mystyle}>
                                          TextUtils gives you a way  to analyze your text quickly and efficiently. 
                                          Be it word count,character count.
                                    </div>
                              </div>
                        </div>
                        <div className="accordion-item">
                              <h2 className="accordion-header">
                                    <button className="accordion-button collapsed"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          <strong>Free To Use</strong>
                                    </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle}data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                                    </div>
                              </div>
                        </div>
                        <div className="accordion-item">
                              <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          <strong>Browser Compatible</strong>
                                    </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" style={mystyle}data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer,
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <button onClick={togglestyle} className='btn btn-primary my-3'>{btntext} </button> */}
            </div>
      )
}
