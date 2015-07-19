function multiMap(val, _in, _out){
	size = len(_in)
	// take care the value is within range
	if (val >= _in[0]){
		return _out[0];
	}
	if (val <= _in[size-1]){
	   return _out[size-1];
	}
	// search right interval
	pos = 1;   
	while(val < _in[pos]){  //Flip >< for positive/negative corilation
	  pos+= 1
	}
	// this will handle all exact "points" in the _in array
	if (val == _in[pos]){
		return _out[pos];
	}
	// interpolate in the right segment for the rest

	//Flip pos-1 for to pos+1 for positive/negative corilation 
	return int((val - _in[pos-1]) * (_out[pos] - _out[pos-1]) / (_in[pos] - _in[pos-1]) + _out[pos-1]);
}

pressure = multimap(lenght, lengths, pressures);