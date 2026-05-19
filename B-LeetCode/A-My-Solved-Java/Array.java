// Array:

public class Array {
    public static void main(String[] args) {

        int[] numbers1D = {1, 2, 3, 4, 5}; 
        // declare and initialize an array of integers
        // format of array: type[] name = {value1, value2, value3, ...};
        // index of array starts from 0

        System.out.println(numbers1D[0]);
        System.out.println(numbers1D[1]);
        System.out.println(numbers1D[2]);
        System.out.println(numbers1D[3]);
        System.out.println(numbers1D[4]);

        /*
         if we used a loop:
            for (int i = 0; i < numbers1D.length; i++) {

            [Here numbers1D.length is the length of the array, which is 5 in this case.
            So, the loop will run from 0 to 4.]

                System.out.println(numbers1D[i]);

                [Here Print Formate is numbers1D[i], 
                where i is the index of the array.
                numbers1D is the name of the array.]
            

            }
         */

        // Now 2D array:
        int[][] numbers2D = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        // declare and initialize a 2D array of integers
        // format of 2D array: type[][] name = {{value1, value2, value3}, {value4, value5, value6}, ...};

        System.out.println(numbers2D[0][0]);
        System.out.println(numbers2D[0][1]);
        System.out.println(numbers2D[0][2]);
        System.out.println(numbers2D[1][0]);
        System.out.println(numbers2D[1][1]);
        System.out.println(numbers2D[1][2]);
        System.out.println(numbers2D[2][0]);
        System.out.println(numbers2D[2][1]);
        System.out.println(numbers2D[2][2]);

        /*
         if we used a loop:
            for (int i = 0; i < numbers2D.length; i++) {
                for (int j = 0; j < numbers2D[i].length; j++) {
                    System.out.println(numbers2D[i][j]);
                }
            }

            Mecahnisam of that loop:
            
            [Here numbers2D.length is the length of the 2D array, which is 3 in this case.
            So, the loop will run from 0 to 2.]

            [Here numbers2D[i].length is the length of the 1D array, which is 3 in this case.
            So, the loop will run from 0 to 2.]

            Here Print Formate is numbers2D[i][j], 
            where i is the index of the 2D array and j is the index of the 1D array.

            Inner Loop is int j = 0; j < numbers2D[i].length; j++
            Outer Loop is int i = 0; i < numbers2D.length; i++

         */


        }
}