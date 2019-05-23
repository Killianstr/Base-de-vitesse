#include <SPI.h>
#include <LoRa.h>

String tabdata[15];
int index, idx;
String trameRMC,data,datatosend;
String temp;
float vitessekm;

void setup() {
  Serial.begin(9600);
  while (!Serial);

  Serial.println("LoRa Receiver");

  if (!LoRa.begin(866E6)) {
    Serial.println("Starting LoRa failed!");
    while (1);
  }
}

void loop() {
  
  // try to parse packet
  int packetSize = LoRa.parsePacket();
  if (packetSize) {
    // received a packet
    Serial.print("Received packet '");
    data = LoRa.readStringUntil('\n'); //détecte le fin de ligne et stocke tout ce qu'il y a avant
    Serial.print("data: ");   
    Serial.println(data);
  if (data.startsWith("$GPRMC") == true) { //trouve la ligne qui commence par $GPRMC
      Serial.println("RMC TROUVE!!!!!");
      trameRMC = data.substring('\n');
      Serial.println(trameRMC);
      index = trameRMC.indexOf(',');                               //***********************************************
      tabdata[0] = trameRMC.substring(0, index);                  //  Initialisation de la première data et du reste
      temp = trameRMC.substring(index + 1, trameRMC.length());   // ************************************************
    //  Serial.println(tabdata[0]);
//      Serial.println(tabdata[1]);

      for (idx = 1; idx < 13; idx++)  //boucle qui va réduire la variable temp et enregistrer toutes les données du tableau
      {
        index = temp.indexOf(',');
        if (index != 0)
          tabdata[idx] = temp.substring(0, index);
        else
          tabdata[idx] = "";    
          
        temp = temp.substring(index + 1, temp.length());
        Serial.print("temp");
        Serial.print(idx);
        Serial.print(": ");
        Serial.println(temp);
      }
      for (int id = 0; id < 13; id++)   //affiche tout le tableau
      {
        Serial.print('|');
        Serial.print(tabdata[id]);
      }
        Serial.println('|');
      vitessekm=(tabdata[6].toFloat()*1.852);
    //String(vitesse);
      Serial.println(vitessekm);
      datatosend=tabdata[2]+tabdata[3]+tabdata[4]+'|'+tabdata[5]+'|'+tabdata[6]+'|'+vitessekm+'|'+tabdata[12];
      Serial.println(datatosend); // Longitude|Lattitude|VitesseNoeuds|VitesseKm/h
    Serial.print("' with RSSI ");
    Serial.println(LoRa.packetRssi());
  } 
}
}
