// Static variable without display method

class Student {

    static String University = "Daffodil International University";
    //here we have declared a static variable named University

    public static void main(String[] args) {

        System.out.println("University: " + Student.University);
        //here we have printed the value of the static variable University
        //Rules of printing static variable: ClassName.VariableName
        // class name is Student and variable name is University
    }
}
