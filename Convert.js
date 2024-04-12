													Convert 
													
													
1>> //number থেকে stringএ convert 
							let num=123
							let string = num.toString()
							console.log(typeof string)	//এমনিতে নাম্বারই দেখাবে typeof দিলে দেখাবে এটাযে string


2>> //Date  থেকে  numberএ  convert 
							let date = new Date()
							let name = Number(date)



3>> //Booleat থেকে Numberএ  convert
					true হলে দেখাবে 1 আর 	false হলে দেখাবে 0 



4>> //Array কে  stringএ   convertএ করা হলো 
						const students=["Amin", "Zakir", "Belal"]
						let name =	students.toString()	
								

								
5>> //string কে  arrayতে  converএ করা হলো		
								let kamal = "Bangladesh"
								let name= Array.from(kamal)



6>> //split()= মানে text যেমন আছে তেমনি দেখাবে কিন্তু যতটা স্পেস দিবেন সেটাও দেখাবে //typeof দিলে দেখাবে object
									let name="Bangladesh"
									let x =name.split()



7>> // time কে UTC time এ convert করা হলো
							let date =new Date()
							let x =date.toUTCString()
		

		
8>> //Date  থেকে  stringএ  convert typeof দিলে দেখাবে string
								let date = new Date()
								let name  = date.toString()
				
	
	
9>> //time কে current time(year, month, minute, day ) এ convert করা হলো
							let date =new Date()
							let x =date.toDateString()


10>> //time কে current time(year) এ convert করা হলো
							let date =new Date()
							let x =date.getFullYear()



11>> //time কে current time(month ) এ convert করা হলো
							let date =new Date()
							let x =date.getMonth() //এভাবে মাস, দিন, মিনিট, সেকেন্ড, মিলিসেকেন্ড সব বাহির করা যাবে 


							
							
							
12>> //(2021-03-25) 3 নাম্বার মাসের নাম কী তা বাহির করার জন্য 
					let monthsName = ["January", "February", "March", "April", "May", "June", "July",
									"August", "September", "October", "November", "December"]
				
									let date=new Date("2021-03-25")				
									let month = monthsName [date.getMonth()] //এভাবে মাস, দিন, মিনিট, সেকেন্ড, মিলিসেকেন্ড সব বাহির করা যাবে 
									


13>> //parse এর মাধ্যমে  JSON Array থেকে সাধারন Array তে convert করতে চাচ্ছি //typeof দিলে object দেখাবে
												 const name ='["Amin", "Zakir", "Belal"]'
												 let convert = JSON.parse(name)
											

									
14>> //stringify এর মাধ্যমে object থেকে  JSON  convert করতে চাচ্ছি
							const car ={name:"BMW", model:"512", color:"white"}
							 let convert = JSON.stringify(car)
							 


15>> //parse এর মাধ্যমে JSON string থেকে  object এ  convert করতে চাচ্ছি
								const car = '{"name":"BMW", "model":512, "color":"white"}'
								 let convert = JSON.parse(car)
								 
								 
								 

											
16>> // আমরা জানি function,, Date,, undefined  এই তিনটাকে value হিসেবে পাঠানো যায় না কিন্তু string এর মধ্যে দিলে কাজ করবে
								const name ='{"name":"Zakir", "birth": "1998-06-15"}';
								 let convert = JSON.parse(name)
								console.log(new Date(convert.birth))
	
	
	
17>> //আমরা জানি function,, Date,, undefined  এই তিনটাকে value হিসেবে পাঠানো যায় না কিন্তু প্যারামিটার হিসেবে function পাঠানো যায়
					const jsonString ='{"name":"Zakir", "birth": "1998-06-15"}';
					 let convert = JSON.parse(jsonString, function(key,value){ //এই function key আর value রিসিভ করে 
						console.log(`${key}-${value}`)				//এই key আর value টা উপরের প্রতিটা এই key আর value এর মধ্যে যাবে
					 })	