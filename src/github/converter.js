import {GitHubRepo} from "./model";

export default ({
                    name,
                    stargazers_count: stars,
                    license: {spdx_id: license}
                }) =>
    new GitHubRepo({
        name,
        stars,
        license
    });
