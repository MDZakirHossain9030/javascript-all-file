											Object 
											
1>> //Object এর সবগোলো property আর value একসাথে দেখতে চাইলে 	
											const car ={name:"BMW", model:"512", color:"white"}
											
											
2>> //Object এর একটা  property আর value একসাথে দেখতে চাইলে 											
										const car ={name:"BMW", model:"512", color:"white"}
												console.log(car.name)
												console.log(car["name"])	//দুইভাবেই দেখা যায় 
														
											
3>> //object এর property add করতে চাইলে 
							যেমন	const car ={name:"BMW", model:"512", color:"white"}
									  car.friend="Belal"
									  

4>> //object এর property change করতে চাইলে 
							যেমন	const car ={name:"BMW", model:"512", color:"white"}
									  car.color="red"
									  
									  
5>> //object এর property delete করতে চাইলে 
							যেমন	const car ={name:"BMW", model:"512", color:"white"}
								delete car.name	

									  
									  




6>> // Object এর প্রতিটা value এর মধ্যে যেতে হবে for in loop এর মাধ্যমে 
											const students={name:"zakir", age: 25, ocapation: "Freelancher"}

											let text =""
											for(let x in students){
												text += students[x]
											}
											document.write(text)	


