											function
	
1>> // function কিভাবে  invoke (কল) করার সময় ভেতরে console থাকলে বাহিরে আর console দিতে হবে না 
														function myFunction(){
															console.log("zakir")
														}
														 myFunction()
														 
									 
2>> // function কিভাবে  invoke (কল) করতে হয় ভেতরে return থাকলে বাহিরে console দিতে হবে
												function  myFunction(){
												console.log("kamal") //ভেতরে console এবং return দুইটা করেছি দুইটাই কাজ  করবে
												return "jamal"
												}
												console.log(myFunction())



3>> //function কে একটা variableএ রেখেছি  নিচে variable কে invoke করলেই হবে
												let hello = function(){
													return "Hello World"
													}
												document.getElementById("demo").innerHTML = hello()



4>> //function কে একটা variableএ রেখেছি  নিচে variable কে invoke করলেই হবে //Arrow function যা  ES6 থেকে এসেছে 
								let hello=""
									hello = function(){
									return "Hello World"
									}
								document.getElementById("demo").innerHTML = hello()



5>> //Arrow function যা  ES6 থেকে এসেছে (৩নাম্বার নিয়ম)
										let hello = ""
											hello = () =>{
											return "Hello World"
											}
										document.getElementById("demo").innerHTML=hello()



8>> //Arrow function যা  ES6 থেকে এসেছে (৪নাম্বার নিয়ম)
							let hello = ""
							hello = (val) => "Hello" + val	
						document.getElementById("demo").innerHTML=hello("World")



7>> //Arrow function যা  ES6 থেকে এসেছে //এক লাইনে লেখলাম (১নাম্বার নিয়ম)
										let myFunction = (a,b)=> a*b
										let name = myFunction(4,5) 


									
6>> //self-Invoking মানে  function  নিজেই নিজেকে কল করতে পারে 
											(function(){
													console.log("Hello World")
												})()




9>> //আর্গোমেন্টে value কম থাকলে প্যারামিটারে value সেট করে দেওয়া যাবে 
											function myFunction(x,y=4){
													return x+y
												}
												let result = myFunction(5)
												document.getElementById("demo").innerHTML=result




10>> //অনেকগোলো আর্গোমেন্ট থাকলে প্যারামিটার হিসেবে নিতে হয়  ডটডট  (তিনটা ডট ) (...)  দিতে হয় সবগোলো সংখ্যাকে নিয়ে যোগ করতে চাচ্ছি
										function sum(...zakir){
												let sum=0
												
												for(let x of zakir) 
													sum += x
													return sum	
													}
											let add = sum (4,9,16,25,29,100,66,77)
											document.getElementById("demo").innerHTML=add




11>> // উপরের কাজটা যেভাবে করেছি সেটা আরো একভাবে করা যায় 	//সবগোলো সংখ্যাকে যোগ করতে চাচ্ছি 
						function sumAll(){
							let sum =0
														
							for(let i=0; i<arguments.length; i++){
								sum += arguments[i] 			
							}
							return sum
							}
													
						let add = sumAll (4,9,16,25,29,100,66,77)
						document.getElementById("demo").innerHTML=add




12>> //java scriptএ class কোনো Object নয় এটা একটা keyword যার Methods সবসময় Constractor, class হলো Object এর একটা Template যেমন 
											class Car{ 		//constractor বুঝার উপায় হচ্ছে প্রথম অক্ষর বড় হাতের যেমন Car
											constractor (name,year){ //constructor এ প্যারামিটার রিসিভ করেছে 
												this.name = name; //this.name মানে car এর নামে  = name মানে প্যারামিটারের name
											this.year= year;
												}
											}




13>> // Object এর মধ্যে যে function থাকে সেটাকে Methods বলে
									//object Properties
									const person ={
										fname: "MD Zakir ",
										lname: "Hossain ",
										friend: "Belal"
									}
									person.age = 25 ;		 //Object এর বাইরে  age add করতেছি
									delete person.frien 	//Object থেকে friend keyটাকে  delete করে দিয়েছি
d
									const name = person.fname + person.lname + person.age //বয়সটা এখানে add করেছি
									console.log(name)
									console.log(person)
