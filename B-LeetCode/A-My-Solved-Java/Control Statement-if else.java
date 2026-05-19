//Formate of if else statement:

/* 

1. if else statement:

if (condition) {

    //code
}

else {

   //code

}

2. else if statement:

if (condition) {

    //code

}

else if (condition) {

    //code

}

else {

    //code

}

 */

// 1. if else statement example:

public class Main {

    public static void main(String[] args) {

        int number = 10;

        if (number > 0) {

            System.out.println("Number is positive");

        } else {

            System.out.println("Number is negative");

        }

    }

}

// Output: Number is positive

// 2. else if statement example:

public class Main {

    public static void main(String[] args) {

        int number = 0;

        if (number > 0) {

            System.out.println("Number is positive");

        } else if (number < 0) {

            System.out.println("Number is negative");

        } else {

            System.out.println("Number is zero");

        }

    }

}

// Output: Number is zero







