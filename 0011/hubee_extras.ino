
void loop()
{
  moveDistance(100) //100mm
  turnDegrees(90)   //90Deg
  moveDistance(100) //100mm
  moveDistance(100,false) //-100mm
  turnDegrees(90,false)   //-90Deg

  end()
}



int dis2enc(dist){
  encCalc = 1.47262155637; //mm -  (2*pi*30) / 128 - ASSUMING RADIUS OF WHEEL IS 30mm ... CHECK!!!!
  enc = dist / encCalc;
  return int(enc)
}

int rot2enc(deg){
  circumfrence = 628.318530718; //mm -  (2*pi*100) - ASSUMING RADIUS OF ROBOT IS 100. THIS MUST BE MODIFIED!!!!!!
  cirDeg = circumfrence/360; // 1.74532925199 encoder counts per degree of robot turn
  enc = deg/cirDeg;
  return int(enc)
}

void end()
{
  while (1 = 1){}
}



// Move a distance 
void moveDistance(distance,direction = true) // set direction to false for reverse
{
  wheel_1QeiCounts = 0;
  wheel_2QeiCounts = 0;
  if(direction == true)
  {
    while(wheel_1QeiCounts <= dis2enc(distance)) 
    {
      wheel_1.setMotorPower(1); // what is on?
      wheel_2.setMotorPower(1); // what is on?
    }
  }else{
    while(abs(wheel_1QeiCounts) <= dis2enc(distance)) // abs is used to correct for negative wheel_1QeiCounts when reversing
    {
      wheel_1.setMotorPower(-1); // what is reverse?
      wheel_2.setMotorPower(-1); // what is reverse?
    }
  }
  wheel_1.setMotorPower(0); // off?
  wheel_2.setMotorPower(0); // off?
}


// Move a distance 
void turnDegrees(degrees,direction = true) // set direction to false for right?
{
  wheel_1QeiCounts = 0;
  wheel_2QeiCounts = 0;
  if(direction == true)
  {
    while(wheel_1QeiCounts <= rot2enc(degrees)) 
    {
      wheel_1.setMotorPower(1); // forward?
      wheel_2.setMotorPower(-1); // back?
    }
  }else{
    while(abs(wheel_1QeiCounts) <= rot2enc(degrees)) // abs is used to correct for negative wheel_1QeiCounts when reversing
    {
      wheel_1.setMotorPower(-1); // back?
      wheel_2.setMotorPower(1); // forward?
    }
  }
  wheel_1.setMotorPower(0); // off?
  wheel_2.setMotorPower(0); // off?
}