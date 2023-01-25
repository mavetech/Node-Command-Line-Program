# Node-Command-Line-Program

This script uses the commander package to define a command-line interface with two commands: greet and add. 
The greet command takes a single argument, the name, and it prints a greeting. 
The add command takes a variable number of arguments and it calculates the sum of the numbers passed as arguments.
The greet command has an option flag -s or --shout, which will make the greeting printed in uppercase.

You can add multiple options and commands to your command-line tool, depending on the complexity of your tool. The commander package provides a lot of methods and options for building complex command-line tools.

## Package.json
A package.json file is a file that contains metadata about your Node.js project, including information about the project's dependencies and scripts. 

This package.json file has the following properties:

1. name: The name of the package.
2. version: The version of the package.
3. description: A brief description of the package.
4. main: The main entry point of the package.
5. dependencies: The packages that this package depends on.
6. scripts: The npm scripts that can be run for this package.
7. bin: The command that will be created when the package is installed globally.
8. author: The author of the package.
9. license: The license under which the package is distributed.

With this package.json, you can run the command by just calling npm run greet or npm run add

## Requirements for running the node.js program

### In order to run the Node.js Express server, you will need to have the following installed on your system:

Node.js: This is the JavaScript runtime that allows you to execute JavaScript on the server-side. You can download it from the official website (https://nodejs.org/en/).

To confirm that you have Node.js and npm (Node Package Manager) properly installed on your system, you can run the following command in your terminal:

````
node --version
npm --version
````

## Running the Node.js Program

Assuming that you have already installed Node.js and the necessary dependencies listed in the package.json file, you can run the program by following these steps:

1. Open the terminal and navigate to the root directory of your project where the package.json file is located.

2. Run the following command to install the dependencies listed in the **package.json** file:
````
npm install
````
3. Once the dependencies are installed, you can runt the program using the following command:
````
node tool.js greet John or npm run greet John
node tool.js add 1 2 3 4 or npm run add 1 2 3 4
````
