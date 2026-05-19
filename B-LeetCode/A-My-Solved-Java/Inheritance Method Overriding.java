// Method Overriding in Inheritance
// 1. Same Method Signature: The method in the subclass must have the same name, return type, and parameters as the method in the superclass.
// 2. Runtime Polymorphism: The method that gets called is determined at runtime based on the object type, not the reference type.
// 3. Use of `@Override` Annotation: It ensures the method is correctly overriding the method in the superclass.
// 4. Access Modifier: The overridden method cannot have a more restrictive access modifier than the method in the superclass.
// 5. Return Type: The return type of the overridden method should be the same or a subclass of the return type in the superclass.

// Example:
class Person {

    String name;
    int age;

    void display() {
        System.out.println("\nName: " + name + "\nAge: " + age);
    }
}

class Teacher extends Person {
    int salary;
    String Qualification;

    @Override
    void display() {
        
        // Calling the parent class display method and adding salary
        System.out.println("\nName: " + name + "\nAge: " + age + "\nSalary: " + salary + "\nQualification: " + Qualification);
    }

    public static void main(String[] args) {

        Teacher turjo = new Teacher();


        turjo.name = "Turjo";
        turjo.age = 40;
        turjo.salary = 50000;
        turjo.Qualification = "Masters in Computer Science";

        turjo.display(); //his will call the overridden display() method in Teacher class
    }
}
