const message = () => {
    console.log("Hello World");
}

message();

const message2 = firstName => console.log("Hello",firstName);

message2("Cemalettin");

const message3 = (firstName,lastName) => {
    console.log("Hello",firstName,lastName);
}

message3("Cemalettin","Coşgun");

const cube = x => x* x* x;

console.log(cube(3));