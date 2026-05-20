// Multi-level Inheritance with Method Overriding

class Person {
    String name;
    int age;

    // Constructor for Person class
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method to display Person's information
    void display() {
        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
    }
}

class Employee extends Person {
    String jobTitle; // Additional variable for Employee class

    // Constructor for Employee class
    Employee(String name, int age, String jobTitle) {
        super(name, age); // Call the Person class constructor
        this.jobTitle = jobTitle;
    }

    @Override
    void display() { // Overriding the display method
        super.display(); // Calling the parent class method
        System.out.println("Job Title : " + jobTitle);
    }
}

class Teacher extends Employee {
    String qualification; // Additional variable for Teacher class

    // Constructor for Teacher class
    Teacher(String name, int age, String jobTitle, String qualification) {
        super(name, age, jobTitle); // Call the Employee class constructor
        this.qualification = qualification;
    }

    @Override
    void display() { // Overriding the display method
        super.display(); // Calling the Employee class method
        System.out.println("Qualification : " + qualification);
    }

    public static void main(String[] args) {
        Teacher t1 = new Teacher("Alak Kanti", 30, "Lecturer", "MSc in CSE");
        t1.display(); // Call the overridden display method

        System.out.println();

        Teacher t2 = new Teacher("Shamim Ahmed", 35, "Professor", "PhD in CSE");
        t2.display(); // Call the overridden display method
    }
}
