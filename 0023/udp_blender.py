import socket
import time
from bge import logic

UDP_IP="192.168.10.10"
UDP_PORT= 991
message=""

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

mname=["maw64","maw65","maw66","maw67","maw68","maw69"]
mval=[500,500,500,500,500,500]

def sendUDP():
	i = 0
	while i < len(mname):
	   message = str(mname[i]) + "=" + str(mval[i]) + "\r\n"
	   s.sendto(bytes(message, 'UTF-8'), (UDP_IP, UDP_PORT))
	   i += 1

sendUDP()
print("Finished")