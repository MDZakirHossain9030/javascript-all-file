									Java Script এর সকল MCQ 
									
1>> // সর্বপ্রথম ১৯৯৫ সালে ব্রেন্ডেন ইছ ১০দিনে Java Script তৈরী করেছিলাম
2>> //ES এর পূর্ণরুপ = ইক্স ক্রিপ্টিক
3>> //ES1, ES2, ES3 = ১৯৯৭ সাল থেকে ১৯৯৯ সাল পর্যন্ত ES5 = ২০০৯ সাল থেকে ২০১৫ পর্যন্ত আর ES6 =২০১৫ সাল থেকে চালু হয়েছে 


									keyword							
4>> //keyword = var, let, const, if, switch, for, function, return, try
5>> //var =1995--2015 পর্যন্ত আর let and const = 2015 থেকে শুরু


									 types
6>> // value 2 types = Fixed value(literals),  Variable value
7>> //JavaScriptএ কোনো value নাদিলে java আমাদেরকে একটা value দেয় যার নাম undefined 



									 Scope
8>> // Scope =Global scope(সবার উপরে থাকে), Block scope(কোনো কিছুর ভেতরে লেখা যেমন if), ,function scope যেটা function এর মধ্যে থাকে 


									Hoisted
10>> //var এবং let দুইটাই hoisted হয় কিন্তু var উপরে উঠে undefined দেয় আর let উপরে উঠে undefined দেয় না


							const কোথায় ব্যবহার করতে হয়
11>> //const কোথায় কোথায় ব্যবহার করা যাবে = Array, Object, function, RegExp(রেগুলার এক্সপ্রেসনের মধ্যে)

									  
									Arithmetic Operator
12>> //Operator = addition(+), subtraction(-), Multiplication(*), Exponentiantion(**),
	//Divition(/), Modulus(%), incriment(++), Decriment(--), Assignment Operator(=)
									
									Assignment Operator 
13 >> //  +=,, -=,  *=,, **=,, /=,, %= 
									
									
								Comparison Operator
14>> //Comparison Operator=  equale(==), equale value and equale type(===), not equale(!=), not equale value and equale type(!===),
	//greater than(>), less than(<), greater than or equale(>=), less than or equale(<=), ternarry Operator(?)
	
	
								 Logical Operator
15>> //Logical Operator = and(&&), or(||), not(!)


									type operator
16>> //typeof,  instanceof
								
								
								Time object 
17>> // time object এর সময় সবসময় new দিয়ে লেখতে হয় এটা একটা object typeof দিলে দেখা যায়
																যেমন new Date()								
								
								
									Data type 
18>> //Data type ৮ প্রকার= String, Number, Biglnt(অনেক সংখ্যা), Boolean(true,false), Undefined, Null, Symble, Object


									Boolean 
					  //Yes/No,,    On/Off,,   True/False		
									
									
									Object Data type
19>> //An object, An array, A date
									
									
										Events
20>> //HTML events onclick লেখতে হয় কিন্তু java script লেখার সময় শুধু click লেখতে হয় javaতে যত Event লেখা হয় কোনোটাতেই on লেখতে হয় না 
		
		

										this
21 //>> This এটা একটা keyword এবং এটা একটা  Global Object 


										function
22>> //function কল করাকে invoke বলা হয় এবং function এর মধ্যে যে return থাকে সেটা সবসময় return করে value
23>> //function এর মধ্যে return দিলে return এর পরে আর কোনোকিছু লেখা যায় না 
25>> //function এর মধ্যে যতগোলো ইচ্ছে প্যারামিটার আর আর্গোমেন্ট দেওয়া যাবে 

									

										loop
26>> //Object এর মধ্যে for in loop ব্যবহার করা হয় কারন Object এর মধ্যে key(property) আছে 
27>> //Array এর মধ্যে for loop, for of loop, Array.forEach ব্যবহার করা হয় কারন Array এর মধ্যে key(property) থাকেনা 
28>> //string এর প্রতিটা অক্ষরে যাওয়ার যায় for of loop এর মাধ্যমে											
29>> //for loop,  for in loop,  for of loop,  while loop,  do while loop সকল loop এর ব্যবহার W3 School থেকে দেখে নিতে হবে


30>> // Object এ থাকে key (Properey) আর value										


												Back-Tics Syntax
31>> //Back-Tics Syntax= মানে ডবল কোটেশন ("")এর পরিবর্তে back-stics(``) ব্যবহার করা যায় back-stics দিলে back-stics একবার দিয়ে multi লাইন একসাথে লেখা যায় আবার
												যেমন	let fname="MD Zakir"
													let lname="Hossain"
												console.log(` ${fname}, ${lname}`) এভাবেও যোগ, বিয়োগ, গুন, ভাগ সবকাজ করা যায় 


												Number Methods
32>> //toString(), toExponential(), toFixed(), toPrecision(), valueOf()
																	
33>> //toExponential()মানে শুধু দশমিকের পরে কয়টা সংখ্যা রাখতে চাচ্ছি যেমন 
								let x=9.123
								let number=x.toExponential(2)		
								let number=x.toExponential(2)
							//toExponential আর toFixed()একই কাজ করে

34>> //toPrecision()মানে দশমিকের পরে পূর্ণ সংখ্যা সহ কয়টা সংখ্যা রাখতে চাচ্ছি 
												let x=9.123
												let x=9.123
												let number=x.toFixed(2)
										//valueOf() মানে যা আছে তাই দেবে


35>> //Number(),  parseInt(), parseFloat(), 	
36>> //কোনো সংখ্যাকে সার্চ করলে   true হলে(1),  false হলে(0),  নাম ("zakir")দিলে NaN, 
37>> //parseInt মানে পূর্ণ সংখ্যা দিবে
						let num =parseInt(1.12354)
38>> //parseInt মানে দশমিক সংখ্যা  সহকারে দিবে
						let num =parseFloat(1.12354)

											Number Object Methods
39>> //Number. isInreger(), Number.isSafeInteger(), Number.parseFloat(), Number.parseInt()


												Math Object
40>> //	Math.round() মানে দশমিকের পরে ৫ অথবা ৫এর চেয়ে বড় সংখ্যা দিলে পূর্ণ সংখ্যার সাথে ১ যোগ হবে 
															যেমন	let num = Math.round(4.6)									
												

				
41>> //	Math.sign() মানে যেকোনো সংখ্যা দেয়না কেন পূর্ণ সংখ্যা হোক বা দশমিক সংখ্যা হোক ফল পাওয়া যাবে ১
															যেমন	let num = Math.sign(4.8)
															
															
42>> //	Math.ceil() মানে দশমিকের পরে ছোট বড় যেকোনো সংখ্যা দিলে পূর্ণ সংখ্যার সাথে ১ যোগ হবে 
															যেমন	let num = Math.ceil(4.6)
				
															
43>> //	Math.floor() মানে দশমিকের পরে ছোট বড় যেকোনো সংখ্যা দিলে পূর্ণ সংখ্যা যা ছিল তাই থাকবে তার সাথে কোনো সংখ্যা যোগ হবে না 
															যেমন	let num = Math.floor(4.8)
														//Math.foolr এবং  Math.trunc একই কাজ করে  


44>> //	Math.random()দিলেই অনেক গোলো দশমিক সংখ্যা দেবে 
								যেমন	let num = Math.random()
				
				
45>> //Math.floor() কে Math.random() দ্বারা পূর্ণ সংখ্যা করা 
									যেমন let max =Math.floor(Math.random()*10)//১০ এর জায়গায় যেকোনো সংখ্যা দেওয়া যাবে

						
46>> //Math.pow() বর্গ সংখ্যা বাহির করে দেবে
						let num = 8;
						let number = Math.pow(num,2)
	

47>> //Math.sqrt() সংখ্যার বর্গমূল বাহির করে দেবে
						let num = 25;
						let number = Math.sqrt(num)	
						
	
48>> //Math.max() বড় সংখ্যা  বাহির করে দেবে
							যেমন let max =Math.max(10,15,50,20,30)	//max দিলে বড় সংখ্যা আর min দিলে ছোট সংখ্যা আসবে	
							
							
49>> //Math.max.apply() এর মাধ্যমে বড় সংখ্যা বাহির করতে চাচ্ছি 	
									let max =Math.max.apply(Math,[10,15,50,20,30])	 //max দিলে বড় সংখ্যা আর min দিলে ছোট সংখ্যা আসবে

									
												String
50>> // সংখাকে বলা হয় Operant আর যোগ, বিয়োগ, গুন, ভাগ চিহ্নকে বলা হয় Operator
51>> //Stringএ কয়টা অক্ষর আছে তা জানার জন্য=  let length = text.length
52>> //string character = মানে string এর মধ্যে ভিবিন্ন চিহ্ন ব্যবহার করা যাবে যেমন 	 /   ""   // 

53>> //  দুইটা string যোগ করতে চাইলে এটাকে caoncatenate বলে
											যেমন let fname="MD Zakir"
												let lname="Hossain"
												let add = fname.concat(lname)
												


												Array 
Array, Set, Map এই তিনটা একই কাজ করে তবে Array এর মধ্যে একই অক্ষর বারবার লেখা যায় আর Set এর মধ্যে একই লেখা বারবার লেখা যায় না //Set আর Map W3 school থেকে দেখতে হবে
//Array এবং Object এর মধ্যে পার্থক্য হলো Array এর index থাকে number আর Object এর index থাকে name //Array একধরনের Object// java এর সবকিছুই Object 

//Arrayকে typeof দিলে দেখাবে object কিন্তু এটাকে Array করে দেখতে চাইলে 
										const person = ["Zakir", "Belal", "Amin"]
										let name = Array.isArray(person)//true দেখাবে তার মানে এটা একটা Array



											set/Map Methods
				new Set(),, add(),, delete(),, has(),, forEach(),, values(),, 

											set property
											    size //length এত মত কাজ করে কয়টা আছে তা দেখাবে 
											
						//classes একটা keyword যার Methods Always constractor()


											else if switch
54>> //switch এর মধ্যে break এবং  default একটা  keyword 


											Dom(document Object Model)
56>> //HTML এর  p এর মধ্যে লেখা add করতে চাচ্ছি বা p এর লেখা পরিবর্তন করতে চাচ্ছি
									document.getElementById("demo").innerHTML = "Bangladesh"
								
								
57>> //CSS এর  style এর পরিবর্তন করতে চাচ্ছি
							document.getElementById("demo").style.color = "red"
							
58>> //setTimeout = মানে কত সেকেন্ড পরে আসবে =যত সেকেন্ড দেয়না কেন সেই সেকেন্ডের পরে মাত্র একবার আসবে 
59>> //setInterval= মানে যত সেকেন্ড দেয়না কেন সেই সময়ের পরে বারবার আসতে থাকবে
60>> //cookie =মানে ব্রাউজারের সব তথ্য সেইভ করে রাখা //হ্যাকারের কাজ //cookie এর মাধ্যে থাকে  name,, value,, time এই তিনটা জিনিস 


									JSON আর Object একই রকম কাজ করে 
									
61>> // JSON এর পুরূ নামে হলো
						JavaScript Object Notation
						
62>> // আগেছিল XML এখন আর XML দ্বারা কাজ করা হয় না এখন করা হয় JSON দ্বারা

63>> //JSON আর  XML এর মধ্যে পার্থক্য
	XML এর মধ্যে অনেক কোড লেখতে হয় আর JSON এর মধ্যে কম কোড দিলেই হয় 
	XML এর মধ্যে Tag থাকে আর JSON এর মধ্যে কোনো tag দিতে হয় না
	XML অনেক দেরীতে কাজ করে আর JSON তারাতারী কাজ করে 
	JSON Array তে ব্যবহার হতে পারে 
	
	
64>> //JSON value কোন গোলো হতে হবে 
				string,, number,, object,, array,, boolean,, null
				

65>> //JSON value কোন গোলো হতে পারবে না 
											function,, date,, undefined কিন্তু 
		function,, date,, undefined এই তিনটা যদি ডবল কোটেশন এর ভেতরে দিয়ে দেন তাহলে কাজ করবে কারন তখন তারা এটাকে string মনে করে 
		
66>> //javaScript Object আর  JSON Object literals এক জিনিস না কিন্তু যদি parse দ্বারা convert করা হয় তাহলে সেটা হবে javaScript Object
67>> // JSON Object বলে কোনো কথা নাই এটা একটা javaScript Object //JSON শুধু মাত্র একটা string