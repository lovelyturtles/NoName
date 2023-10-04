import axios from 'axios';


const GIT_TOKEN = process.env.GIT_TOKEN; // git authorization token


const GithubService = {


    // getMainCommits
    // get main branch  commits
    // owner - github user name , repoName - name of the github repo
    // returns list of commits from the main branch or null if no commits or failed to retrieve github commits
    getMainCommits: async (owner: string, repoName: string) => {
        let result: any = null;
        try {
            const url: string = `https://api.github.com/repos/${owner}/${repoName}/commits`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `token ${GIT_TOKEN}`
                }
            });
            result = response.data;


        } catch (error) {
            console.log(error);
        } finally {
            return result;
        }
    },

    // getBranchCommits
    // gets a specified branch's  commits
    // owner - github user name , repoName - name of the github repo , branchName - name of branch
    // returns list of commits or null if no commits or failed to retrieve github commits
    getBranchCommits: async (owner: string, repoName: string, branchName: string) => {
        let result: any = null;
        try {
            const url: string = `https://api.github.com/repos/${owner}/${repoName}/commits?sha=${branchName}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `token ${GIT_TOKEN}`
                }
            });
            result = response.data;


        } catch (error) {
            console.log(error);
        } finally {
            return result;
        }
    },

    // getLatestCommits
    // gets a specified branch's  commits
    // owner - github user name , repoName - name of the github repo , branchName - name of branch
    // returns list of commits or null if no commits or failed to retrieve github commits
    getLatestCommits: async (owner: string, repoName: string, branchName: string) => {
        let result: any = null;
        const currentDate: Date = new Date()
        const HOUR_IN_MS: number = 3600000
        const timeStamp: Date = new Date(currentDate.getTime() - HOUR_IN_MS)

        try {
            const url: string = `https://api.github.com/repos/${owner}/${repoName}/commits?sha=${branchName}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `token ${GIT_TOKEN}`
                },
                params: {
                    since: timeStamp,
                }
            });
            result = response.data;


        } catch (error) {
            console.log(error);
        } finally {
            return result;
        }
    },

    // getAllBranches
    // gets a specified branch's  commits
    // owner - github user name , repoName - name of the github repo
    // returns list of all branches on the repo
    getAllBranches: async (owner: string, repoName: string) => {
        let result: any = null;
        try {
            const url: string = `https://api.github.com/repos/${owner}/${repoName}/branches`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `token ${GIT_TOKEN}`
                }
            });
            result = response.data;


        } catch (error) {
            console.log(error);
        } finally {
            return result;
        }
    }
}

export default GithubService;