// Static Block Example

class StaticBlock {

    static int num;
    static String name;

    // Static block for initialization
    static {
        num = 97;
        name = "Java";
    }

    // Static method to display values
    static void display() {
        System.out.println("\nThe number is " + num + " \nThe name is " + name);
    }

    public static void main(String args[]) {
        // Calling the static method without creating an object
        StaticBlock.display();
    }
}
