The tower of Hanoi is a mathmatical puzzle that is fairly well known. In it, they player must attempt to move the tower across three pillars, but can only move the rings under certain strict conditions:  

1\. Smaller rings must always be ontop of larger rings. (never the other way round)  
2\. Only the top ring on each pillar can be moved  
3\. Only one ring can be moved at a time  

<center markdown="1">
![Towers Of Hanoi](anim.gif) 
</center>  


These conditions make the game a fun challenge.  

It is possible to solve the puzzle in: 2^n - 1 moves, where n is the number of rings.  

A good solution for the towers can be found by following a routine:  

Even number of rings:   
A <-> B  
A <-> C  
B <-> C  

Odd number of rings:   
A <-> B  
A <-> C  
B <-> C  

Note, that the ring is always moved so the smallest is placed on the biggest  

## Code

My final code for this project will be in a different language, but for now i wanted to try and write a python based solution, partly for fun, and partly to think about data structures.  

I came across a [post](http://www.python-course.eu/towers_of_hanoi.php) aimed at teaching recursive programming using python that solved the problem very effectivly.   
Their solution, used recursive calls to solve the tower.  

## Their Code

<p><script src="https://gist.github.com/calumk/4ee644c6c49e0b368ee1.js?file=Hanoi_pc.py"></script></p>

It is beautiful code, that solves the towers in just 11 lines of python, however getting your head around the recursion is quite painful.  
 Additionally, their code uses objects (combined strings and arrays with names) which i know is not an option in my final chosen language  
 It also uses a python quirk to check for empty arrays, my version uses a fairly stndard try catch method.  

And so I decided to write a longer, but slightly friendlier version.  

Essentially, my version utilises three Arrays, A, B & C.   
The tower starts on A  
 1 = biggest ring  

While the tower is not fully on C, the swaps are made.  

## My Code

<p><script src="https://gist.github.com/calumk/4ee644c6c49e0b368ee1.js?file=Hanoi_ck.py"></script></p>

This wont be useful to everyone, but it was for me :)  