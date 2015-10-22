
function pageController(){
	this.isActive = false;
	
	function setPage(project){ 
 		$("#project_title").text (project.title);
		$("#project_info").text (project.content);
		$("#img1").attr("src",project.image1);
		$("#img2").attr("src", project.image2);
		$("#img3").attr("src", project.image3);
		$("#video_content").attr("src", project.video);
		$("#img4").attr("src", project.image4);
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
		     case "kinect_fun":
		    	project = new kinect_fun();
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


