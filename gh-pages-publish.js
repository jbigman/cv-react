var ghpages = require('gh-pages');

var config = {
    repo: 'https://github.com/jbigman/jbigman.github.io.git',
    branch: 'master',
    dest: 'react',
};

ghpages.publish('build', config, (err) => {
    if (test) {
        console.log(`Error:${err}`);
    } else {
        console.log(`Success: Published on ${config.repo.split("/")[4]}/${config.dest}`);
        console.log(`Branch:${config.branch}`);
    }
});
