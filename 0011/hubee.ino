//
//  Sample script to allow your robots to move exact distances (to within 1.4mm) and to turn degrees. 
//  Should be as accurate as possible, but not 100% convinced the encoder code is correct. (I didnt write that bit) So Worth checking manually that there are 128 counts reported per revolution.
// 
//  Make sure you settup the pins correctly. This may not work out of the box. 
//
//
// 1.  You will need to add in the Correct circumfrence equation from your robot. This is the pi*D where D is the distance between the CENTER of each wheel - This can be changed in the rot2enc() function. - hardcode it, dont leave it as math. too slow.
//
// 2. Not TESTED!!!!


#include <HUBeeBMDWheel.h>

//declare two wheel objects - each encapsulates all the control functions for a wheel
HUBeeBMDWheel wheel_1;
HUBeeBMDWheel wheel_2;

int wheel_1Speed, wheel_2Speed; //wheel speed variables

int wheel_1QeiAPin  = 3; //external interrupt 0 used for wheel 1 encoder chanel A
int wheel_1QeiBPin  = 7; //wheel 1 encoder chanel B input
int wheel_2QeiAPin = 2; //external interrupt 1 used for wheel 2 encoder chanel A
int wheel_2QeiBPin = 4; //wheel 2 encoder chanel B input

int wheel_1QeiCounts, wheel_2QeiCounts; //quadrature encoder counter variables


void setup()
{
  pinMode(wheel_1QeiAPin, INPUT_PULLUP);
  pinMode(wheel_2QeiAPin, INPUT_PULLUP);
  pinMode(wheel_1QeiBPin, INPUT_PULLUP);
  pinMode(wheel_2QeiBPin, INPUT_PULLUP);
  wheel_1.setupPins(8,11,9); //setup using pins 12 and 2 for direction control, and 3 for PWM speed control
  wheel_2.setupPins(12,13,10);//setup using pins 13 and 4 for direction control, and 11 for PWM speed control
  wheel_1.setDirectionMode(0); //Direction Mode determines how the wheel responds to positive and negative motor power values 
  wheel_2.setDirectionMode(0);
  wheel_2.setBrakeMode(0); //Sets the brake mode to zero - freewheeling mode - so wheel 2 is easy to turn by hand

  attachInterrupt(0, QEI_wheel_1, CHANGE);
  attachInterrupt(1, QEI_wheel_2, CHANGE);
  wheel_1Speed = 0;
  wheel_1QeiCounts = 0;
  wheel_2QeiCounts = 0;
}


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












void QEI_wheel_1() //removed the comments
{
  if(digitalRead(wheel_1QeiAPin))
  {
    if(digitalRead(wheel_1QeiBPin))
    {
      wheel_1QeiCounts--;
      return;
    }
    wheel_1QeiCounts++;
    return;
  }
  if(digitalRead(wheel_1QeiBPin))
  {
    wheel_1QeiCounts++;
    return;
  }
  wheel_1QeiCounts--;
}


void QEI_wheel_2() //removed the comments
{
  if(digitalRead(wheel_2QeiAPin))
  {
    if(digitalRead(wheel_2QeiBPin))
    {
      wheel_2QeiCounts--;
      return;
    }
    wheel_2QeiCounts++;
    return;
  }
  if(digitalRead(wheel_2QeiBPin))
  {
    wheel_2QeiCounts++;
    return;
  }
  wheel_2QeiCounts--;
}
