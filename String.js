
									String Methods  
 //string length, string concat(), string toUpperCase(), string toLowerCase(), string slice(), string substring(),
	//string substr(), string charAt(), string replace(), string replaceAll(), string trim(), 
	//string trimStart(), string trimEnd(), string padStart(), string padEnd(), string charCodeAt(), string split(),repeat()


1>> //বড় হাতের অথবা ছোট হাতের অক্ষর করতে চাইলে= toUpperCase() এবং toLowerCase()
											 	let name1="Bangladesh is my country"
												let name2 = name1.toUpperCase()
														

2>> // slice()= 1st index এবং last index এর ভেতরে যা থাকবে শুধু সেটা দেখাবে), (1st index দিলেও হবে), 
							let name1="Bangladesh"
							let name2 = name1.slice(1,3)
					//(-last index দিলেও হবে), (-last index, - last index)
					//( slice(), Substring(), Substr() একই রকম কাজ করে )


3>> //charAt()= মানে প্রথম ব্রেকেটে index number দিলে বাহির করে দেবে কোথায় আছে 
												let name="Bangladesh"
												let add =name.charAt(1) //নিচের দুই ভাবেও করা যাবে
												
												let name="Bangladesh"
												let add =name.at(1)
												
												let name="Bangladesh"
												let add =name(1)
	

	
5>> // trim()= মানে stringএ  যা আছে তা দেখাবে এবং যতটা স্পেস দেওয়া হোক সেটাও দেখাবে 
									let name="Ba ngladesh"
									let add =name.trim()



4>> //replace()= মানে(যে stringটা পরিবর্তন করবো , নতুন string) case-sensitive
											let name1="Bangladesh is my country"
											let name2 = name1.replace("my","Our")
										case-sensitive হলে (/my/i)//i দিতে হবে
										//replace() আর  replaceAll() একই রকম কাজ করে একটু পার্থক্য আছে

											

5>>//repeat()=মানে একটা লেখাকে বারবার দেখাবে 
								let country="Bangladesh"
								let name=country.repeat(2)
																																														





													
							
											String search
6>> // String indexOf(), String lastindexOf(), String search(), String match(), String matchAll(), String includes(),
	//String startsWith(), String endsWith()

							
																				
							
7>> //indexOf()= মানে যে word টা খুজছি সেই word এর  index নাম্বার বলে দেবে	
										const person = ["Zakir", "Belal", "Amin"]
										let position = person.indexOf("Zakir")
										


8>> //indexOf()= মানে যে word টা খুজছি সেই word এর  index নাম্বার বলে দেবে	
													let name1="Bangladesh is our country"
													let name2 = name1.indexOf("is")	// -1 দেখাবে
													//indexOf() আর lastindexOf() এবং  search() একই কারে
												

												
9>> // match()= মানে match(মিলেছে) করছে কিনা  যদি মিলে তাহলে কত নাম্বার index এ আছে তাও দেখাবে 
									var name1="Bangladesh is our country kamal"
									var name2 = name1.match("try")				
										//case-sensitive হলে (/try/i),   
		//(/try/i),   //(/try/g),   //(/try/gi) দিতে হবে এবং কতবার আছে তা দেখাবে {match(),  matchAll()}



10>> //includes()=মানে শব্দটা থাকলে true আর না থাকলে false দেখাবে   
										var name1="Bangladesh is our country kamal"
										var name2 = name1.includes("try")
										//case-sensitive হলে (/my/i)//i দিতে হবে		
					//(includes(), String startsWith(), String endsWith()=একই কাজ করে একটু পার্থক্য আছে )

															
										
										
11>>  // string এর প্রতিটা অক্ষরে যাওয়ার যায় for of loop এর মাধ্যমে
												let  country ="Bangladesh"
												let text =""
												for(let x of country){
													text += x + "<br>"
												}
												document.write(text)
	