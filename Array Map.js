												Array Map

1>> //Map এর property কয়টা আছে তা দেখার জন্য size ব্যবহার করতে হয় size মূলত length এর কাজ করে 
										যেমন const fruits=new Map([
													["apple",500],
													["orange",300],
													["mango",200]
													])
													
										document.getElementById("demo").innerHTML = fruits.size //size


2>> //Map এর মধ্যে apple লেখাটা আছে কিনা তা দেখতে চাচ্ছি তাকলে true দেখাবে আর না থাকলে false দেখাবে
												const fruits=new Map([
													["apple",500],
													["orange",300],
													["mango",200]
													])
													
								document.getElementById("demo").innerHTML = fruits.has("apple")//has



3>> //Map এর মধ্যে apple এর value কত তা দেখতে চাচ্ছি 
			যেমন const fruits=new Map([
					["apple",500],
					["orange",300],
					["mango",200]
					])
					
					document.getElementById("demo").innerHTML = fruits.get("apple")



4>> //Map থেকে apple লেখাটা delete করতে চাচ্ছি 
				const fruits=new Map([
					["apple",500],
					["orange",300],
					["mango",200]
					])
					fruits.delete("apple")//delete
					document.getElementById("demo").innerHTML = fruits.size

				

5>> //Map থেকে সবকিছু  delete করতে চাচ্ছি 
							const fruits=new Map([
								["apple",500],
								["orange",300],
								["mango",200]
								])
								fruits.clear()//clear
								document.getElementById("demo").innerHTML = fruits.size
						

	
6>> // Map এর মধ্যে for loop ব্যবহার করে প্রতিটার মধ্যে গিয়ে   value দেখতে চাচ্ছি 
						const fruits=new Map([
							["apple",500],
							["orange",300],
							["mango",200]
							])
										
							let text=""
							for(let x of fruits.values()){ //fruits.entries() এবং দিলে একই কাজ করবে 
							text += x + "<br>"
							}
					document.getElementById("demo").innerHTML=text




7>> // Map এর মধ্যে entries() ব্যবহার করে প্রতিটার মধ্যে  গিয়ে name এবং value দুইটাই দেখতে চাচ্ছি 
												const fruits=new Map([
													["apple",500],
													["orange",300],
													["mango",200]
													])
																
													let text=""
													for(let x of fruits){ //fruits.entries() এবং দিলে একই কাজ করবে 
													text += x + "<br>"
													}
											document.getElementById("demo").innerHTML=text



8>> // Map এর মধ্যে forEach ব্যবহার করে প্রতিটার মধ্যে গিয়ে name এবং value দুইটাই দেখতে চাচ্ছি 	
											const fruits=new Map([
												["apple",500],
												["orange",300],
												["mango",200]
												])
												
												let text=""
											fruits.forEach(function(value,key){
												text += key + "=" + value + "<br>"
											})
										document.getElementById("demo").innerHTML=text
									//forEache আর  map() একই কাজ করে প্রতিটার মধ্যে একটা একটা করে যাবে  



								
9>> //কিভাবে set creat করতে হয়
							const letters= new Set(["a", "b", "c"])
							
							let text=""
							letters.forEach(function(value){
								text += value + "<br>"
							})
							document.getElementById("demo").innerHTML=text
