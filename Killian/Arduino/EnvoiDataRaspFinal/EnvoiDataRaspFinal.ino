
String trameRecue="$GPGGA,123519,4807.038,N,01131.324,E,1,08,0.9,545.4,M,46.9,M, , *42";
String trameEnvoi="";

void setup() {
  // initialize serial:
  Serial1.begin(9600);
  Serial.begin(9600);
  // make the pins outputs:

}

void loop() {
  // if there's any serial available, read it:
    String lattitude; lattitude=trameRecue.substring(7,24);
    String longitude; longitude=trameRecue.substring(25,36);
    trameEnvoi="0x01;"+lattitude+";"+longitude;
    Serial1.println(trameEnvoi);
    delay(5000);
}
