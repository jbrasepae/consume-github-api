const fetch = require('node-fetch');
function getRepos(repoName, startDate, endDate) {
	var start_dates = new Date(startDate);
	var end_dates = new Date(endDate);
		  fetch(`https://api.github.com/repos/freeCodeCamp/${repoName}/pulls
		  `)
		  .then((response) => response.json())
		  .then((data) => {
			  i = 0
			  for(i in data){
				  if(new Date(data[i].created_at) >= start_dates && new Date(data[i].created_at) <= end_dates && new Date(data[i].updated_at) >= start_dates  && new Date(data[i].updated_at) <= end_dates){

					console.log(data[i]);
				  }
				  i++;
				}
			})
			.catch((error) => console.error(error));

 }
getRepos('boilerplate-project-stockchecker', '2018-06-18' , '2020-03-27');

