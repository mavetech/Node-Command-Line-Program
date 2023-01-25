const commander = require('commander');

commander
.command('greet <name>')
.description('Print a greeting')
.option('-s, --shout', 'Print the greeting in uppercase')
.action((name, cmd) => {
  let greeting = `Hello, ${name}!`;
  if (cmd.shout) {
    greeting = greeting.toUpperCase();
  }
  console.log(greeting);
});


commander
  .command('add <numbers...>')
  .description('Add numbers')
  .action((numbers) => {
    const sum = numbers.map(Number).reduce((sum, n) => sum + n, 0);
    console.log(`The sum is ${sum}`);
  });
  

commander.parse(process.argv);
