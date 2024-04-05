
// Pizza order by Pranav

// Place an Event Listener to the button to run the placeOrder function

document.getElementById("btn").addEventListener("click", greet);
// Store order code in a function
function greet() {
  //Input - extremely cool and awesome
  let sp1 = +document.getElementById("sp1").value;
  let sp2 = +document.getElementById("sp2").value;
  let css1 = +document.getElementById("css1").value;
  let css2 = +document.getElementById("css2").value;
  let pa = +document.getElementById("pa").value;

  //Process - Create confirmation message using template strings

  let grade = ((sp1 + sp2 + css1 + css2 + pa)/5);
  let message = `Your final CS10 Grade is ${grade}!!!!!!!!`

  


                                                                                                                                  
                                                                                                                                                                                                        
                                                                                                                                                                                                        
                                                                                                          

  //Output
  document.getElementById("output").innerHTML = message;
}
