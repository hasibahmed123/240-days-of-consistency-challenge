// Multi-level Inheritance
// In this example, the Teacher class is derived from the Employee class, which is derived from the Person class.

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

    String jobTitle; // Additional variable for Employee class
    void display2() { // Method to display Employee's information, including inherited fields
        System.out.println("Job Title : " + jobTitle); // Displaying the additional variable

        display1(); // Calling the parent class method to display Person's information
    }
}

class Teacher extends Employee {

    String qualification; // Additional variable for Teacher class
    void display3() { // Method to display Teacher's information, including inherited fields
        System.out.println("Qualification : " + qualification); // Displaying the additional variable

        display2(); // Calling the Employee class method to display Person and Employee information
    }

    public static void main(String[] args) {
        Teacher t1 = new Teacher();
        t1.name = "Alak Kanti";
        t1.age = 30;
        t1.jobTitle = "Lecturer";
        t1.qualification = "MSc in CSE";
        t1.display3(); // we have to use the last display method to display all the information

        Teacher t2 = new Teacher();
        t2.name = "Shamim Ahmed";
        t2.age = 35;
        t2.jobTitle = "Professor";
        t2.qualification = "PhD in CSE";
        t2.display3(); // we have to use the last display method to display all the information
    }
}
