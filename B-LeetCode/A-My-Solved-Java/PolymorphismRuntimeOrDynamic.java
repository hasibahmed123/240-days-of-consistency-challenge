// Run Time Polymorphism in Java
// It means that the method to be invoked is determined at runtime.
// It is also known as dynamic method dispatch.

// Two Conditions for Run Time Polymorphism:
// 1. Inheritance (IS-A Relationship)
// 2. Method Overriding.

//Benefits of Run Time Polymorphism:
// 1. Code Reusability
// 2. Flexibility
// 3. Readability
// 4. Maintainability

class Person {

    String name;
    int age;

    void display() {
        System.out.println("\nName: " + name + "\nAge: " + age);
    }

}

class Teacher extends Person { 

    String subject;

    @Override
    void display() {
        System.out.println("\nName: " + name + " \nAge: " + age + "\nSubject: " + subject);
    }

}

public class PolymorphismRuntimeOrDynamic {
    public static void main(String[] args) {

        Person p = new Person();
        p.name = "John";
        p.age = 30;
        p.display();

        Person t = new Teacher();
        // This is an example of run time polymorphism
        // We did not have to write Teacher t = new Teacher(); because Teacher is a subclass of Person
        // and we can use the reference of the parent class to refer to the object of the child class
        // Normally we would have to write Teacher t = new Teacher();

        t.name = "Omar";
        t.age = 40;

        //This is called downcasting
        ((Teacher) t).subject = "Maths";

        /* Note: If we use Run Time Polymorphism, we cannot use the following code for the child class:
        Here we cannot write t.subject = "Maths";
        We cannot use t.subject = "Maths" if we do not declare the new variable in the parent class
        We have to use downcasting to use the new variable in the child class
        
        Direct Formate of downcasting:
        ((ChildClassName) ChildObject).childClassVariable = "Value";
        ((Teacher) p).subject = "Math" ;

        */

        t.display();

    }
}
