// Static Variables 
// A static variable belongs to the class and not objects.
// We have to create a static variable inside the class, not in objects.

class Student {

    String name, address;
    static String University = "MIT"; // Static variable shared by all objects

    // Constructor to initialize name and address
    Student(String n, String a) {
        name = n;
        address = a;
    }

    
        void display() {
            System.out.println("\nName: " + name + "\nAddress: " + address + "\nUniversity: " + University);
        }


    public static void main(String[] args) {
        Student s1 = new Student("Raj", "Pune");
        Student s2 = new Student("Rahul", "Mumbai");
        // We can see we did not initialize the University variable in the objects.
        //But still, we are able to access it because it is a static variable which belongs to the class.

        s1.display();
        s2.display();
    }
}
