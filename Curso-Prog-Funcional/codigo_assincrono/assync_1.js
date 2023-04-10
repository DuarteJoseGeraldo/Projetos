const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Searching User Data...");
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
};
const getRepositories = (username, callback) => {
  setTimeout(() => {
    console.log("Calling GithHub API..");
    callback(["repo1", "repo2", "repo3 "]); //a função ao ser declarada deve receber um array de strings
  }, 2000);
};

const displayCommits = (commits) => console.log(commits);

const getCommits = (repos) => {
  getCommits(repos, displayCommits);
};
/////////////////////////////////////////////////////////////////////

console.log("Before");
getUser(1, (user) => {
  console.log("User: " + user.gitHubUsername);
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos, displayCommits);
  });
});
console.log("After");
