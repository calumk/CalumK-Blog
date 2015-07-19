Over the last month I graduated University **First!** and was employed to try and finish of a project
that had been lying around the uni un-touched for a year. The concept of the
project was/is [REDACTED FOR SECRACY].

A Fluidic Muscle, for thoes of you who
want to know, is essentially a long rubber tube that is sealed at one end. As
you pump air into it, it gets wider, and shorter. As you release air, it gets
thinner and longer. Essentially, It opperates in reverse to how you would
excpect a standard piston to work. Because of its elastic / bendy nature, it
should alow for a sort of 'automatic' suspension to be added to the rig.

##  The PLC

The CPX PLC I was using had 6 proportional valves connected to it, these were
hard-wired to 6 output words on the PLC, to change the length of one of the
muscles you simply change the output words to a value (0=long, 6000=short).
WHile you can do that from within the FST software, the CPX offers several
ways of connecting too it. As the documentation for how that works is a bit
naff, I thaught I would highlight some of the key features. The FST PLC's
offer a command interface. This allows you to send commands formatted in the
following way: [command][word]=[value] 

So to **M**odify the **64**th **O**utput **W**ord

"mow64=100"... simple!

# FALSCH!

Oops did no one tell you Festo is German? Too bad you loose. 

**M**odify **O**utput **W**ord = mow 

**M**odifizieren **A**usgang **W**ort = maw 

The correct CI would be "maw64=100" 

I knew I should have studdied harder in Mr
Heales German lessons...

## To TCP or not to TCP

So we know what to send but how do we send it? Well there are two main ways:

### HTTP

Http offers us the ability to perform a 'get' request on the server:
http://192.168.10.10/main.htm?ci:maw64=500 Limitations: Soooooo many. This way
sucks. Dont use it, Its slow and... I mean really? http get as a means of
updating a plc?

### TCP

TCP Rocks... I can accsess it in a beautiful terminal, simply telnet in with
the IP and port 991 telnet 192.168.10.10 991 Then send any command you like,
as many as you like (but if you pause for 60s you will be booted off, so keep
them coming) Limitations: From my trials and errors, I believe the minimum
time required to connect, send a command, and then boot out of there is about
0.1s. That might not seem like a lot to you and me, but actually this caused
me a fair amount of headache. My Game engine ran at about 40fps, and it meant
that the 0.1s the telnet server took to respond, caused a massive slow-down in
framerate. Obviously, this could be solved with a combination of threading and
other tricks, but it is still a limitation. I will talk more about this later.

## Blender

Blender is my engine of choice for a couple of reasons. 1) It is fully capable
of doing what I need it to do 2) Im familiar with it, so I will have a quicker
time prototyping 3) Python support built in, and a huge comminity of people to
fall back on when it all goes wrong. \- However - Blender threading is nothing
short of awfull, and there seem to be massive problems with telnet from within
the blender python interface. 

Sadly the blog post ends here, Unfortunalty development on this project has halted somewhat, and so I never got further than a simple blender link to the cpx, Hopefully the project will be resurected in the new year, but untill then, thats all folks. 

# UPDATE 1

#### So... several months on and I have re-visited this project, Hopefully I can post some photos and such soon, but for the moment let me jump on in and explain how I programmed it.

## UDP

UDP is the fast ugly version of TCP. It essentially works in exactly the same
way, you send messages to an IP address, but there is no handshaking. There is
no confirmation that the message has arrived. This basically makes it the
programing equivilent of shouting at someone, rather than having a
conversation. But as this project has no feedback control, this is fine for
our needs. This is actually especially helpful for blender, as the python in
blender runs on a "per frame" basis, and the TCP handshaking took precious
milliseconds, slowing the game-engine down. 

Now my game-engine runs super- fast. The code below shows how I structured the sending of commands.

Essentially I store the desired muscle pressures in an array, and then
itterate through them, spitting them out with the festo required
"mawXX=YY\r\n" format 

<script src="https://gist.github.com/calumk/14f9d2e5e5847ff480e0.js?file=udp.py"></script>



The Blender code is a little more complex, and requires a byte-conversion before sending the data via UDP (this is to do with legacy python versions)

I havent included the entier script.
It will be *open sourced* later on, but for now, this is how the coms protocol works.

<script src="https://gist.github.com/calumk/14f9d2e5e5847ff480e0.js?file=udp_blender.py"></script>



# UPDATE 2

#### So... several months on again!

Part of this work was used on the [Nuerosis](http://www.theguardian.com/technology/2015/feb/22/fairground-ride-that-can-read-your-mind-vr-brendan-walker-futurefest) project 

<center>
<iframe width="960" height="600" src="https://www.youtube.com/embed/HoWJmxQxOgA" frameborder="0" allowfullscreen></iframe>

</center>
