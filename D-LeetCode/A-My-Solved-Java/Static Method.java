//Static method

class StaticMethod {

void display1() {
System.out.println("This is a non-static method");
}

static void display2() { //here static keyword is used to define a static method
System.out.println("This is a static method");

}

public static void main(String[] args) {

//we must create an object of the class to call a non-static method
StaticMethod obj = new StaticMethod();
obj.display1();

//we can call a static method directly without creating an object of the class
StaticMethod.display2();



//That the static method works without creating an object of the class
    
}

}
