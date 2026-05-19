//Runtime polimorphism Example 2

// Superclass
class Animal {
    // Method in the superclass
    public void display() {
        System.out.println("This is an animal");
    }
}

// Subclass Dog overrides display method
class Dog extends Animal {
    @Override
    public void display() {
        System.out.println("This is a dog");
    }
}

// Subclass Cat overrides display method
class Cat extends Animal {
    @Override
    public void display() {
        System.out.println("This is a cat");
    }
}

public class RunTimePolymorphism2 {
    public static void main(String[] args) {
        // Creating references of type Animal
        Animal myAnimal = new Animal();  // Animal reference and object
        Animal myDog = new Dog();         // Animal reference but Dog object
        Animal myCat = new Cat();         // Animal reference but Cat object
        
        // Runtime polymorphism - method call depends on the actual object
        myAnimal.display();  // Calls Animal's display method
        myDog.display();     // Calls Dog's display method
        myCat.display();     // Calls Cat's display method
    }
}
