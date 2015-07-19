<center>
![](baxter.png)
</center>

Baxter is a 'humanoid' robot, comprising of a torso, two arms and a head. It
is designed to work in factory environments, but is also well suited to
education and research establishments, and as such, Middlesex invested in one,
so that myself, and several other people on my course, could use it as a basis
for our final year project. At approximatly 26,000 the robot is supprisingly
cheap.

#  Hello World

Let me preface this by saying that I want to try and cover all the basis here,
so excuse me if some of the steps are simple and/or redundant. This is not so
much a demonstration of what i have done with baxter, but more a "getting
started" guide to how best to configure the baxter.

#  Hardware Setup

As Baxter is based on ROS, it is connected to as a network device. Plug the
Network cable into Baxter, and the other end into a router that supports DNS.

  

You will want to set baxter so that its mac address is assigned a constant IP,
This makes it MUCH easier to start baxter each time. Simply conenct your
laptop/pc to the router as well, and you should be able to talk directly to
baxter. We are using a TP-Link router. [quick shout out, I love TP-Link
routers. They are stupidly easy to control.] You can buy it online on 
[ amazon!](http://www.amazon.co.uk/gp/product/B008QBAXI4/ref=pd_lpo_sbs_dp_ss_3?pf_rd_
p=103612307&pf_rd_s=lpo-top-stripe&pf_rd_t=201&pf_rd_i=B002YETVTQ&pf_rd_m=A3P5
ROKL5A1OLE&pf_rd_r=0FQ73QQEG6C909V633SZ)

#  Software Setup

Obviously as this is a ROS based device, you need to talk to it with... wait
for it.... ROS! Download and install the latest version of ROS/ubuntu. I
prefer to run mine inside a VM. Much easier to backup, move around and
generally play with network settings. Latancy might be an issue, but I havent
found any major issues yet. (2011 Dual-core macbook pro, 8GB ram) Im not going
to go and duplicate the settup instructins here, but I recomend you read the [
wiki link ](https://github.com/RethinkRobotics/sdk-docs/wiki/Development-
Workstation-Setup-Instructions)

##  Baxter workspace

The official supported version of Baxter is ROS:Groovy, but I have been using
Hydro for a while now and hae had no issues. Infact, I believe it might even
be nessasary for some of the support needed in my seccond tutorial, so be
warned! Im using Hydro.

##  baxter.sh & shutup.sh

Once the Hydro Workspace has been succesfully installed, we can edit the
properties in the baxter.sh file. This amazing file is a one-stop config file
for terminal windows. from any terminal run "bash ~/ros_hws/baxter.sh" and you
will be ready to talk to baxter. BE WARNED. its easy to forget to do this, but
you must run it from EVERY terminal window before you start. I found it
usefull to write a second optional script, entitled shutup.sh. Baxter has 20
ultrasound sensors located in its head, that can be used to quickly map out
its envronmant. I find that i can hear them, and they make an annoying popping
noise, and a feeling similar to airplane decompression. So I like to turn them
off. The shutup script also sends a custom image to the baxters screen, a sort
of "branding" splash screen that shows the name of my current project, and it
also starts up the gripper callibration routine, which must be performed every
time the robot is turned on (unlike the arm callibration routine) Ive included
it here... just in case! 

<script src="https://gist.github.com/calumk/f9ae20da6e145b18bcf7.js?file=startup.sh"></script>

#  The exciting bit!

to get started, its pretty simple, ensure that there is pleanty of space for
the robot to move, and run: 

<script src="https://gist.github.com/calumk/f9ae20da6e145b18bcf7.js?file=tuck.sh"></script>

#  Callibration!

Callibration is boring but nessasary. Luckily it is not complicated. Once a
month, run:


<script src="https://gist.github.com/calumk/f9ae20da6e145b18bcf7.js?file=calibrate.sh"></script>



#  Python!

Ok I hate python. Everything about me hates python. 

Its a rediculous language & it makes little to no sence to me. I dont like it. This sums it up:
<center>
![](python.png)
</center>

But actually, its pretty nice for programming baxter. No
recompiling and easy hooks into opencv and ROS. So python is my language of
choice for the following project. I'm starting with a script written by [user] . Ive attached it in full below. 

It's a really great way to get started. After that, Ive written my own simple file
which contains simple calls for moving baxter relativly, after that, calling
baxter to move is as simple as: 

<script src="https://gist.github.com/calumk/f9ae20da6e145b18bcf7.js?file=BaxterMoveSamples.py"></script>

Simple huh! Thats it for today, Ill write a second post
detailing how I went form this, to the code to build towers, some time before
the end of the week.

