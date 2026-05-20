// Using Constructor

//charecteristics of a Constructor are as follows:
// 1. Constructor name must be same as the class name.
// 2. Constructor must have no explicit return type.
// 3. Constructor is called implicitly when the object of the class is created.
// 4. Constructor is used to initialize the object of a class.
// 5. Constructor is called only once per object.
// 6. Constructor can be overloaded.
// 7. Constructor can have parameters.

class ClassTeacher { // Renamed the class to a more concise name
    String name, gender;
    int age;

    // Parameterized Constructor
    ClassTeacher(String n, String g, int a) {
        name = n;
        gender = g;
        age = a;
    }

    // Display method to show the information
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Gender: " + gender);
        System.out.println("Age: " + age);
        System.out.println("\n");
    }

    class main
    public static void main(String[] args) {
        // Create objects of the class ClassTeacher and pass values to the constructor
        ClassTeacher teacher1 = new ClassTeacher("Hasib", "Male", 23);
        teacher1.display(); // Calling the display method for teacher1

        ClassTeacher teacher2 = new ClassTeacher("Mukit", "Male", 18);
        teacher2.display(); // Calling the display method for teacher2
    }
}
