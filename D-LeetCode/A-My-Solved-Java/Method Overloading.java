
// Method Overloading
// That means having two or more methods with the same name but with different parameters.
// Conditions for method overloadin are as follows:
// 1. Number of parameters should be different.
// 2. Data type of parameters should be different.
// 3. Sequence of data type of parameters should be different.
// 4. Number of parameters should be in the same order.
// 5. Data type of parameters should be in the same order.

// Example of method overloading:
class Overloading {

    void sum(int a, int b) {
        System.out.println("Sum of two integers: " + (a + b));
    }

    void sum(double a, double b) {
        System.out.println("Sum of two doubles: " + (a + b));
    }

    void sum(int a, int b, int c) {
        System.out.println("Sum of three integers: " + (a + b + c));
    }

    void sum() {
        System.out.println("No parameters");
    }

    public static void main(String[] args) {

        Overloading obj = new Overloading(); // Creating object of class Overloading,,,
        obj.sum(10, 20);
        obj.sum(10.5, 20.5);
        obj.sum(10, 20, 30);
        obj.sum();
    }









}














   

