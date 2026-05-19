// Counting objects with Static Variables

class Student {

    static int count = 0; // Static variable to keep track of object count

    Student() { 
        count++; // Incrementing the count in the constructor
    }

    // Method to display the number of objects created
    void display() {
        System.out.println("Number of objects created: " + count);
    }

    public static void main(String[] args) {
        
        Student s1 = new Student();
        s1.display();

        Student s2 = new Student();
        s2.display();

        Student s3 = new Student();
        s3.display();
    }
}
