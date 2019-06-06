String tabdata[15];
int index, idx;
String trameRMC,data,datatosend;
String temp;
float vitessekm;
void setup() {

  Serial1.begin(9600);
  Serial.begin(9600);
  while (!Serial1) {
    ;
  };
  Serial.println("this is serial");
}

void triTrameNMEA(String Start,String trame,int nbindex,String *tableau) //fonction qui extrait une trame de la trame NMEA et trie la donnee dans un tableau
{
    if (data.startsWith("$GP"+Start) == true) //trouve la ligne qui commence par $GPRMC
     { 
       index = trame.indexOf(',');
       tableau[0] = trame.substring(0, index);
       temp = trame.substring(index + 1, trame.length());
       for(idx=1;idx<nbindex+1;idx++)
          {
             index = temp.indexOf(',');
             if (index != 0)
                tableau[idx] = temp.substring(0, index);
             else
                tableau[idx] = "";       
             temp = temp.substring(index + 1, temp.length()); 
           }
     }
}

void loop() {
  if (Serial.available()) {
    int inByte = Serial.read();  //met en écoute le port 0 et écrit sur le port 1
    Serial1.write(inByte);
  }

  if (Serial1.available()) {
      data = Serial1.readStringUntil('\n');      //détecte le fin de ligne et stocke tout ce qu'il y a avant
      Serial.println(data);
      trameRMC = data.substring('\n');
      Serial.println(trameRMC);
      triTrameNMEA("RMC",trameRMC,12,tabdata);
      vitessekm=(tabdata[6].toFloat()*1.852);           //calcul vitesse en noeud
      datatosend=tabdata[2]+tabdata[3]+tabdata[4]+'|'+tabdata[5]+'|'+tabdata[6]+'|'+vitessekm+'|'+tabdata[12];
      Serial.println(datatosend);                      // Longitude|Lattitude|VitesseNoeuds|VitesseKm/h
    }
  }
  
  
