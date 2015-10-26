
function pageController(){
	this.isActive = false;
	
	function setSinglePage(project){ 
 		$("#project_title").text (project.title);
		$("#project_info").html (project.content);
		$("#img1").attr("src",project.image1);
		$("#img2").attr("src", project.image2);
		$("#img3").attr("src", project.image3);
		$("#video_content").attr("src", project.video);
		$("#project_content").html (project.mainContent);
		if(project.image4 == 'none'){
			$("#img4").hide();
		}
		else { $("#img4").attr("src", project.image4);}
	}

	// loading more that one story in same pg
	function setMultiPage(project){ 

	 	var div = document.createElement('div');
    	div.className = 'col s12 m12';
    	div.innerHTML = '<div class="center-align">\
        					<div class="project_info">\
     							<h3 id="project_title_1"> title</h3>\
     							<p id = "project_info_1" > main info dynamicly loaded </p>\
     						</div>\
     						<iframe id = "video_content_1" class="z-depth-2" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>\
       					 	<br/><br/><br/><br/><br/>\
       				 	</div>';
    	document.getElementById('mainBody').appendChild(div);
 		$("#project_title_1").text (project.title);
	 	$("#project_info_1").html (project.content);
		$("#video_content_1").attr("src", project.video);
	 	
	 	var div2 = document.createElement('div');
    	div2.className = 'col s12 m12';
    	div2.innerHTML = '<div class="center-align">\
        					<div class="project_info">\
     							<h3 id="project_title_2"> title</h3>\
     							<p id = "project_info_2" > main info dynamicly loaded </p>\
     						</div>\
     						<iframe id = "video_content_2" class="z-depth-2" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>\
       					 	<br/><br/><br/><br/><br/>\
       				 	</div>';
    	document.getElementById('mainBody').appendChild(div2);
		$("#project_title_2").text (project.title_2);
		$("#project_info_2").html (project.content_2);
		$("#video_content_2").attr("src", project.video_2);

		div = document.createElement('div');
    	div.className = 'col s12 m12';
    	div.innerHTML = '<div class="center-align">\
        					<div class="project_info">\
     							<h3 id="project_title_3"> title</h3>\
     							<p id = "project_info_3" > main info dynamicly loaded </p>\
     						</div>\
     						<iframe id = "video_content_3" class="z-depth-2" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>\
       					 	<br/><br/><br/><br/><br/>\
       				 	</div>';
    	document.getElementById('mainBody').appendChild(div);
 		$("#project_title_3").text (project.title_3);
	 	$("#project_info_3").html (project.content_3);
		$("#video_content_3").attr("src", project.video_3);
	 	
	 	div2 = document.createElement('div');
    	div2.className = 'col s12 m12';
    	div2.innerHTML = '<div class="center-align">\
        					<div class="project_info">\
     							<h3 id="project_title_4"> title</h3>\
     							<p id = "project_info_4" > main info dynamicly loaded </p>\
     						</div>\
     						<iframe id = "video_content_4" class="z-depth-2" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>\
       					 	<br/><br/><br/><br/><br/>\
       				 	</div>';
    	document.getElementById('mainBody').appendChild(div2);
		$("#project_title_4").text (project.title_4);
		$("#project_info_4").html (project.content_4);
		$("#video_content_4").attr("src", project.video_4);
		
		
	}
	function setDoublePage(project){ 

	 	var div = document.createElement('div');
    	div.className = 'col s12 m12';
    	div.innerHTML = '<div class="center-align">\
        					<div class="project_info">\
     							<h3 id="project_title_1"> title</h3>\
     							<p id = "project_info_1" > main info dynamicly loaded </p>\
     						</div>\
     						<iframe id = "video_content_1" class="z-depth-2" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>\
       					 	<br/><br/><br/><br/><br/>\
       				 	</div>';
    	document.getElementById('mainBody').appendChild(div);
 		$("#project_title_1").text (project.title);
	 	$("#project_info_1").html (project.content);
		$("#video_content_1").attr("src", project.video);
	 	
	 	var div2 = document.createElement('div');
    	div2.className = 'col s12 m12';
    	div2.innerHTML = '<div class="center-align">\
        					<div class="project_info">\
     							<h3 id="project_title_2"> title</h3>\
     							<p id = "project_info_2" > main info dynamicly loaded </p>\
     						</div>\
     						<iframe id = "video_content_2" class="z-depth-2" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>\
       					 	<br/><br/><br/><br/><br/>\
       				 	</div>';
    	document.getElementById('mainBody').appendChild(div2);
		$("#project_title_2").text (project.title_2);
		$("#project_info_2").html (project.content_2);
		$("#video_content_2").attr("src", project.video_2);
		
	}
	this.service = function(param){
		var project;
		switch(param.call) {
		    case "palm_ball":
		        project = new palmistry_ball();
		        break;
		    case "molecap":
		        project = new molecap();
		        break;
		    case "marioneta":
		    	project = new marioneta();
		    	break;
		    case "maze_heart":
		    	project = new maze_of_heart();
		    	break;
		     case "kinect_fun":
		    	project = new kinect_fun();
		    	break;
		    case "last_egg":
		    	project = new last_egg();
		    	break;
		    case "shortGames":
		    	project = new shortGames();
		    	setDoublePage(project);
		    	return;
		    case "kinects":
		    	project = new kinects();
		    	setMultiPage(project);
		    	return;
		    case "linguar":
		    	project = new linguar();
		    	break;
		    case "floors":
		    	project = new floors();
		    	break;
		    default:
		        break;
		}

		setSinglePage(project);

	}
}

pageController.prototype.loadPage = function(param){
	 $("#body").load(param.load, function(){
	 	pgController.service(param);
	 });
}


