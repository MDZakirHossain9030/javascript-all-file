												JSON
												
							JSON এর কাজ হলো একটি সার্ভার থেকে অন্য সার্ভারে তথ্য পাঠানো হয়

1>> //creat JSON
			const myObj  = {"name":"zakir", "age":25, "nackname":"Arjo"}



2>> //JSON এর একটা value দেখতে চাইলে Object এর মতই দেখতে হবে 
						const myObj  = '{"name":"zakir", "age":25, "nackname":"Arjo"}'
						console.log(myObj.name)
						console.log(myObj["name"])		//দুইভাবেই দেখা যায় Object এর মতই



3>> //JSON এর সাথে কোনোকিছু add করতে চাইলে Object এর মতই করতে হবে 
								const myObj  = {"name":"zakir", "age":25, "nackname":"Arjo"}
								myObj. friend="Belal"

								
								
4>> //JSON এর property change করতে চাইলে 
								const myObj  = {"name":"zakir", "age":25, "nackname":"Arjo"}
								myObj.nackname="red" //Object এর মতই



5>> //JSON এর property delete করতে চাইলে 
							const myObj  = {"name":"zakir", "age":25, "nackname":"Arjo"}
							delete myObj.name //Object এর মতই
							
	
6>> //JSON এর প্রতিটা value এর মধ্যে যেতে হবে for in loop এর মাধ্যমে 	
							const students={"name":"zakir", "age": 25, "ocapation": "Freelancher"}

											let text =""
											for(let x in students){
												text += students[x]
											}
											document.write(text)	//Object এর মতই
