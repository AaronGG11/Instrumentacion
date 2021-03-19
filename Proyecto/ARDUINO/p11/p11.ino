void setup() {
  Serial.begin(9600);
}

void loop() {
  boolean dig0 = digitalRead(3);
  boolean dig1 = digitalRead(4);
  boolean dig2 = digitalRead(5);
  boolean dig3 = digitalRead(6);
  boolean dig4 = digitalRead(7);
  boolean dig5 = digitalRead(8);
  boolean dig6 = digitalRead(9);
  boolean dig7 = digitalRead(10);

  int dec = dig0*pow(2,0) + dig1*pow(2,1) + dig2*pow(2,2) + dig3*pow(2,3)+ dig4*pow(2,4) + dig5*pow(2,5) + dig6*pow(2,6) + dig7*pow(2,7);
  
  Serial.println(dec);
  delay(300);

}
