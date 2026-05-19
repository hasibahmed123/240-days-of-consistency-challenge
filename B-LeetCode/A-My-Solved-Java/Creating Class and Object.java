// Creating Class and Object in Java

class CreatingClassTeacher { // Here 'CreatingClassTeacher' is the class name
    String name, gender;
    int age;

    public static void main(String[] args) {

    //Now we will create an object of the class CreatingClassTeacher

    CreatingClassTeacher teacher1 = new CreatingClassTeacher(); 
    // Here 'CreatingClassTeacher teacher1' is object declaration and 'new CreatingClassTeacher()' is object creation

        teacher1.name = "Mr. John"; // Here 'teacher1.name' is object reference
        teacher1.gender = "Male";
        teacher1.age = 30;

        System.out.println("Teacher 1");
        System.out.println("Name: " + teacher1.name); // Here 'teacher1.name' is object reference
        System.out.println("Gender: " + teacher1.gender);
        System.out.println("Age: " + teacher1.age);
    }
}
