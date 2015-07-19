lengths   = [790 ,785 ,775 ,757 ,733 ,713 ,697 ,686 ,676 ,668 ,666 ]  
pressures = [0   ,500 ,1000,1500,2000,2500,3000,3500,4000,4500,5000]  

def multiMap(val, _in, _out):
  size = len(_in)
  # take care the value is within range
  if (val >= _in[0]):
    return _out[0]
  if (val <= _in[size-1]):
       return _out[size-1]

  # search right interval
  pos = 1;   
  while(val < _in[pos]):  #Flip >< for positive/negative corilation
      pos+= 1
  # this will handle all exact "points" in the _in array
  if (val == _in[pos]):
    return _out[pos]
  # interpolate in the right segment for the rest

  #Flip pos-1 for to pos+1 for positive/negative corilation 
  return int((val - _in[pos-1]) * (_out[pos] - _out[pos-1]) / (_in[pos] - _in[pos-1]) + _out[pos-1])   

length = 760 #mm
pressure = multimap(lenght, lengths, pressures)