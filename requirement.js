//Requirement for our project

//We are a book management company

//Books
//ISBN,title , pub date,language,num page,author[],category[]

//Authors
//id,name,books[]

//Publications
//id,name,books[]

//We have to design and code an API over this.

//1.BOOKS 
//We need anAPI :-
//To get all the books
//To get specific book
//To get a list of books based on category
//To get a list of books based on language

//2.AUTHORS
//We need an API :-
//To get all the authors
//To get a specific author
//To get a list of authors based on books

//3.PUBLICATION
//To We need an API :-
//To get all the publication
//To get a specific publication
//To get a list of publications based on books


//POST REQUEST
//1.ADD NEW BOOK
//2.ADD NEW PUBLICATION
//3.ADD NEW AUTHOR

/******PUT******* */
//update book details if author is changed 

/*******DELETE*****/
//1.delete a book
//2.Delete author from book
//delete author from book and related book from author

//schema-Blueprint of how data has to be constructed
//MongoDB is schemaless
//mongoose has schema
//mongoose-validation , relationship with other data
//model -> document model of mangoDB
//Schema ->model ->use them