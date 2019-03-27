byte sens_M1;
byte vitesse_M1;
byte sens_M2;
byte vitesse_M2;
byte receive_buf[3];
int i=0;

void setup() {
  // initialize serial:
  Serial3.begin(9600);
  Serial.begin(9600);
  // make the pins outputs:

}

void loop() {
  // if there's any serial available, read it:
 if (Serial3.available()) {
  
    Serial3.readBytes(receive_buf, 3);
    sens_M1=receive_buf[1]>>7;
    vitesse_M1=receive_buf[1] & 0x7F;
    sens_M2=receive_buf[2]>>7;
    vitesse_M2=receive_buf[2] & 0x7F;
    Serial.println(" ");
    Serial.println("- - - - - - Moteur M1 - - - - - - Moteur M2 - - - - - -");
    
    if (sens_M1==1)
    { 
      Serial.print("Sens:           Avant");
    }
    else if (sens_M1==0)
    {
      Serial.print("Sens:         Arriere");
    }

    
    if (sens_M2==1)
    { 
      Serial.println("       |         Avant           |");
    }
    else if (sens_M2==0)
    {
      Serial.println("       |       Arriere           |");
    }
    Serial.print("Vitesse:           ");
    Serial.print(int(vitesse_M1));
    Serial.print("       |             ");
    Serial.print(int(vitesse_M2));
    Serial.println("          |");

  }
    delay(1000);
}
