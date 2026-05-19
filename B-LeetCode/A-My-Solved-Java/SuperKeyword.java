//super keyword's use in java:
//super keyword is used to refer immediate parent class instance variable.
//super() is used to invoke immediate parent class constructor
//super is used to invoke immediate parent class method.
//super is used in Method Overriding

class Parent {
    String name = "Parent Name";  // Parent class instance variable

    // Parent class constructor
    Parent(String message) {
        System.out.println("Parent constructor: " + message);
    }

    // Parent class method
    void show() {
        System.out.println("Parent class show method");
    }

    // Parent class method
    void display() {
        System.out.println("Parent class display method");
    }
}

class Child extends Parent {
    String name = "Child Name";  // Child class instance variable

    // Child class constructor
    Child(String message) {
        super(message);  
        // super() to invoke the immediate parent class constructor
        // this super() indicates to System.out.println("Parent constructor: " + message);
        // if we would not have used super() here, we must rewrite System.out.println("Parent constructor: " + message); here

        System.out.println("Child constructor");
    }

    // Overriding the display method in Child
    @Override
    void display() {
        super.display();  
        // super() to invoke the immediate parent class method
        // this super() indicates to System.out.println("Parent class display method"); 
        // if we would not have used super() here, we must rewrite System.out.println("Parent class display method"); here

        System.out.println("Child class display method");
    }

    // Overriding the show method in Child
    @Override
    void show() {

        super.show();  
        // super() to invoke the immediate parent class method
        // this super() indicates to System.out.println("Parent class show method);
        // if we would not have used super() here, we must rewrite System.out.println("Parent class show method); 


        System.out.println("Child class show method");
    }

    // Method to demonstrate accessing Parent's instance variable using super
    void demonstrateSuper() {
        System.out.println("Child class name: " + name);          // Refers to Child's variable
        System.out.println("Parent class name: " + super.name);   // super to refer to immediate parent class instance variable
    }
}

public class SuperKeyword {
    public static void main(String[] args) {

        // Create a Child object and call all relevant methods
        Child child = new Child("Message from Parent Constructor");

        // Demonstrate the use of super to access Parent's instance variable
        child.demonstrateSuper();

        // Demonstrate method overriding with super
        child.display();  // This will call both Parent's and Child's display method
        child.show();     // This will call both Parent's and Child's show method
    }
}

