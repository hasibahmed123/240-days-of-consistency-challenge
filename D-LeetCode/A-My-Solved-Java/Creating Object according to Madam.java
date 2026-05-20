public class University {///access modifier / access specifier.. wahtever you want to say

    public String U_name;
    public String U_location;
    public int E_year;
    public String U_owner;
//A constructor in Java is a special type of method used to initialize objects
    // Constructor .. Theree are 3 types of object parameterized, non - parameterized and defult..Same Name as Class
//The constructor must have the same name as the class.
//No Return Type
//Unlike regular methods, constructors do not have a return type (not even void).
//Automatic Execution
//A constructor is called automatically when an object is created using the new keyword.
//Can Have Parameters
//Constructors can accept parameters to initialize object properties.
 
    public University(String U_name, String U_location, int E_year, String U_owner) {
        this.U_name = U_name;
        this.U_location = U_location;
        this.E_year = E_year;
        this.U_owner = U_owner;
    }

    // Method to display university details
    public void displayInfo() {
        System.out.println(this.U_name + " " + this.U_location + " " + this.E_year + " " + this.U_owner);
    }

    // Method to provide admission information
    public void provideAdmission() {
        System.out.println("Admission is available.");
    }

    // Method to provide education information
    public void provideEducation() {
        System.out.println("Education is open for all.");
    }

    // Main method to create an object and call methods
    public static void main(String[] args) {
        University u1 = new University("Daffodil", "Savar", 2002, "Sk");

        // Calling methods
        // all method should be called like this "u1.mehtod name".. got it huh?
        u1.displayInfo();
        u1.provideAdmission();
        u1.provideEducation();
    }
}
