// Method Return Value

class ReturnValue {

    int squire(int n) { // Fixed method name spelling
        return n * n; //here we are returning the value of n * n, n is a parameter of the function
    }

    public static void main(String[] args) {
        ReturnValue obj = new ReturnValue(); //creating an object of the class

        int result = obj.squire(5);
        //calling the function by writting obj.squire and stored by writting int result,
        //storing is necessary because the function is returning a value and we have to store it in a variable.

        System.out.println("The squire of 5 is: " + result);
    }
}
