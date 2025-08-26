//1: Create a Base Class 
//○ 
//Define a class LibraryItem to represent shared properties 
//title, id, isAvailable) and methods (e.g., checkOut() and 
//returnItem()). 
class LibraryItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        
}
checkOut() {
    this.isAvailable = false;
    console.log(`You have checked out ${this.title}`);
}

returnItem() {
    this.isAvailable = true;
    console.log(`You have returned ${this.title}`);
}
}
//2: Extend the Base Class 
//○ 
//Create child classes Book, DVD, and Magazine that inherit from 
//LibraryItem. 
//○ 
//Add unique properties and methods for each child class: 
//■ Book: Add properties like author and genre. 
//■ DVD: Add properties like director and duration. 
//■ Magazine: Add properties like issueNumber and publisher. 
class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }
}
class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
}
class Magazine extends LibraryItem {
    constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

//3: Instantiate Objects 
//Create instances of each class and test the shared and unique 
//methods. 
// 1
const myBook = new Book("Eragon", 246, false, "Christopher Paolini", "fantasy");
const myDVD = new DVD("Lion King", 642, true, "Roger Allers", 90);
const myMagazine = new Magazine("People", 321, true, 70, "People");

//Step 4: Test the Inheritance 
//○ 
//Use inherited methods like checkOut() and returnItem() to 
//manage the availability of items. 
//○ 
//Test accessing and displaying unique properties of each child 
//class.

myBook.checkOut();
myBook.returnItem();
myDVD.checkOut();
myDVD.returnItem();
myMagazine.checkOut();
myMagazine.returnItem();