// Using Parameterized Method in Java

class CreatingClassTeacher { // 'CreatingClassTeacher' is the class name
    String name, gender;
    int age; 

    // Parameterized Method to set information
    void setinformation(String n, String g, int a) { 
        name = n;
        gender = g;
        age = a; 
    }

    // Non-Parameterized Method to display the information, we always need it to print the information
    void display() { 
        System.out.println("Name: " + name);
        System.out.println("Gender: " + gender);
        System.out.println("Age: " + age);
    } 

    public static void main(String[] args) {

        // Create an object of the class CreatingClassTeacher
        CreatingClassTeacher teacher1 = new CreatingClassTeacher(); 
        
        // Call setinformation method using the object teacher1
        teacher1.setinformation("John", "Male", 30); 
        
        // Call display method to display the properties of the object
        teacher1.display(); 

        // Create an object of the class CreatingClassTeacher
        CreatingClassTeacher teacher2 = new CreatingClassTeacher(); 
        
        // Call setinformation method using the object teacher1
        teacher2.setinformation("Al Khattab", "Male", 23); 
        
        // Call display method to display the properties of the object
        teacher2.display();

        // Create an object of the class CreatingClassTeacher
        CreatingClassTeacher teacher3 = new CreatingClassTeacher(); 
        
        // Call setinformation method using the object teacher1
        teacher3.setinformation("Uthman", "Male", 35); 
        
        // Call display method to display the properties of the object
        teacher3.display();
    }



}
