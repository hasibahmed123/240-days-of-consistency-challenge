// Using display Method in Java

class CreatingClassTeacher { // Here 'CreatingClassTeacher' is the class name
    String name, gender;
    int age;

    void display() { // Non-Parameterized Method
        System.out.println("Name: " + name);
        System.out.println("Gender: " + gender);
        System.out.println("Age: " + age);
        //Display Method is used to display the properties of the object
        //Display method and its print statements must be inside the {} 
    } 

    public static void main(String[] args) {

        // Now we will create an object of the class CreatingClassTeacher

        CreatingClassTeacher teacher1 = new CreatingClassTeacher();
        // Here 'CreatingClassTeacher teacher1' is object declaration and 'new CreatingClassTeacher()' is object creation

        teacher1.name = "Mr. John"; // Here 'teacher1.name' is object reference, that is how to access the object properties
        teacher1.gender = "Male";
        teacher1.age = 30;
        teacher1.display(); // Here 'teacher1.display()' is calling the method, we can call the method using object reference
    }
}
