//Encapsulation and setter and getter methods

class Person {

    private String name; // private access only in this class
    private int age; 

// Now we need to declare a public method to access these private variables
// This is called setter and getter methods
// setter method is used to set the value of private variable

public void setName(String name) { 

// Here bellow we used this. keyword to refer to the current object
//this.name = name here this.name means the private variable name
// and name means the local variable name
// So this.name = name means the private variable name is equal to the local variable name

this.name = name;
 }

// getter method is used to get the value of private variable
public String getName() {
    return name;
 }

 //same as above
public void setAge(int age) {
    this.age = age;
 }

 //same as above
public int getAge() {
    return age;
 }

 void display() {
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
 }

 public static void main(String[] args) {

    Person p = new Person();
    p.setName("John");
    p.setAge(25);
    p.display();
 }


/* 
Note:
  Now if we dont use void display() method then we can use the main method as bellow -
  Public static void main(String[] args) {
  Person p = new Person();
  p.setName("John");
  p.setAge(25);
  System.out.println("Name: " + p.getName());
  System.out.println("Age: " + p.getAge());
 */


}


    
