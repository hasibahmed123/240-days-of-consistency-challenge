/*
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

*/

/*
Main Idea
1. Store original number
2. Reverse the number
3. Compare reversed number with original number
4. If same → palindrome
5. Otherwise → not palindrome
*/

//Pseudo Code

function isPalindrome(x):

    if x < 0:
        return false

    original = x
    reversed = 0

    while x > 0:

        digit = x % 10

        reversed = reversed * 10 + digit

        x = x / 10

    if original == reversed:
        return true
    else:
        return false

// C++ Code
class Solution {
public:

    bool isPalindrome(int x) {

        // Negative numbers are not palindrome
        if (x < 0) {
            return false;
        }

        int original = x;

        // Use long long to avoid overflow
        long long reversed = 0;

        while (x > 0) {

            int digit = x % 10;

            reversed = reversed * 10 + digit;

            x = x / 10;
        }

        return original == reversed;
    }
};