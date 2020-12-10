const fetch = require('node-fetch');
function getRepos(repoName, startDate, endDate) {
	var start_dates = new Date(startDate);
	var end_dates = new Date(endDate);

	fetch(`https://api.github.com/repos/${repoName}/pulls
		  `)
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i in data; i++) {

				if ((new Date(data[i].created_at) >= start_dates && new Date(data[i].created_at) <= end_dates) ||
					(new Date(data[i].updated_at) >= start_dates && new Date(data[i].updated_at) <= end_dates) ||
					(new Date(data[i].closed_at) >= start_dates && new Date(data[i].closed_at) <= end_dates) ||
					(new Date(data[i].merged_at) >= start_dates && new Date(data[i].merged_at) <= end_dates)) {

                    console.log(data[i]);
					//console.log(`createAt ${data[i].created_at} updatedAt ${data[i].updated_at}`);
				}
			}
		})
		.catch((error) => console.error(error));
}
getRepos('freeCodeCamp/boilerplate-project-stockchecker', '2018-06-18', '2020-03-27');
