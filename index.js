const alfy = require('alfy');
const Octokit = require("@octokit/rest");
const token = process.env.GH_TOKEN;
const owner = process.env.GH_OWNER;
const repo = process.env.GH_REPO;
const label = process.env.GH_LABEL;

const run = async () => {
    try {
        const octokit = new Octokit({
            auth: token
        });
        const { data } = await octokit.issues.listForRepo({
            owner,
            repo,
            labels: label,
            direction: 'desc'
        });
        const first = [].concat(data.shift());
        const output = first.map(d => {
            return {
                title: d.title,
                subtitle: d.html_url,
                arg: d.html_url
            }
        });
        alfy.output(output);
    }
    catch(e) {
        alfy.error(e);
    }

};

run();