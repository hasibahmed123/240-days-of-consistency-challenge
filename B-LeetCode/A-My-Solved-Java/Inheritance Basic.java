/*
Inheritance in java:
1. Code Reusability
2. Parent-Child Relationship
3. "extends" Keyword
4. Method Overriding
5. Single Inheritance (No Multiple Inheritance)
6. "super" Keyword Usage
7. Constructor Inheritance (Implicit Super Constructor Call)
8. Access Control (private members not inherited)
9. Hierarchical Inheritance
10. Improves Maintainability
*/

class Person { // Parent Class or Super Class

    String name;
    int age;

    void displayInformation1() {
        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
    }
}

//Using extends keyword, Teacher class is inheriting Person class

 class Teacher extends Person {  // Child Class or Sub Class
    
    String qualification; // Additional variable in Teacher class which is not in Person class

    void displayInformation2() { // Additional display method in Teacher class which is not in Person class
        displayInformation1(); // Calling the parent class method
        System.out.println("Qualification : " + qualification); // Displaying the additional variable
    }

    public static void main(String[] args) {

        Teacher t1 = new Teacher();
        t1.name = "Alak Kanti";
        t1.age = 30;
        t1.qualification = "MSc in CSE";
        t1.displayInformation2(); 
        //Here we did not use displayInformation1() method directly, but it is called from displayInformation2() method
        // This is called Method Overriding

        Teacher t2 = new Teacher();
        t2.name = "Alak Kanti";
        t2.age = 30;
        t2.qualification = "MSc in CSE";
        t2.displayInformation2(); 
    }
}
