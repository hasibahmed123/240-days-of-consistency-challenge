/* =========================================================
   COMPLETE NODE.JS THEORY NOTES
   ========================================================= */

/* ---------------------------------------------------------
1. What is Node.js???
---------------------------------------------------------- */

/*
Node.js is an open-source, cross-platform JavaScript runtime
environment that allows JavaScript to run outside the browser.

It is built on Chrome’s V8 JavaScript engine, which compiles
JavaScript into machine code for high performance.

Node.js allows developers to use JavaScript for server-side
development, making it possible to build full-stack applications
using a single programming language.
*/


/* ---------------------------------------------------------
2. Key Features of Node.js
---------------------------------------------------------- */

/*
2.1 Event-Driven Architecture:
Node.js is based on an event-driven model where operations
are executed in response to events. This makes it highly efficient
for handling multiple requests.

2.2 Non-Blocking I/O:
Node.js performs asynchronous input/output operations. Instead
of waiting for one task to finish, it continues executing other
tasks, improving performance and scalability.

2.3 Single-Threaded but Highly Scalable:
Node.js uses a single-threaded event loop to handle multiple
connections efficiently without creating multiple threads.

2.4 Fast Execution:
Because it is built on the V8 engine, Node.js executes JavaScript
very quickly by converting it directly into machine code.

2.5 Cross-Platform:
Node.js works on Windows, Linux, and macOS.

2.6 Large Ecosystem (NPM):
Node Package Manager (NPM) provides thousands of libraries
that can be reused in applications.
*/


/* ---------------------------------------------------------
3. Module System in Node.js
---------------------------------------------------------- */

/*
Node.js uses a modular system to organize code.

Each file is treated as a separate module, which helps in
maintaining clean, reusable, and structured code.

Modules can be built-in, user-defined, or third-party.

This system improves scalability and maintainability of applications.
*/


/* ---------------------------------------------------------
4. Full-Stack JavaScript Concept
---------------------------------------------------------- */

/*
Node.js enables JavaScript to be used on both frontend and backend.

Frontend handles user interface and browser interactions,
while backend handles server logic, database operations,
authentication, and APIs.

This reduces complexity by using a single language across
the entire application stack.
*/


/* ---------------------------------------------------------
5. What Node.js DOES NOT Have (Browser Limitations)
---------------------------------------------------------- */

/*
Node.js does NOT include browser-specific features such as:

- DOM (Document Object Model)
- Window object
- LocalStorage and SessionStorage
- Cookies (browser-managed features)
- Navigator and Screen objects

These are available only in browsers, not in Node.js.

Node.js is focused on server-side operations, not UI rendering.
*/


/* ---------------------------------------------------------
6. Client-Side vs Server-Side JavaScript
---------------------------------------------------------- */

/*
Client-Side (Browser JavaScript):
- Runs inside the browser
- Handles user interface and interactions
- Manipulates web pages using DOM
- Limited access to system resources for security reasons

Server-Side (Node.js JavaScript):
- Runs on the server
- Handles database operations, APIs, authentication, and logic
- Has full access to file system and network
- More secure for sensitive operations
*/


/* ---------------------------------------------------------
7. Core Responsibilities of Node.js (Server Side)
---------------------------------------------------------- */

/*
- Managing databases (CRUD operations: Create, Read, Update, Delete)
- User authentication (login/logout systems)
- Authorization (controlling user access levels)
- Input validation (checking user data for security and correctness)
- Session management (tracking user activity across requests)
- API handling (sending and receiving data between systems)
- Error handling (maintaining application stability)
- Security protection (preventing attacks like SQL injection and XSS)
- Data encryption (protecting sensitive information)
- Logging and monitoring (tracking system performance and issues)
*/


/* ---------------------------------------------------------
8. Node.js Architecture Overview
---------------------------------------------------------- */

/*
Node.js follows an event-driven, non-blocking architecture.

Main components:
- Event Loop: Handles asynchronous operations
- V8 Engine: Executes JavaScript code
- Libuv: Manages thread pool and I/O operations

This architecture allows Node.js to handle many requests
efficiently without creating multiple threads.
*/


/* ---------------------------------------------------------
9. Uses of Node.js
---------------------------------------------------------- */

/*
- Web servers and backend APIs
- Real-time applications (chat apps, live updates)
- Automation scripts
- Internet of Things (IoT) systems
- Desktop applications using Electron
- Build tools and development automation
*/


/* ---------------------------------------------------------
10. Desktop Applications using Node.js
---------------------------------------------------------- */

/*
Node.js is used with Electron to build cross-platform desktop apps.

Examples of applications built with Electron:
- Visual Studio Code
- Discord
- Slack
- Notion
- Figma
- Microsoft Teams
*/


/* ---------------------------------------------------------
11. Build Tools Powered by Node.js
---------------------------------------------------------- */

/*
Node.js powers modern frontend development tools such as:

- Webpack (module bundling)
- Gulp (task automation)
- Grunt (task runner)
- Browserify (bundle modules for browser)
- Yeoman (project scaffolding)
*/


/* ---------------------------------------------------------
12. Client-Server Architecture in Node.js
---------------------------------------------------------- */

/*
Frontend:
- Responsible for user interface
- Built using HTML, CSS, JavaScript, React, etc.

Backend (Node.js):
- Creates server and listens to requests
- Handles business logic
- Communicates with databases
- Sends responses (JSON, HTML, etc.)
*/


/* ---------------------------------------------------------
13. Summary
---------------------------------------------------------- */

/*
Node.js is a powerful runtime environment that extends
JavaScript beyond the browser.

Its key strengths are:
- High performance (V8 engine)
- Asynchronous and non-blocking design
- Event-driven architecture
- Scalability for large applications

Limitations:
- No browser features (DOM, window, etc.)
- Not used for UI rendering directly

Node.js is mainly used for backend development,
real-time systems, and scalable network applications.
*/