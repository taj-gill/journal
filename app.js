//Command-line Journal App

const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new journal entry',
  builder: {
    title: {
      describe: 'Entry title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Entry body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    const entry = {
      title: argv.title,
      body: argv.body,
      createdAt: new Date(),
    };
    console.log(`Adding new entry: ${argv.title} - ${argv.body}`);
  },
});
