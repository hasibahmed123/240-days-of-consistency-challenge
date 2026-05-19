// Bismillahir Rahmanir Rahim, Allah is the greatest.

//ArreyList
import java.util.ArrayList;

public class ArreyList {

    public static void main(String[] args) {

        ArrayList<String> cars = new ArrayList<String>();
        //This is the Format of ArrayList
        //ArrayList<DataType> VariableName = new ArrayList<DataType>();

        System.out.println("size of the ArrayList: " + cars.size());
        // Here size method is used to get the size of the ArrayList
        // It shows 0 because there is no element in the ArrayList

        //Adding elements to the ArrayList
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");

        /*
            Removing elements from the ArrayList:
            cars.remove(0); //Removes the element at index 0
            cars.remove("Volvo"); //Removes the first occurrence of the specified element

            Then, System.out.println(cars); will output [BMW, Ford, Mazda]

            we can use one of the above method to remove the elements from the ArrayList
            No necessary to use both.

         */

        System.out.println("size of the ArrayList: " + cars.size());
        //Now it is showing the size of the ArrayList

        // Rule 1 to print the ArrayList
        System.out.println(cars);

        System.out.println("\n"); 

        // Rule 2 to print the ArrayList using for loop
        for (int i = 0; i < cars.size(); i++) {
            System.out.println(cars.get(i));
        // Here get method is used to get the elements from the ArrayList

        }

        System.out.println("\n");

        // Rule 3 to print the ArrayList using for-each loop

        for (String i : cars) {
            System.out.println(i);
        }

        System.out.println("\n");

        //Note: Alwaysy use for-each loop to print the ArrayList
        
    }
    
}
