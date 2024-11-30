const wordClues = [
    { word: 'api', clue: 'A set of rules that allow different software applications to communicate with each other.' },
    { word: 'html', clue: 'The standard markup language for documents designed to be displayed in a web browser.' },
    { word: 'css', clue: 'A style sheet language used for describing the presentation of a document written in HTML or XML.' },
    { word: 'node', clue: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, commonly used for server-side programming.' },
    { word: 'javascript', clue: 'A high-level programming language that is commonly used for building dynamic websites.' },
    { word: 'react', clue: 'A JavaScript library for building user interfaces, mainly used for single-page applications.' },
    { word: 'server', clue: 'A machine or program that provides services to other machines or programs.' },
    { word: 'database', clue: 'An organized collection of data, typically stored and accessed electronically from a computer system.' },
    { word: 'github', clue: 'A platform for version control and collaboration, allowing multiple people to work on projects at once.' },
    { word: 'python', clue: 'A high-level programming language known for its readability and simplicity.' },
    { word: 'algorithm', clue: 'A step-by-step procedure used for calculations and problem-solving tasks.' },
    { word: 'debugging', clue: 'The process of identifying and fixing bugs or errors in software code.' },
    { word: 'binary', clue: 'A system of representing text or computer processor instructions using only two binary digits: 0 and 1.' },
    { word: 'function', clue: 'A block of code that performs a specific task when called.' },
    { word: 'framework', clue: 'A software framework provides foundational structures and tools for developing applications.' },
    { word: 'loop', clue: 'A sequence of instructions that repeats until a specific condition is met.' },
    { word: 'variable', clue: 'A storage location in programming that holds data which can be changed during program execution.' },
    { word: 'nodejs', clue: 'An open-source, cross-platform runtime environment for executing JavaScript code outside the browser.' },
    { word: 'database', clue: 'A structured collection of data, often accessed by software programs through queries.' },
    { word: 'git', clue: 'A distributed version control system for tracking changes in source code during software development.' },
    { word: 'json', clue: 'A lightweight data interchange format that is easy for humans to read and write.' },
    { word: 'http', clue: 'A protocol used for transferring data over the web between a client and a server.' },
    { word: 'css3', clue: 'The latest version of CSS, used to style web pages with animations, transitions, and more.' },
    { word: 'front-end', clue: 'The part of a web application that interacts with the user and is visible on the screen.' },
    { word: 'back-end', clue: 'The part of a web application that handles the logic, database, and server-side processes.' },
    { word: 'ajax', clue: 'A technique used in web development to make asynchronous requests to the server without reloading the page.' },
    { word: 'mongodb', clue: 'A NoSQL database system that uses collections and documents to store data.' },
    { word: 'sql', clue: 'A standard language for managing and manipulating databases using queries.' },
    { word: 'php', clue: 'A server-side scripting language designed for web development but also used as a general-purpose programming language.' },
    { word: 'ssl', clue: 'A protocol for securing data transferred over the web, ensuring encryption and authentication.' },
    { word: 'oauth', clue: 'An open standard for access delegation commonly used for token-based authentication.' },
    { word: 'cloud', clue: 'A model for delivering computing services over the internet, including storage, processing, and more.' },
    { word: 'scrum', clue: 'An agile framework for managing complex software projects in short iterations called sprints.' },
    { word: 'continuous integration', clue: 'A development practice where code changes are frequently integrated into a shared repository.' },
    { word: 'machine learning', clue: 'A type of artificial intelligence that allows software systems to learn from data and improve over time.' },
    { word: 'tensorflow', clue: 'An open-source library developed by Google for machine learning and neural network tasks.' },
    { word: 'kubernetes', clue: 'An open-source system for automating the deployment, scaling, and management of containerized applications.' },
    { word: 'docker', clue: 'A platform that uses containers to develop, ship, and run applications.' },
    { word: 'jenkins', clue: 'An open-source automation server used for continuous integration and continuous delivery in software development.' },
    { word: 'ci/cd', clue: 'Continuous Integration/Continuous Deployment, a set of practices for automating software integration and delivery.' },
    { word: 'apache', clue: 'A widely used open-source web server software that serves web content.' },
    { word: 'node_modules', clue: 'A directory in Node.js projects containing all the installed dependencies and libraries.' },
    { word: 'express', clue: 'A web application framework for Node.js used for building APIs and web applications.' },
    { word: 'webpack', clue: 'A module bundler for JavaScript applications, allowing you to bundle files and assets.' },
    { word: 'babel', clue: 'A JavaScript compiler that allows you to use modern JavaScript syntax in older browsers.' },
    { word: 'typescript', clue: 'A superset of JavaScript that adds static typing and other features for improved development.' },
    { word: 'typescript', clue: 'A superset of JavaScript that adds static typing and other features for improved development.' },
    { word: 'docker-compose', clue: 'A tool for defining and running multi-container Docker applications.' },
    { word: 'redux', clue: 'A JavaScript library for managing and centralizing application state, often used with React.' },
    { word: 'vue', clue: 'A progressive JavaScript framework used for building user interfaces.' },
    { word: 'flutter', clue: 'A UI toolkit from Google for building natively compiled applications for mobile, web, and desktop from a single codebase.' },
    { word: 'firebase', clue: 'A platform developed by Google for creating mobile and web applications with a real-time database.' },
    { word: 'android', clue: 'An open-source mobile operating system based on Linux, primarily for mobile devices.' },
    { word: 'ios', clue: 'The mobile operating system developed by Apple for its mobile devices, including iPhone and iPad.' },
    { word: 'graphql', clue: 'A query language for APIs that allows clients to request only the data they need.' },
    { word: 'websocket', clue: 'A protocol providing full-duplex communication channels over a single TCP connection, often used for real-time communication.' },
    { word: 'api gateway', clue: 'A server that acts as an API front-end, receiving API requests, aggregating the results, and sending them back to the requester.' },
    { word: 'oauth2', clue: 'An authorization framework that allows third-party services to exchange web resources on behalf of a user.' }
  ];


  
  let selectedWord = '';
  let clue = '';
  let incorrectGuesses = 0;
  let guessedLetters = [];
  let inputBoxes = [];
  
  // Elements
  const inputContainer = document.getElementById('input-container');
  const clueDisplay = document.getElementById('clue');
  const incorrectDisplay = document.getElementById('incorrect-guesses');
  const messageDisplay = document.getElementById('message');
  
  // Function to start the game
  function startGame() {
    // Select a random word and its clue
    const randomIndex = Math.floor(Math.random() * wordClues.length);
    selectedWord = wordClues[randomIndex].word;
    clue = wordClues[randomIndex].clue;
  
    // Initialize game state
    incorrectGuesses = 0;
    guessedLetters = [];
    inputBoxes = [];
  
    // Clear the input container
    inputContainer.innerHTML = '';
  
    // Create input boxes dynamically based on the word length
    for (let i = 0; i < selectedWord.length; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.maxLength = 1;
      input.disabled = false;
      input.classList.add('letter-input');
      inputContainer.appendChild(input);
      inputBoxes.push(input);
  
      // Automatically move to the next input when a letter is typed
      input.addEventListener('input', function () {
        if (input.value.length === 1 && i < selectedWord.length - 1) {
          inputBoxes[i + 1].focus();  // Move to the next input
        }
      });
    }
  
    // Update the DOM with the clue and incorrect guess count
    clueDisplay.textContent = `Clue: ${clue}`;
    incorrectDisplay.textContent = `Incorrect guesses: ${incorrectGuesses}`;
    messageDisplay.textContent = '';
  }
  
  // Function to handle submitting the guess
  function submitGuess() {
    let guessedWord = '';
    let isValidGuess = true;
  
    // Gather the current guesses from the input boxes
    for (let i = 0; i < inputBoxes.length; i++) {
      guessedWord += inputBoxes[i].value.toLowerCase();
      if (!/[a-zA-Z]/.test(inputBoxes[i].value)) {
        isValidGuess = false;
        break;
      }
    }
  
    // Check if the input is valid (i.e., all input boxes are filled with valid letters)
    if (!isValidGuess) {
      messageDisplay.textContent = 'Please fill in all input boxes with valid letters.';
      return;
    }
  
    // Check if the guessed word matches the selected word
    if (guessedWord === selectedWord) {
      messageDisplay.textContent = 'Congratulations! You guessed the word!';
      
      // Move to the next word after a delay (to let the user see the message)
      setTimeout(() => {
        startGame();
      }, 2000);  // Delay of 2 seconds before starting the next game
    } else {
      incorrectGuesses++;
      incorrectDisplay.textContent = `Incorrect guesses: ${incorrectGuesses}`;  // Update incorrect guesses
  
      // Check if the player lost
      if (incorrectGuesses >= 6) {
        messageDisplay.textContent = `Game over! The word was: ${selectedWord}`;
        
        // Move to the next word after a delay (to let the user see the message)
        setTimeout(() => {
          startGame();
        }, 2000);  // Delay of 2 seconds before starting the next game
      }
    }
  }
  
  // Event Listeners
  document.getElementById('guess-btn').addEventListener('click', submitGuess);
  document.getElementById('reset-btn').addEventListener('click', startGame);
  
  // Start the game when the page loads
  startGame();
  