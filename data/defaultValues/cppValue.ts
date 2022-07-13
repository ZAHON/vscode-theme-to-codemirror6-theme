export const cppValue = `#include <iostream>
#include <fstream>

int main() {
  string line;
  ifstream file;

  file.open("myfile.txt");

  // Read file line by line
  while(getLine(myfile, line)) {
    printf("%s", line.c_str());
  }
}`;
