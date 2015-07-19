#EL CAPITAN IS DIFFERENT

Just a mini blog post to say that if you find after updating to EL CAPITAN, that any of your **CH340G** based arduinos are not working, here is what you need to do:


##IMPORTANT

**This is potentially unsafe**

In El Capitan OSX 10.11, this kind of modification is blocked by a new feature called "System Integrity Protection". 

It is also known as "Rootless". 

The feature prevents both modifications to your system files, and to system processes whilst they are running (even if you enter your password for administrator access).

You can turn System Integrity Protection off. "rootless=0"

But... it affects all the new protections.

You have been warned, 
<center>
<h2><i>Here be dragons</i></h2>
</center>




### Step 1
First install the drivers, like normal, from [www.wch.cn/download/CH341SER_MAC_ZIP.html](www.wch.cn/download/CH341SER_MAC_ZIP.html)

### Step 2
Then open terminal and type:

		sudo nvram boot-args="kext-dev-mode=1 rootless=0"
		
This is different from the Yosemite command:
	
		sudo nvram boot-args="kext-dev-mode=1"
		
### Optional (If still not working)

Remove **usb.kext** from **/System/Library/Extensions** and then repeat the above steps
		
	

