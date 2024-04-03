function greetUser(name: string = "Anonymous" ){
    console.log(`Hello, ${name}`);
}

// Greet a user with a name
greetUser("Alice");  // output Hello, Alice

// Greet an anonymous user
greetUser();  // output Hello, Anonymous