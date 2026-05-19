import java.util.ArrayList;
import java.util.List;

public class AllDataTypes {
    public static void main(String[] args) {

        System.out.println("1: Below are the Eight Primitive Data Types"); 
        boolean booleanValue = true;
        System.out.println("boolean value: " + booleanValue);
        
        byte byteValue = 127;
        System.out.println("byte value: " + byteValue);
        
        char charValue = 'A';
        System.out.println("char value: " + charValue);
        
        short shortValue = 32000;
        System.out.println("short value: " + shortValue);
        
        int intValue = 123456;
        System.out.println("int value: " + intValue);
        
        long longValue = 123456789L;
        System.out.println("long value: " + longValue);
        
        float floatValue = 3.14f;
        System.out.println("float value: " + floatValue);
        
        double doubleValue = 3.14159265359;
        System.out.println("double value: " + doubleValue);

        System.out.println("2:Bellow are some Non-Primitive Data Types");
        
        String greeting = "Hello, World!";
        System.out.println("String value: " + greeting);

        Person person = new Person("Alice", 25);
        System.out.println("Person name: " + person.getName() + ", age: " + person.getAge());

        System.out.println("Example of Interface");
        MyInterface obj = new MyInterface() {
            @Override
            public void display() {
                System.out.println("Interface method implemented.");
            }
        };
        obj.display();

        String[] fruits = {"Apple", "Banana", "Cherry", "Date"};
        System.out.println("Array values: " + String.join(" ", fruits));

        ArrayList<String> colors = new ArrayList<>(List.of("Red", "Blue", "Green"));
        System.out.println("ArrayList values: " + String.join(" ", colors));
    }
}

// Class Defination
class Person {
    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}

// Interface definition
interface MyInterface {
    void display();
}
