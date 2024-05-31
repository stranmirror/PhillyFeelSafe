# CI 102 Lab 63 Group 14



## Getting started
Learn and use React to create a website for better-organized coding storage. First, make sure "git command" and "node.js" are installed on the local machine, then download an integrated development environment (IDE), such as Visual Studio Code, to complete the process. Open Visual Studio Code, enter the project directory and edit the Home.jsx (jsx is HTML in react). Then, open the Command-line interface (CLI) built-in IDE and cd into the project directory. Use the command "npm run dev" in the CLI to show the localhost links and test in the local browser. 

Begin the project by installing the following working environments:

https://react.dev/learn/add-react-to-an-existing-project install guide for react project

https://nodejs.org/en/ install guide for node.js\

Other crucial installation are listed under "**Installation**" header

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/63/14/ci-102-lab-63-group-14.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/63/14/ci-102-lab-63-group-14/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
PhillyFeelSafe Website

## Description
Welcome to the PhillyFeelSafe website! This website will provide you with all the information you need to consider a safe housing option in University City, Philadelphia, PA. Use our map feature to locate housing options, and see what's nearby! Through our map feature, you can see nearby restaurants, shopping malls, police stations, hospitals, etc. available in the area that you are interested in. Additionally, you can also see the crime history that has taken place within a specific location in the past year, by providing a block number or street name. This will be displayed on a map, with each pinpoint displaying the type of crime that took place. You can also scroll down to see more history in our crime history data table. Want to search more about housing options? Navigate to the reference links page to find some helpful links! Finally, learn more about the website developers and their contributions to this website project. Visit the PhillyFeelSafe Website TODAY! 


## Installation
The following commands are used to install dependencies for our project. VERY IMPORTANT: Ensure you are in the vite-project folder before running install commands. All dependencies are neccessary for running the project without any error!

- npm i -D react-router-dom 
- npm install leaflet
- npm install react-leaflet
- npm install react-icons --save
- npm install leaflet-providers
- npm install react-leaflet-cluster
- npm install papaparse
- npm install leaflet.locatecontrol

## Usage
Click on specific pinpoints in our map feature to see a description and a safety level rating from our team to see how safe an area is. You can also click on nearby restaurants, shopping malls, police stations, and hospitals to see their names. 

To view the crime history, you can click on pinpoints after searching a specific location. This will tell you the location of the pinpoint, along with the type of crime that took place. 

## Debug/troubleshooting 
For any merge conflict issues, refer to source control and determine which version to keep. There should be new options: current change and incoming change. Double-check with the git repository before picking which one to keep. After the merge conflict for source control shows no errors, push your change with a git commit message. 

If the terminal shows work that the local copy doesn't contain and refuses your git push for any changes, run the command "git pull origin main" to update the directory with the current git repo. Remember always to use the command "git status" to check the status of files. Any files in red are waiting for a git add to be committed, and any files in green are included in the git add but haven't been git pushed with the git commit message. 

If the browser console issue shows a 404 not found error for any dependency even after the npm install and checking the package existence, use the command "rm -rf node_modules/.vite && npm run dev." This command allows rebuilding the node_modules folder while keeping all dependencies and clearing all cache. Then, it opens the website again using npm run dev. Make sure to use this command in the vite-project folder.  

## Support
Contact the website developers for assistance and/or feedback:
- Zarah Malik (Product Owner)
    Email: zfm24@drexel.edu
- Weihao Li (Function Developer)
    Email: wl463@drexel.edu
- Aahil Afraz (CSS Styling Designer)
    Email: aa4763@drexel.edu
- Daniyal Amjed (HTML Designer)
    Email: da894@drexel.edu


## Contributing/Start-Up

To access the website in React, in your local IDE, assuming that you are in the CI-102-lab-63-group-14 folder and in the vite-project folder, type the command:
npm run dev 

This will provide you with a local link to access the website. 


You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Thank you to the authors of the project: Zarah Malik, Weihao Li, Aahil Afraz, and Daniyal Amjed.
Additionally, thank you to Professor Pirmann and both of our Scrum Masters for their assistance in producing our project!

This project also used a crime history CSV file located on Kaggle for public use (located here: https://www.kaggle.com/datasets/mchirico/philadelphiacrimedata). Thank you Kaggle for providing this useful data set to display on our website! 

## License
MIT License

Copyright (c) 2024 Vladimir Agafonkin 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Project status
Complete 
