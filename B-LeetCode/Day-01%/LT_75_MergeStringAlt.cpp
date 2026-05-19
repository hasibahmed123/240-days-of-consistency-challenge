/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

// understanding the problem
We have two words:

word1 = abc
word2 = pqr

We want:

apbqcr

That means:

Take 1 letter from word1
Then take 1 letter from word2
Repeat again and again

// Pseudocode
START

Take word1 and word2

Create an empty string called merged

Find the bigger length between word1 and word2

Loop from i = 0 to bigger length - 1

    If i exists in word1
        add word1[i] to merged

    If i exists in word2
        add word2[i] to merged

Print merged

END

// Code
#include <iostream>
using namespace std;

int main() {

    string word1 = "abc";
    string word2 = "pqr";

    string merged = "";

    int maxLength;

    if(word1.length() > word2.length()) {
        maxLength = word1.length();
    }
    else {
        maxLength = word2.length();
    }

    for(int i = 0; i < maxLength; i++) {

        if(i < word1.length()) {
            merged = merged + word1[i];
        }

        
        if(i < word2.length()) {
            merged = merged + word2[i];
        }
    }

    cout << merged;

    return 0;
}
