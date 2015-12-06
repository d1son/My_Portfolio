$(document).ready(function(){
	$.ajax ({
		type = "GET",
		url = "https://api.github.com/users/d1son/repos",
		success: function(repos) {
			for(var i = 0; i < repos.length; i++) {
				var newListItem = buildListGroup(repos[i]);
				$(."list-group").append.(newListItem);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert("Something went wrong! We're looking into it!")
	}	
});

	function buildListGroup(repos){
		var commitsApiUrl = "https://api.github.com/repos/";
		commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";
	}

