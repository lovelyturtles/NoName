import express from "express";
import GithubController from "../controller/github_controller";

const githubRoutes = express.Router();

// gets all branches available on a github repo
githubRoutes.get("/branches/:owner/:repo" ,GithubController.getAllBranches);

// Gets commits of main branch on github repo
githubRoutes.get("/commits/:owner/:repo" ,GithubController.getMainCommits);

// Gets commits of a particular branch from github routes
githubRoutes.get("/commits/branch/:owner/:repo/:branch" ,GithubController.getBranchCommits);


export default githubRoutes;