// Hierarchical Inheritance
// In this example, both Employee and Teacher classes are derived from the Person class.

class Person {
    String name;
    int age;

    // Method to display Person's information
    void display1() {
        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
    }
}

class Employee extends Person {
    String jobTitle;

    // Method to display Employee's information
    void display2() {
        display1(); // Calling the parent class method to display Person's information
        System.out.println("Job Title : " + jobTitle);
    }
}

class Teacher extends Person {
    String qualification;

    // Method to display Teacher's information
    void display3() {
        display1(); // Calling the parent class method to display Person's information
        System.out.println("Qualification : " + qualification);
    }

    public static void main(String[] args) {
        Teacher t1 = new Teacher();
        t1.name = "Alak Kanti";
        t1.age = 30;
        t1.qualification = "MSc in CSE";
        t1.display3(); // Display information for Teacher t1

        Teacher t2 = new Teacher();
        t2.name = "Shamim Ahmed";
        t2.age = 35;
        t2.qualification = "PhD in CSE";
        t2.display3(); // Display information for Teacher t2

        Employee e1 = new Employee();
        e1.name = "John Doe";
        e1.age = 40;
        e1.jobTitle = "Manager";
        e1.display2(); 
        // Here we called the display2() method because he is not a teacher
    }
}
