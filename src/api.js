const fetch = require('../node_modules/node-fetch');
function getRepos(repoName, startDate, endDate) {
	var startdates = new Date(startDate);
	var enddates = new Date(endDate);
	fetch('https://api.github.com/users/freeCodeCamp/repos')
		.then((response) => response.json())
		.then((data) => {
			var repoFromServer;
			var i = 0;
			for (datas in data) {
				if (data[i].name == repoName) {
					repoFromServer = data[i];
          console.log(data[i].name);
          console.log(data[i].pulls_url);
		  console.log(data[i].merges_url)
		  fetch(`https://api.github.com/repos/freeCodeCamp/${repoName}/pulls
		  `)
		  .then((response) => response.json())
		  .then((data) => {
			  pr = 0
			  while(new Date(data[pr].created_at)>= startdates && new Date(data[pr].updated_at >= startdates)){
				  if(new Date(data[pr].created_at) <= enddates && new Date(data[pr].updated_at) <= enddates){
					  console.log(`pull reguest created date ${data[pr].created_at}`);
					  console.log(`pull reguest updated date ${data[pr].updated_at}`);
				  }
				  pr++;
				}
			})
			//.catch((error) => console.error(error));
	
					// console.log("Pulls URL: " + repoFromServer.pulls_url);
					// console.log("Created at: " + repoFromServer.created_at);
					// console.log("Updated at: " + repoFromServer.updated_at);
					// console.log("Merged URL at: " + repoFromServer.merges_url);
				}
				i++;
			}
		})
		.catch((error) => console.error(error));
}
getRepos('boilerplate-project-stockchecker', '2018-02-18' , '2020-06-02');

//const fetch = require("../node_modules/node-fetch");
// async function getRepos(){
//     const url = 'https://api.github.com/users/jbrasepae/repos'
//     const response = await fetch(url)
//     const result = await response.json()

//     console.log(result);
// }
//getRepos();
