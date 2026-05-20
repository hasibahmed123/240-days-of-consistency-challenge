// Constructor overloading in Java
// Constructor overloading is a concept in Java where we can have more than one constructor in a class with different parameters.

class ClassTeacher { 
    String name, gender;
    int age;

    // Default Constructor (No parameters)
    ClassTeacher() {
        System.out.println("No Teacher Information Provided\n") ;
    }

    // Constructor with all parameters
    ClassTeacher(String n, String g, int a) {
        name = n;
        gender = g;
        age = a;
    }

    // Constructor without age
    ClassTeacher(String n, String g) {
        name = n;
        gender = g;
        age = 0; // Default age value
    }
    
    // Display method to show the information
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Gender: " + gender);
        System.out.println();
    }

    public static void main(String[] args) {
        // Create objects of the class ClassTeacher and pass values to the constructor
        System.out.println("Teacher Information: \n");
        
        ClassTeacher teacher1 = new ClassTeacher();
        teacher1.display(); // Calling the display method for teacher1

        ClassTeacher teacher2 = new ClassTeacher("Mukit", "Male");
        teacher2.display(); // Calling the display method for teacher2

        ClassTeacher teacher3 = new ClassTeacher("Hasib", "Male", 23); 
        teacher3.display();
    }
}
