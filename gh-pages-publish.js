var ghpages = require('gh-pages');

// Utiliser clean() quand il y a un message d'erreur avec "la branche xxx existe deja"
// ghpages.clean();

var config = {
    repo: 'https://github.com/jbigman/jbigman.github.io.git',
    branch: 'master',
    dest: 'react',
};

ghpages.publish('build', config, (err) => {
    console.log(`${err}`);

    console.log(`Published on ${config.repo.split("/")[4]}/${config.dest}`);
    console.log(`Branch:${config.branch}`);
});
