import socket
import time
UDP_IP="192.168.10.10"
UDP_PORT= 991
message=""

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

mname=["maw64","maw65","maw66","maw67","maw68","maw69"]

def sendUDP():
	i = 0
	while i < len(mname):
	   message = str(mname[i]) + "=" + str(mval[i]) + "\r\n"
	   s.sendto(message, (UDP_IP, UDP_PORT))
	   print message
	   i += 1


mval=[500,500,500,500,500,500]

sendUDP()
print "Finished"