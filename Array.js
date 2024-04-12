											
											Aray Methods  		finter									
 // Array length, Array toString(),  Array change(), Array delete(), Array push(), Array pop(), Array unshift(), Array shift(), Array join(),
	// Array concat(), Array flat(), Array splice(), Array slice(),



1>> //Array এর প্রথম value দেখাতে চাইলে 
							const students=["Amin", "Zakir", "Belal"]
							const value= students[0]

2>> //Array change()= মানে  value পরিবর্তন করা //প্রথম value টা change করতে চাচ্ছি 						
												যেমন const students=["Amin", "Zakir", "Belal"]
															students[0]="kamal" 
															console.log(students)
											

3>> //Array delete()= মানে Delete করে ফেলা 
								যেমন const students=["Amin", "Zakir", "Belal"]
											delete students[0]//Amin নামটা ডিলেট করে দেবে	
											console.log(students)


3>> //কতটা value আছে তা দেখার জন্য 
							const students=["Amin", "Zakir", "Belal"]
							let name =students.length


5>> //Array এর শেষ value দেখাতে চাইলে 
							const students=["Amin", "Zakir", "Belal"]
							const name=students[students.length-1]


							
6>> // Array push()= মানে Array এর পিছনে নতুন value টা যোগ করে দেবে
												যেমন const students=["Amin", "Zakir", "Belal"]
															students.push("kamal")	
															console.log(students)
													
													
7>> //Array pop()= মানে Array এর পিছন থেকে শেষের value টা বাদ দিতে হবে 
											যেমন const students=["Amin", "Zakir", "Belal"]
														students.pop()	
														console.log(students)
												
												
8>> //Array unshift()= মানে Array এর সামনে নতুন value টা যোগ করে দেবে 
											যেমন const students=["Amin", "Zakir", "Belal"]
															students.unshift("kamal")	
															console.log(students)																
																										
											
9>> //Array shift()= মানে Array এর সামনে একটা নতুন value টা বাদ দিতে হবে
											যেমন const students=["Amin", "Zakir", "Belal"]
														students.shift()	
														console.log(students)												
																										
												
10>> //Array join()= মানে Array প্রতিটা value এর মধ্যে * চিহ্নটা দেওয়া
											যেমন const students=["Amin", "Zakir", "Belal"]
												const value= students.join(" * ")											
																																																									
											



11>> //  Array concat()= মানে একটা Array এর সাথে আরেকটা Array এর যোগ করা 
											যেমন const students1=["Amin", "Zakir", "Belal"]
												const students2=["kamal", "jamal"]
												const adding= students1.concat(students2)
										//adding= students1.concat(students1,students1প্যামিটার হিসেবেও পাঠানো যাবে)
										//const adding= students1.concat("যেকোনো নামও পাঠানো যাবে")
										
										
13>>  //মানে অনেক সংখ্যা একসাথে কাজ করা যাবে যেমন const num=[[1,2],[2,3],[4,5]]									
								
								
14>> //Array splice()=মানে কত নাম্বারের পরে নতুন নাম যোগ করতে চাচ্ছি//1 মানে প্রথম নামে পরেই বসবে আর ০ মানে কোনো নাম বাদ পরবে না 
										যেমন const students=["Amin", "Zakir", "Belal"]
												  students.splice(1,0,"kamal")								
										
										
15>> //Array splice()=মানে কত নাম্বারের পরে নতুন নাম বাদ করতে চাচ্ছি //0মানে প্রথম নাম বাদ যাবে তারপর থেকে সব নাম থাকবে
										যেমন const students=["Amin", "Zakir", "Belal"]
												  students.splice(0,1)										
										
										
16>> //Array slice()= মানে কত নাম্বার index এর নামটা বাদ দিতে চাচ্ছি //১ আর ২ এর মধ্যের নামটা থাকবে বাকি সব বাদ হয়ে যাবে
										যেমন const students=["Amin", "Zakir", "Belal"]
											const name = students.slice(1,2)							
	

									
											Sorting Arrays
17>> //Arrays sort()= মানে alphabetically মানে অক্ষর প্রথম থেকে সিরিয়ালে ঠিক করে দেবে 
												যেমন	const students=["Amin", "Zakir", "Belal"]
													const name = students.sort()									
										
										
18>> //Arrays reverse()= মানে alphabetically মানে অক্ষর শেষে থেকে সিরিয়ালে ঠিক করে দেবে 
										যেমন const students=["Amin", "Zakir", "Belal"]
											const name = students.reverse()		

19>> //indludes এর মাধ্যমে খুজিতেছি নামেটা ভেতরে আছে নাকি থাকলে ture দিবে আর না থাকলে false দিবে
													যেমন const person = ["Zakir", "Belal", "Amin"]
														const includes = person.includes("Belal")
												


							
20>> //string এর প্রতিটা অক্ষরের মধ্যে for loop ব্যবহার করে যাওয়া 
									যেমন let name="Bangladesh"

										let text=""
										for(let x of name){
										text += x + "<br>"
										}
								document.getElementById("demo").innerHTML=text


21>> //flatMap() এর মাধ্যমে  Array এর প্রতিটা value এর মধ্যে যাবে   =W3 School
											const myArr=[1,2,3,4,5,6]
											const newArr = myArr.flatMap((x) => x + "<br>")
											document.getElementById("demo").innerHTML = newArr


		
22>> // প্রতিটা  value এর মধ্যে যেতে হবে for of loop এর মাধ্যমে প্রতিটা value দেখতে চাচ্ছি 
											const person = ["Amin", "Belal", "Zakir"]

											let text=""
											for(let x of person ){
												text += x +"<br>"
											}
											document.getElementById("demo").innerHTML=text




23>> //Array keys() = Array এর প্রতিটা নামের index দেখতে চাচ্ছি 
								const person = ["Zakir", "Belal", "Amin"]
								const keys = person.keys()//keys এর পরিবর্তে entries() দিলে index নাম্বার ও value দেখাবে

								text =""
								for(let x of keys){
									text += x + "<br>"
								}
								document.getElementById("demo").innerHTML=text




24>> //Array entries() = Array এর প্রতিটা নামের  value সহ  index নাম্বার  দেখতে চাচ্ছি 
								যেমন const person = ["Zakir", "Belal", "Amin"]
								const entries = person.entries()

								text =""
								for(let x of entries){
									text += x + "<br>"
								}
								document.getElementById("demo").innerHTML=text

				
				
25>> //for loop ব্যবহার করেও Array এর value বা তার index নাম্বার দেখা যায়
												const worker=["Amin", "Zakir", "Belal", "kamal" , "jalal" , "namal"]

												let text =""
												for(let i=0; i<worker.length; i++){
													text += worker [i]		// শুধু i দিলে index নাম্বার দেখাবে
												}
												document.getElementById("demo").innerHTML=text												


																		
26>> //for loop ব্যবহার করেও Array এর  প্রতিটা  value তে গিয়ে একটা product list তৈরী করতে চাচ্ছি 
											const person = ["Zakir", "Belal", "Amin"]

											let text="<ul>" //<ul> নাদিলেও চলবে 
											for(let i=0; i<person.length; i++){
												text +="<li>" + person[i] + "</li>"
											}
											document.getElementById("demo").innerHTML=text	




27>> //forEach ব্যবহার করেও Array এর  প্রতিটা  value তে গিয়ে একটা product list তৈরী করতে চাচ্ছি 
											const person = ["Zakir", "Belal", "Amin"]

											let text="<ul>"	//forEach দিয়ে list করতে চাইলে অবশ্যই <ul>দিতে হবে 							
											person.forEach(myFunction)
											text += "</ul>"

											function myFunction(value){
												text += "<li>" + value + "</li>"
											}
											document.getElementById("demo").innerHTML=text	
	

	
28>> //Numeric sort এর মাধ্যমে Array এর ছোট সংখ্যা বাহির করবে 
						যেমন const num=[40,100,1,5,25,10]
								  num.sort(function(a,b){
								  return a-b//a-b  ছোট সংখ্যা বাহির করবে  আর b-a মানে বড় থেকে ছোট
									})
								document.write(num[0])//index নাম্বার [0]দিতে হবে


												
								
29>> //reduce এর  মাধ্যমে  Array সংখ্যাগোলোর যোগফল  বাহির  করতে  চাচ্ছি  
						const number=[45,4,9,16,25]
						let sum = number.reduce(myFunction)//(myFunction + 100) দিলে Array এর সংখ্যার সাথে 100 ও যোগ হবে

						function myFunction(total, value, index, array){
							return total + value
						}
		document.getElementById("demo").innerHTML = sum
					//reduce আর reduceRight একই কাজ করে 	



30>> //for loop ব্যবহার করে Array এর সংখ্যা গোলোর যোগফল বাহির করতে চাচ্ছি
													const number=[45,4,9,16,25]

													let sum =0;
													for (var x=0; x<number.length; x++){
														sum = sum + number[x]
													}
													document.write(sum)

31>> //বায়ারের কাছ থেকে নাম্বার নিয়ে for loop ব্যব্যহার করে যোগফল বাহির করতে চাচ্ছি   	//Anisul = 27

					var number = new Array()
					for(var x=0; x<5; x++){		//বায়ার কত বার নাম্বার দেবে
					number[x] = parseInt(prompt("Enter your numbear"))
					}



					var sum=0;		//Array এর index নাম্বার ০ থেকে শুরু করেছি
					for(var x=0; x<5; x++){
					sum = sum + number [x] //sum হলো Index নাম্বার  আর  number [x]বায়ারের দাওয়া নাম্বার  দুইটা যোগ করে sum এর মধ্যে রেখেছি
					}
					document.write(sum)






									Highest and Lowest Number  
32>> // max আর min দিয়েও ছোট সংখ্যা আর বড় সংখ্যা বাহির করা যায়
									যেমন const num=[40,100,1,5,25,10]
										function myArray(arr){
										return  Math.max.apply(null, arr)//max দিলে বড় সংখ্য আর min দিলে ছোট সংখ্যা আসবে
											}
										document.write(myArray(num))
										
										
										
										
33>> //every এর  মাধ্যমে Array এর সবগোলো নাম্বার ৫ থেকে বড় কিনা বড় হলে দেখাবে true আর বড় না হলে দেখাবে false
						যেমন const number =[10,20,30,40,50]
							let text= 
							number.every(myFunction);

							function myFunction(value,index,array){//এই function সবসময়value, index, Array রিসিভ করে 
							return  value  >5
							}							
							document.getElementById("demo").innerHTML=text							
							//every Methods আর some Methods একই কাজ করে সামান্য পার্থক্য আছে




34>> //filter এর মাধ্যমে দেখতে চাচ্ছি ২০ এর ছোট কি কি  সংখ্যা আছে //  Filter এর কাজ হলো array এর বিভিন্ন element গোলোকে নিয়ে নতুন একটা array তে রাখা
										const number=[45,4,9,16,25]
										const over= number.filter(myFunction)

										document.getElementById("demo").innerHTML=over
										function myFunction(value, index, array){//এই function সবসময়value, index, Array রিসিভ করে 
										return value<20 //২০থেকে ছোট সংখ্যা বাহির করবে
										}




35>> //find এর মাধ্যমে খুজে দেখতেছি ২৬ এর পরের নাম্বারটা কত
						যেমন const number =[10,20,30,40,50]
							let find= 
							number.find(myFunction);

							function myFunction(value,index,array){//এই function সবসময়value, index, Array রিসিভ করে 
							return  value  >26
							}							
							document.getElementById("demo").innerHTML=find


							

36>> //findIndex এর মাধ্যমে খুজে দেখতেছি ২৬ এর পরের সংখ্যাটা কত নাম্বার indexএ আছে কত
						যেমন const number =[10,20,30,40,50]
							let find= 
							number.findIndex(myFunction);

							function myFunction(value,index,array){//এই function সবসময়value, index, Array রিসিভ করে 
							return  value  >26
							}							
							document.getElementById("demo").innerHTML=find
						//find দিয়ে সংখ্যা দেখাবে আর findIndex দিয়ে index নাম্বার বলে দেবে
										
				
				


											

						