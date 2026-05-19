//ArreyList Methods
// 1. add() - Adding elements to ArrayList
// 2. remove() - Removing an element
// 3. get() - Accessing an element by index
// 4. set() - Modifying an element
// 5. size() - Getting size of the list
// 6. contains() - Checking if an element exists
// 7. isEmpty() - Checking if list is empty
// 8. clear() - Clearing all elements
// 9. equals()
// 10. addall()

import java.util.ArrayList;
import java.util.List;

public class ArreyListMethods {
    public static void main(String[] args) {
        // Creating an ArrayList of String
        List<String> animals = new ArrayList<>();

        // Adding new elements to the ArrayList
        animals.add("Lion");
        animals.add("Tiger");
        animals.add("Cat");
        animals.add("Dog");

        System.out.println("ArrayList: " + animals);

        // Adding an element at a particular index in an ArrayList
        animals.add(2, "Elephant");
        System.out.println("Updated ArrayList: " + animals);

        // Removing an element from the ArrayList
        String removedElement = animals.remove(1);
        System.out.println("Updated ArrayList after removing: " + animals);
        System.out.println("Removed Element: " + removedElement);

        // Accessing an element from the ArrayList
        String animal = animals.get(0);
        System.out.println("Accessed Element: " + animal);

        // Modifying an element in the ArrayList
        animals.set(0, "Zebra");
        System.out.println("Updated ArrayList after modification: " + animals);

        // Getting the size of the ArrayList
        int size = animals.size();
        System.out.println("Size of ArrayList: " + size);

        // Checking if the ArrayList is empty
        boolean isEmpty = animals.isEmpty();
        System.out.println("Is the ArrayList empty: " + isEmpty);

        // Checking if an element exists in the ArrayList
        boolean isExisting = animals.contains("Cat");
        System.out.println("Is Cat in the ArrayList: " + isExisting);

        // Clearing all elements from the ArrayList
        animals.clear();
        System.out.println("ArrayList after clearing all elements: " + animals);

        //
    }
}

