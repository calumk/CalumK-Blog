It's a clever bit of kit, and as well as manual control, you can program it to
do various tasks. The programming language is (VERY) old, but seems to be
quite robust, and in my on-going plan to document my work, I thaught I'd give
a breakdown of how the code works, and some tricks I picked up to navigate the
system But first things first, Lets see what im talking about:  

<iframe width="640" height="360" src="https://www.youtube.com/embed/OQa0oXJF0Vw" frameborder="0" allowfullscreen></iframe>

In the video
above, the Arm is programmed to build the little toy house. The blocks are a
'foam' material (which causes problems ill elaborate on later) The assignment
was to place the blocks exactly 500mm away, however it is noted that "good
programming practices must be used" The code running, will position the house
anywhere I want along the table; All I have to do is specify a distance (in
mm) away from the starting position. By default, each "position" the arm moves
to is saved in a variable, known as a "teachable cloc". This is a hard-coded
position. My Initial attempt at programming the arm used a list of variables,
as shown below 
<script src="https://gist.github.com/calumk/9344edb3b580f1b19f2f.js?file=initialCode.r3"></script>

This might not look 'too' bad, but
consider there are 6 blocks, you have six sets of this code, and a lot of
repatition... there had to be a better way.

## Abstracting the grip and release functions

Functions in RAPL-3, are reffered to as "subroutines" Its important to think
through how we want to simplify our code. In my case, I chose to have a grip
and release sub-routine, that lowers the arm, and then either grips, or
releases the block. In RAPL-3 you can use the command wz(-50) to move the arm
vertically down 50mm "wz : World Z-Axis" So I made two subroutines pickUp()
and putDown(): 

<script src="https://gist.github.com/calumk/9344edb3b580f1b19f2f.js?file=subroutines.r3"></script>

 Now, I only need to store 2 cloc
values for each block. One, above the blocks start position, and Two, above
the blocks finish position: 

<script src="https://gist.github.com/calumk/9344edb3b580f1b19f2f.js?file=slightlyBetterCode.r3"></script>

This is much better. But still falls short of what I would like... With 6 blocks, its still
a lot of variables and the code is more like a list than anything usefull..

## Looping, and Arrays

Arrays Arrays Arrays, so much fun... The teachable cloc variables can actually
be an array eg: "move(block1[0])" This is usefull as we can loop through
them... Even more helpful is that we can make it a 2D array eg:
move(block[0][0]) So by setting up a 6x2 array (6 blocks / rows, 2 states /
columns) we can itterte through it with a for loop

<script src="https://gist.github.com/calumk/9344edb3b580f1b19f2f.js?file=muchBetterCode.r3"></script>

 This is MUCH MUCH better.

## Fun Things

So, my modifying this a little, we can make the code more fun By adding a
movement of joint 7 (the horizontal track) just before we put the block down,
we can alter the distance away that the house is built.

<script src="https://gist.github.com/calumk/9344edb3b580f1b19f2f.js?file=funCode1.r3"></script>

Using an If statment and another subroutine, I am
also able to define the width of the 'door' in the house.. but Ill leave you
to work that out for yourselves....

## Quirks

grip_close(20) - we use 20 because this is 'about' the right force to pick up
one of the foam blocks without 1) puncturing it 2) dropping it! delay(1000) -
we have to use a delay of about one second when waiting for the gripper to
close. It appears grip_finish(), reports it finishing before it actually has
syntax highlighting - There is none... Deal with it.

## Final Code

So ok, this isnt my 'final code' but it is clean, and should function and
compile well! 

<script src="https://gist.github.com/calumk/9344edb3b580f1b19f2f.js?file=finalCode.r3"></script>



##  Update

So I went back to the robotic arm this morning to make some tweaks and took a
moment to lift the code of the pc (its not networked and is a self-contained
pc, so I never had a copy of my actual code when i wrote this blog post) Ive
supplied the actual code below. It contains a lot of "quirk fixes" and also
the code to allow the house to be built in a specific way (door size).. so
sorry if it doesnt make much sence. If in doubt, refer to my final code above.
I just thaught it might be good to have a copy of both here.

<script src="https://gist.github.com/calumk/9344edb3b580f1b19f2f.js?file=finalCode2.r3"></script>
