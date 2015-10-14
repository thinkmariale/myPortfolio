
function pageController(){
	this.isActive = false;
	
	function setPage(project){ 
 		$("#project_title").text (project.title);
		$("#project_info").text (project.content);

	}

	function class2(){
		 $("#text_1").text ("<p>chao</p>");
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
		    default:
		        break;
		}

		setPage(project);

	}
}

pageController.prototype.loadPage = function(param){
	 $("#body").load(param.load, function(){
	 	pgController.service(param);
	 });
}


