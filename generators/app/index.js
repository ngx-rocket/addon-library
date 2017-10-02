'use strict';

const Generator = require('@ngx-rocket/core');
const chalk = require('chalk');
const pkg = require('../../package.json');

class AddonLibraryGenerator extends Generator {
  initializing() {
    this.version = pkg.version;
    this.log(`Using ${chalk.cyan('addon-library')} ${chalk.green(this.version)}`);
  }

  beforeWriting() {
    Object.assign(this.props, this.sharedProps);
  }

  end() {
    if (this.props.library && !this.updating) {
      this.log(`- $ ${chalk.green('npm run build:library')}: build the component library`);
    }
  }
}

module.exports = Generator.make({
  baseDir: __dirname,
  generator: AddonLibraryGenerator,
  prompts: [
    {
      type: 'confirm',
      name: 'library',
      message: 'Create an Angular component library?',
      default: false
    },
    {
      type: 'input',
      name: 'libraryName',
      message: 'What\'s the name of your library?',
      default: 'my-awesome-lib',
      when: props => props.library
    },
    {
      type: 'input',
      name: 'libraryDescription',
      message: 'What\'s the library description?',
      default: 'An awesome Angular library',
      when: props => props.library
    },
    {
      type: 'input',
      name: 'libraryAuthor',
      message: 'Who\'s the library author?',
      default: 'Your name',
      when: props => props.library
    }
  ]
});
