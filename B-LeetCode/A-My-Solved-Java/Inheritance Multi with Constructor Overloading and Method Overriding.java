// Multi-level Inheritance with Constructor Overloading and Method Overriding

class Person {
    String name;
    int age;

    // Default constructor
    Person() {
        this.name = "Unknown";
        this.age = 0;
    }

    // Parameterized constructor
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
    String jobTitle;

    // Default constructor
    Employee() {
        super(); // Calls Person's default constructor
        this.jobTitle = "Unknown";
    }

    // Parameterized constructor
    Employee(String name, int age, String jobTitle) {
        super(name, age); // Call the Person class constructor
        this.jobTitle = jobTitle;
    }

    @Override
    void display() {
        super.display();
        System.out.println("Job Title : " + jobTitle);
    }
}

class Teacher extends Employee {
    String qualification;

    // Default constructor
    Teacher() {
        super(); // Calls Employee's default constructor
        this.qualification = "Unknown";
    }

    // Parameterized constructor
    Teacher(String name, int age, String jobTitle, String qualification) {
        super(name, age, jobTitle); // Call the Employee class constructor
        this.qualification = qualification;
    }

    @Override
    void display() {
        super.display();
        System.out.println("Qualification : " + qualification);
    }

    public static void main(String[] args) {
        // Using parameterized constructor
        Teacher t1 = new Teacher("Alak Kanti", 30, "Lecturer", "MSc in CSE");
        t1.display();

        System.out.println();

        Teacher t2 = new Teacher("Shamim Ahmed", 35, "Professor", "PhD in CSE");
        t2.display();

        System.out.println();
        
        // Using default constructor
        Teacher t3 = new Teacher();
        t3.display();
    }
}
