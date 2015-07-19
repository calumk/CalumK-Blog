<html> 
<head> 
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script> 
	<script src="skulpt.min.js" type="text/javascript"></script> 
	<script src="skulpt-stdlib.js" type="text/javascript"></script> 
	<script src="script.js" type="text/javascript"></script> 
	<style>
	python{
		display: none;
	}
	</style>
</head> 
<body> 

<python data-output="thediv">
name = raw_input('What is your name?\n')
print 'Hi, %s.' % name
age = raw_input('How old are you?\nEG: 21')
print 'Ahh ok, you are %s.' % age
</python>

<pre id="thediv">
hello world
</pre>
 
</body> 
</html> 