![](BaxUI_long.png)

##  Why?

So the reason I chose to write this post was I recently decided to make a GUI
for the screen on the baxter robot. (see my previous posts) So I wrote a
little framework for baxter that allows us to quickly create GUI's Ill put the
download link at the bottom (Trust me you want to read the post before you
download it) Now. I am only just getting into python so I am sure that there
are many many errors with my python code. Its buggy, probably resource
intesive, and I know for a fact that there is one bit that is just plain
horrible. BUT!. With that in mind, I leave it open to the comments to correct
my mistakes please! First and formost a little video for you all. I know you
all like these so here we go:  

#### DISCLAIMER: The design is fairly simple and is *borrowed* off a similar GUI I saw when the robot was demonstrated to me several months ago, by the UK supplier. I believe it is a GUI they custom coded. However after a fair bit of searching I could find anything about it online or anything comparible, and so BaxUI was born 

#  How does BaxUI work?

Essentially I have written 2 versions of BaxUI. One is generic and has no ROS
bindings or callbacks of any kind. Its it is simply a python script that draws
an openCV window. that you can control with the keyboard. The second is
identical, but comes with the ROS Bindings and hooks into ONE of the Baxters
"navigators" (the buttons on the arms). and allows you to control it on the
baxters face. NO GUI IS DISPLAYED ON THE COMPUTER IN THIS MODE. To include it
in your project, simply call "import BaxUI" - for the Baxter mode, or "import
BaxUI_S" - for standalone mode For the purpose of this walkthrough, Im going
to keep it generic and explain the standalone mode, and the baxter mode should
be an obvious extention of this.

##  Show me a simple example of how to generate a menu calum!

Ok, since you asked so niceley: 

<script src="https://gist.github.com/calumk/2c2658be4023a035f27a.js?file=simpleMenu.py"></script>

Thats it! three lines of code will generate this lovely menu system! 

<div class="gallery" markdown="1">
*	![](SimpleMenu/SecondMenu.png)
</div>

You
can use the arrow keys (UP & DOWN) to 'scroll' through the options, you can
use enter to select a menu option If you have more than 4 options, they will
appear on the right too. 8 is the MAXIMUM number of options.

## Ok great, but how do I make this menu do anything?....

Good question. Like this: 

<script src="https://gist.github.com/calumk/2c2658be4023a035f27a.js?file=simpleMenuFunctions.py"></script>

Hopefully you
can tell from that snippet that when you select the second menu option, the
words "I just got told to do something" have been printed to the console. Its
a fairly obvious call. But you could of course launch somehting more complex:
<script src="https://gist.github.com/calumk/2c2658be4023a035f27a.js?file=simpleMenuBash.py"></script>

#### note:: That is a crude way of doing it and "blocks" the UI while the bashScript.sh is running. But its only a suggestion.

## Did someone say "submenus"?....

YES!! submenus are equally easy to impliment: To enter a submenu, press enter,
as you would to run a function. To go back up a level, press the backspace
key. 

<script src="https://gist.github.com/calumk/2c2658be4023a035f27a.js?file=subMenu.py"></script>

<div class="gallery" markdown="1">
*	![](submenu/menu.png)
*  	![](submenu/submenu.png)
</div>

#### Navigation can get confusing in multi-layer menu systems, I plan to add a "menu title" option, but havent quite got round to it yet... 

## Did someone say "option menus"?....

I havent totally decided if this is usefull or not, but I added the option to
set variables using the GUI. Its probably quiker to hardcode this stuff, but
you never know people might find a use for it. The following example shows how
on the first page we could have a menu item called "print name". This would
print the robots 'name' variable to the terminal. EG: "Baxter" By adding an
option selector, we can toggle the name between "Bertie" or "Baxter" and then
return to the main menu, and print it. 

<script src="https://gist.github.com/calumk/2c2658be4023a035f27a.js?file=optionMenu.py"></script>

<div class="gallery" markdown="1">
*	![](optionmenu/1.png)
*	![](optionmenu/2.png)
* *	![](optionmenu/3.png)
* *	![](optionmenu/4.png)
* *	![](optionmenu/5.png)
</div>

#  The Baxter version

The baxter version is identical in nearly every way, except that it uses the
navigator instead of the keyboard. Currently I've only coded it for the right
hand navigator. I should expand it really, I might post an update durin the
week. ALSO. owing to a weird problem i cant seem to solve in the translation
between cv2 (OpenCV) and the cv/cv_bridge to ros, it currently writes to file
every time the screen updates. This is not a huge problem as the screen only
updates when there is a user input, but it does mean that if a user scrolls
through a list, then a file is generated, and read-back maybe 6 or 7 times.
Its not ideal, but it works. I would love someone to solve it for me!

#  LICENCE

This software was never really intended for public use. It works, and i have
had no problems with it, but it is quite memory intensive, and not "clean
code". Use at your own risk! Oh, and its licensed GPL v2 Other (more
permissive) licensing is available, please contact me for more information

#  Downloads etc

ALL contributions are welcome, just leave me a message in the comments! Now
thats out the way! here is the code:

## ZIP:

This contains: BaxUI.py , BaxUI_S.py , optionMenu.py & bg.png [Download Here
:)](BaxUI.zip)

## The Simple version - NOT BUILT FOR ROS/BAXTER:

<script src="https://gist.github.com/calumk/2c2658be4023a035f27a.js?file=BaxUI_S.py"></script>

## The ROS/BAXTER version:

<script src="https://gist.github.com/calumk/2c2658be4023a035f27a.js?file=BaxUI.py"></script>


