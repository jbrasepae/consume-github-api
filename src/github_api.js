const fetch = require('node-fetch');
function getRepos(repoName, startDate, endDate) {
	var start_dates = new Date(startDate);
	var end_dates = new Date(endDate);
		  fetch(`https://api.github.com/repos/freeCodeCamp/${repoName}/pulls
		  `)
		  .then((response) => response.json())
		  .then((data) => {
			  pr = 0
			  for(i in data){
				  if(new Date(data[pr].created_at) >= start_dates && new Date(data[pr].created_at) <= end_dates && new Date(data[pr].updated_at) >= start_dates  && new Date(data[pr].updated_at) <= end_dates){
				    console.log(data[pr]);
					// console.log(`pull reguest created date ${data[pr].created_at}`);
				    // console.log(`pull reguest updated date ${data[pr].updated_at}`);
				  }
				  pr++;
				}
			})
			.catch((error) => console.error(error));

 }
getRepos('boilerplate-project-stockchecker', '2018-11-18' , '2019-03-27');

