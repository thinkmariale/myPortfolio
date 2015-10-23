
function palmistry_ball(){
	this.title = "Palmistry Ball";
	this.content = "An interactive game that lives in your hand. Uses the Leap Motion controller ";
	this.content += "for tracking and for creating 3D projection mapping to make the users hand the canvas."; 

	this.image2 = "images/palmistryBall/img1.png";
	this.image1 = "images/palmistryBall/img2.jpg";
	this.image3 = "images/palmistryBall/img3.png";
	this.image4 = "none";

	this.mainContent = "Palmistry Ball was first developed in OpenFramewroks to get the projector and hand calibration done ";
	this.mainContent += "with the use of OpenCV. Once I was able to calibrate the hand to the projector, I decided to make it into a game. "
	this.mainContent += "With this vision, I refactored the calibration code into Unity3D and developed the game in this same platform";
	this.mainContent += "<br/><br/> <img src='images/palmistryBall/calibration_process.jpg' align='left'style='margin:10px 20px 0 0;'> ";
	this.mainContent += "For the calibration aspect of this project (the hardest for me), I first marked a place in my finger to use as guide."
	this.mainContent += " <br/><br/>Then, I would place the projector where I wanted it to go and place my hand under it. ";
	this.mainContent += "I would move the mouse curser to my finger. Click, ";
	this.mainContent += "and record the 3D point of Leap motion and the 2D point of the screen where the mouse cursor was at. ";
	this.mainContent += " <br/><br/>This infromation was then feeded into openCV to find the final position "
	this.mainContent += "of the virtual camera in the scene and translate it there.";


	this.video = "http://player.vimeo.com/video/127358563";
}

function marioneta(){
	this.title = "Marioneta";
	this.content = "A puppet gesture recognition and mirroing experience done using Microsoft Kinect v2. ";
	this.content += "It was a project for the Pittsburgh Children’s Museum and it is currently a permanently installatin.";
	
	this.mainContent = "Marioneta's main focus is to create an endless experience in which everything in the virtual world will ";
	this.mainContent += "react to the users actions as they become and impersonate a puppet. "
	this.mainContent += "It was addmited into SXSW 2015 Film Festival. ";
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was the technical lead in this amazing project, and you can learn more about it by visiting out website:";

	this.image1 = "images/marioneta/img1.png";
	this.image2 = "images/marioneta/img2.png";
	this.image3 = "images/marioneta/img3.png";
	this.image4 = "images/marioneta/img4.png";

	this.video = "https://www.youtube.com/embed/DKYC4Ey70Rk";
}

function molecap(){
	this.title = "MoleCap VR";

	this.content = "A research project involving wireless VR with the use of a motion capture system."
	this.content += "The main purpose was to use the body as the main control for the experience."; 
	this.content += "How do we react in a VR world when there are no cables or walls to act as boundaries? ";
	this.content += "How do naive users react to day to day activities in a VR world? Done with the Oculus Rift in Unity 3D";

	this.image1 = "images/molecap/img1.png";
	this.image2 = "images/molecap/img2.png";
	this.image3 = "images/molecap/img3.png";
	this.image4 = "images/molecap/img4.png";

	this.video = "https://www.youtube.com/embed/PK4NhH9FANs";
}

function maze_of_heart(){
	this.title = "Maze of Heart";
	this.content = "Help the robot put its heart pieces back together! By moving your body until you get the job done.";
	this.content += " A unique Microsoft Kinect based experience game featured in Experimental Games at GDC 2015."

	this.mainContent = "This game was created with a focus on naive guests and indirect control. ";
	this.mainContent += "We were required to develop a game where even someone who is not experienced playing games ";
	this.mainContent += "could play easily with the  Microsoft Kinect.";
	this.mainContent += "<br/><br/>";
	this.mainContent += "Maze of Heart consists of a robot that gets its heart broken in multiple pieces. ";
	this.mainContent += "The player’s objective is to take all the heart pieces that are around the robot’s body back ";
	this.mainContent += "to its heart. The player will get help from a mouse, a friend of the robot, by indicating ";
	this.mainContent += "the player in what part of the body the pieces are. This way the player will have to move ";
	this.mainContent += "its body in multiple ways to effectively take the pieces back to the heart."

	this.image1 = "images/mazeHeart/img1.png";
	this.image2 = "images/mazeHeart/img2.png";
	this.image3 = "images/mazeHeart/img3.png";
	this.image4 = "images/mazeHeart/img4.png";

	this.video = "http://player.vimeo.com/video/78123680";
}

function kinect_fun() {
	this.title = "Kinect Stuff";
	this.content = "hello";

	this.image1 = "images/kinect/img1.png";
	this.image3 = "images/kinect/img2.png";
	this.image2 = "images/kinect/img3.png";
	this.image4 = "images/molecap/img4.png";
}