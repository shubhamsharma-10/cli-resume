import chalk from 'chalk';
import { resume } from './resume.js';

function createHeader(): string {       // header section with name and title
    const name = chalk.bold.cyan.underline(resume.name);
    const title = chalk.yellow(resume.title);

    return `
${name}
${title}
`;
}

function createContactSection(): string {       // contact information section
    const { email, linkedin, github } = resume.contact;

    return `
${chalk.bold.white('📫 CONTACT')}
${chalk.gray('─'.repeat(40))}
  ${chalk.red('📧')} Email    : ${chalk.white(email)}
  ${chalk.blue('🔗')} LinkedIn : ${chalk.white(linkedin)}
  ${chalk.green('💻')} GitHub   : ${chalk.white(github)}
`;
}


function createSkillsSection(): string {        //  skills section with formatted list
    const skillsLine = resume.skills
        .map(skill => chalk.cyan(skill))
        .join(chalk.gray(' • '));

    return `
${chalk.bold.white('🛠️  SKILLS')}
${chalk.gray('─'.repeat(40))}
  ${skillsLine}
`;
}


function createEducationSection(): string {     // education section
    const eduLines = resume.education
        .map(edu => `  ${chalk.yellow('🎓')} ${chalk.white(edu.institution)}`)
        .join('\n');

    return `
${chalk.bold.white('📚 EDUCATION')}
${chalk.gray('─'.repeat(40))}
${eduLines}
`;
}

function createProjectsSection(): string {          //  projects section
    const projectLines = resume.projects
        .map(project => `  ${chalk.magenta('▸')} ${chalk.bold.white(project.name)}: ${chalk.gray(project.description)}`)
        .join('\n');

    return `
${chalk.bold.white('🚀 PROJECTS')}
${chalk.gray('─'.repeat(40))}
${projectLines}
`;
}


function createFooter(): string {       
    return `
${chalk.gray('─'.repeat(40))}
${chalk.italic.gray("Let's connect and build something amazing together!")}
`;
}

export function displayResume(): void {
    const content = [
        createHeader(),
        createContactSection(),
        createSkillsSection(),
        createEducationSection(),
        createProjectsSection(),
        createFooter()
    ].join('');


    console.log(content);
}
