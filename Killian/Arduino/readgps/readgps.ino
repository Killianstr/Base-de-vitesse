//parseSerial pour trier le string en tableau de string separé par les ","

void setup() {
  // initialize both serial ports:
  Serial1.begin(9600);
  Serial.begin(9600);
  while (!Serial1) {
     ;
  };
//  Serial1.println("this is serial");
//  Serial.println("this is serial1");
}

String lattitude; 
String longitude;
String vitesseN;
String vitesseK;
int idx=0;

void loop() {
  // read from port 1, send to port 0:
  if (Serial.available()) {
    char inByte = Serial.read();
  //  Serial1.write(inByte);
    if (inByte = "$GGA"){
        while (idx < 14 )
          {
            if (inByte == ',') {idx++;} 
              if (idx == 2)
                
              {
                while(idx<4)
                  {lattitude+=inByte;}
              } 
            if (inByte == 4)
            {
              while (idx<6)
                {longitude+=inByte;}
            }
          }      
      } 
  
    if (inByte = "$GPVTG"){
      if ((idx >= 5) and (idx <=6))
        {vitesseN += inByte;}
      if ((idx >= 7) and (idx <=8))
        {vitesseK += inByte;}        
    }
  }

   
  // read from port 0, send to port 1:
  //if (Serial1.available()) {
 //   char inByte = Serial1.read();
    Serial.println(longitude);
    Serial.println(lattitude);
    Serial.println(vitesseN);
    Serial.println(vitesseK);

    
    //  Serial.write(vitesse);
 //}
}
