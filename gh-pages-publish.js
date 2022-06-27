var ghpages = require('gh-pages');

ghpages.publish('build', {
    repo: 'https://github.com/jbigman/jbigman.github.io.git',
    branch: 'master',
    dest: 'react',
}, () => {
    console.log("success");
});