/*
A library wants to develop an automated LibrarySystem to manage books and 
different types of users using inheritance in Java. 

The base class LibraryMember should have attributes like memberID, name, and 
borrowedBooksCount, along with methods for borrowBook() and returnBook().

Two subclasses, StudentMember and FacultyMember, should inherit from LibraryMember.

The StudentMember class should have a restriction allowing only 5 books to be borrowed.

The FacultyMember class should have an increased borrowing limit of 10 books.

The LibrarySystem should create the list of objects of StudentMember and FacultyMember, 
simulate borrowing and returning books, and display details such as total borrowed books.
*/

import java.util.ArrayList;

class LibraryMember {
    String memberID, name;
    int borrowedBooksCount;
    int maxBooks;

    LibraryMember(String id, String name, int maxBooks) {
        this.memberID = id;
        this.name = name;
        this.maxBooks = maxBooks;
        this.borrowedBooksCount = 0;
    }

    void borrowBook() {
        if (borrowedBooksCount < maxBooks) {
            borrowedBooksCount++;
            System.out.println(name + " borrowed a book. Total: " + borrowedBooksCount);
        } else {
            System.out.println(name + " cannot borrow more books.");
        }
    }

    void returnBook() {
        if (borrowedBooksCount > 0) {
            borrowedBooksCount--;
            System.out.println(name + " returned a book. Total: " + borrowedBooksCount);
        } else {
            System.out.println("No books to return.");
        }
    }
}

class StudentMember extends LibraryMember {
    StudentMember(String id, String name) {
        super(id, name, 5);
    }
}

class FacultyMember extends LibraryMember {
    FacultyMember(String id, String name) {
        super(id, name, 10);
    }
}

public class LibrarySystem {
    public static void main(String[] args) {
        ArrayList<LibraryMember> members = new ArrayList<>();
        members.add(new StudentMember("S001", "Alice"));
        members.add(new StudentMember("S002", "Bob"));
        members.add(new FacultyMember("F001", "Dr. Charlie"));
        members.add(new FacultyMember("F002", "Dr. Dana"));

        for (LibraryMember member : members) {
            member.borrowBook();
            member.borrowBook();
            member.returnBook();
        }
    }
}


