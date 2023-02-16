// Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be: Academy

// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// Subject

// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student

// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property
// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.

// StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject


class Academy {
  constructor(name, students, subjects, start, end) {
    this.name = name;
    this.students = students ;
    this.subjects = subjects ;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;
  }

  PrintStudents() {
    console.log(this.students);
  }

  PrintSubjects() {
    console.log(this.subjects);
  }
}

class Subject {
  constructor(title, isElective, academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = Academy;
    this.students = [];
  }

  OverrideClasses(num) {
    if (num >= 3) {
      this.numberOfClasses = num;
    } else {
      console.error("Number of classes cannot be smaller than 3.");
    }
  }
}

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  StartAcademy(academy) {
    this.Academy = academy;
    academy.students.push(this);
  }

  StartSubject(subject) {
    if (!this.Academy !== null && this.academy.subjects.includes(subject)) {
      if(this.currentSubject !== null) {
        this.completedSubjects.push(this.currentSubject);
      
    }
    this.currentSubject = subject;
    subject.students.push(this);
    } else {
      console.error("Subject not found in academy.");
    }
  }
}

  let students = [
    new Student("John", "Doe", 20, 80),
    new Student("Jane","Doe", 19, 90),
    new Student("John", "Beau", 18, 90),
    new Student("Ryan","Beckett", 19, 90),
    new Student("Rufus","Turner", 20, 90),

  ];
  
  let subjects = [
    new Subject("Math", "Mr. Smith", students),
    new Subject("History", "Ms. Johnson", students),
    new Subject("Sports", "Mr. Carter", students),
    new Subject("Business", "Mr. Stanley", students),
    new Subject("Economy", "Mr. Brooks", students),
  ];
  
  let MyAcademy = new Academy("My Academy", [students], [subjects], new Date(), new Date());
  console.log(MyAcademy);
  MyAcademy.PrintStudents()
  MyAcademy.PrintSubjects()
  
  //Overriding classes
  subjects[2].OverrideClasses(2)
  subjects[3].OverrideClasses(7);
  console.log(`As of this moment the default number of subject  is overridden to ${subjects[3].numberOfClasses } classes.`)
  
  

  // Adding new student to the academy
  let newStudent = new Student("Jenny", "Smith", 22);
  console.log(newStudent);
  newStudent.StartAcademy(MyAcademy)
  







  
 

