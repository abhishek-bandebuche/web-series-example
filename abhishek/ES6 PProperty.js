<!DOCTYPE html>

<script src="jquery-3.0.0.min.js" type="text/javascript"></script>
<html>
<head>
	
<script type="text/javascript" >
	class Person(name,age,job)
	{
		this._name= name;
		this._age = age;
		this.job = job ;

        get Name()
		{
			return this._name;
		}
		return 0;
	}
	var p1= createPerson("xyz", 121, "software");
	var p2 = createPerson("abc", 234, "development");
	p1.sayName();
	p2.sayName();
	alert(p1.sayName == p2.sayName);
		
	</script>
<title>Full Name assignment</title>
</head>
<body style="text-align: center;">
	<div id="shw"></div>
	<button type="button" onclick="myFun()">Add Array</button>

</body>
</html>