String tabdata[15];
int index,idx;
String trameGGA,data;
void setup() {
  // initialize both serial ports:
  Serial1.begin(9600);
  Serial.begin(9600);
  while (!Serial1) {
     ;
  };
  Serial.println("this is serial");

}
void loop() {
  // read from port 1, send to port 0:
  if (Serial.available()) {
    int inByte = Serial.read();
    Serial1.write(inByte);
  }
  
  if (Serial1.available()) { 
     data = Serial1.readStringUntil('\n');
    if (data.startsWith("$GPGGA") == true){
          Serial.println("GGA TROUVE!!!!!");
          trameGGA=data.substring('\n');
          Serial.println(trameGGA);
          index=trameGGA.indexOf(',');
          tabdata[0]=trameGGA.substring(0,index);
          tabdata[1]=trameGGA.substring(index+1,trameGGA.length());
          Serial.println(tabdata[0]);                              
          Serial.println(tabdata[1]);
      for(idx=1;idx<14;idx++)
        {   
            index=tabdata[idx].indexOf(',');        
            tabdata[idx+1]=tabdata[idx].substring(index+1,tabdata[1].length());
            tabdata[idx]=tabdata[idx].substring(0,index);
        }       
    for(int id=0;id<14;id++) 
       {Serial.println(tabdata[id]);}                              
     
       
  }
  }
}
