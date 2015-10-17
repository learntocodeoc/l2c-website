# l2c-website
Website for learntocode dev team

## Using this repository
We will be using a Feature Branch Workflow for this repository. A basic overview of this workflow is included below. You can find a more in-depth description at: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

### Branches
The repository will be organized into the following primary branches:

| Branch | Description |
|----------------|--------------------------------|
| Production | A special branch for the latest build to be deployed to production environments |
| Master | Represents the current working state of the codebase. Once features have been tested and are working they will be merged into the master branch |
| Feature branches | All features that are currently being developed should have their own separate branch to allow us to develop multiple features simultaneously without breaking working code in the master branch. |

### Creating a feature branch

First, clone the repository if you haven't done so:
````
git clone https://github.com/learntocodeoc/l2c-website.git
````

To checkout a new feature branch, type the following command from the repos working directory
````
git checkout -b my-feature master
````

Feature branches can then be pushed to the repository so you can share your code with the team. You can push your work when you've completed a major component of the feature or if you are having trouble and want to share your current progress with the team and get feedback.

````
git push -u origin my-feature
````

### Merging your feature branch into the master branch
We will discuss pulls and merging next week and see how all our code will get put together.
