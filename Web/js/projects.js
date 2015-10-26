
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
	this.content = "A new virtual reality experience utilizing Wireless Oculus Rift DK1 "
	this.content += "and the Organic Motion Capture System. "
	this.mainContent = "MoleCap was a reaserch project at Carnegie Mellon University. Its main purpose is ";
	this.mainContent += "to use the human body as the main control for the experience."; 
	this.mainContent += "<br/><br/>";
	this.mainContent += "How do we react in a VR world when there are no cables or walls to act as boundaries? ";
	this.mainContent += "How do naive users react to day to day activities in a VR world?";
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was one of the programmers and main game designer in this team."
	this.image1 = "images/molecap/img1.png";
	this.image2 = "images/molecap/img2.png";
	this.image3 = "images/molecap/img3.png";
	this.image4 = "none";
	this.video = "https://www.youtube.com/embed/PK4NhH9FANs";
}

function last_egg(){
	this.title = "The Last Egg";

	this.content = "A digital playground game for two teams of 3 players that uses the PlayStation Move Motion Controllers.<br/> "
	this.content += "It was nominated at IndieCade 2014 as one of the 'Big Games' finalist."
	this.mainContent = "The game consists of 3 rounds of 1 minute each. In which round both teams have to compete ";
	this.mainContent += "to get the 'last egg'. When the game starts, the 'last egg' randomly selects one ";
	this.mainContent += "PS Move and assigns a white light to it. This will indicate who was the egg."; 
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was one of the programmers in this team."

	this.image1 = "images/lastEgg/img1.jpg";
	this.image2 = "images/lastEgg/img2.jpg";
	this.image3 = "images/lastEgg/img3.jpg";
	this.image4 = "images/lastEgg/img4.png";

	this.video = "http://player.vimeo.com/video/98692480";
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
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was one of the programmers in this team."
	this.mainContent += "<br/><br/>";
	this.mainContent += "To know more visit <a href = 'http://www.mazeofheart.fusion-sky.com' target = '_blank'>Maze of Heart </a>."

	this.image1 = "images/mazeHeart/img1.png";
	this.image2 = "images/mazeHeart/img2.png";
	this.image3 = "images/mazeHeart/img3.png";
	this.image4 = "images/mazeHeart/img4.png";
	this.video = "http://player.vimeo.com/video/78123680";
}

function shortGames(){
	this.title = "Muzilla";
	this.title_2 = "Against all Odds";
	this.content = "An interactive audio/visual DJ experience that makes use of Leap Motion and ";
	this.content += "Fast Fourier Transform for audio recognition."

	this.content_2 = "An Oculus Rift experience where you get to ride a sperm and race to the egg. ";
	this.content_2 += "At the egg you get to fight the other sperms to be the first one to fertilize the egg!";
	this.video = "https://www.youtube.com/embed/x2sMIurf2sY";
	this.video_2 = "http://player.vimeo.com/video/79898511";
}

function kinects() {
	this.title = "Point Cloud Me";
	this.content = "Inspired by the video of “point cloud dancer”.";
	this.content += "I decided to make a sound reactive point cloud to give the user some control on what would ";
	this.content += "happen throughout the simulation.<br/>A low pitch sound, will decompose the user and ";
	this.content += "a high pitch sound will re-generate the user.<br/>";
	this.content += "(FFT for audio recognition)"
	this.video = "http://player.vimeo.com/video/50759765";

	this.title_2 = "Noise Ball";
	this.content_2 = "Noise Ball is a kinect simulation made in openFrameworks. Balls are created with different sound levels. ";
	this.content_2 += "The main point of this simulation is to create noise to be able to interact with the balls. ";
	this.video_2 = "http://player.vimeo.com/video/50020490";

	this.title_3 = "Multiple Me";
	this.content_3 = "Multiple Me was inspired from the typical video editing technical of having “multiple you’s” ";
	this.content_3 += "on the screen. I decided to make it real time with the use of the kinect! it can hold up to 20 ";
	this.content_3 += "different video clips. I really want to go to space, so that’s why it’s multiple me in space! ";
	this.video_3 = "http://player.vimeo.com/video/50760404";

	this.title_4 = "OpenGL Car";
	this.content_4 = " My first Xbox kinect simulation. Made with ofxKinect drivers in OpenFrameworks. ";
	this.content_4 += "The scene is made up of openGL primitives and you get to drive around a boxy blue car. ";
	this.content_4 += "Physics is fully implemented so if you hit a wall to fast, you may flip!";
	this.video_4 = "http://player.vimeo.com/video/49884803";
	
}

function linguar() {
this.title = "Linguar";

	this.content = "A digital playground game for two teams of 3 players that uses the PlayStation Move Motion Controllers.<br/> "
	this.content += "It was nominated at IndieCade 2014 as one of the 'Big Games' finalist."
	this.mainContent = "The game consists of 3 rounds of 1 minute each. In which round both teams have to compete ";
	this.mainContent += "to get the 'last egg'. When the game starts, the 'last egg' randomly selects one ";
	this.mainContent += "PS Move and assigns a white light to it. This will indicate who was the egg."; 
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was one of the programmers in this team."

	this.image1 = "images/linguar/img1.jpg";
	this.image2 = "images/linguar/img2.jpg";
	this.image3 = "images/linguar/img3.jpg";
	this.image4 = "images/linguar/img4.png";

	this.video = "http://player.vimeo.com/video/98692480";
}

function floors(){
	this.title = "Interactive Floors";

	this.content = "A digital playground game for two teams of 3 players that uses the PlayStation Move Motion Controllers.<br/> "
	this.content += "It was nominated at IndieCade 2014 as one of the 'Big Games' finalist."
	this.mainContent = "The game consists of 3 rounds of 1 minute each. In which round both teams have to compete ";
	this.mainContent += "to get the 'last egg'. When the game starts, the 'last egg' randomly selects one ";
	this.mainContent += "PS Move and assigns a white light to it. This will indicate who was the egg."; 
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was one of the programmers in this team."

	this.image1 = "images/floors/img1.jpg";
	this.image2 = "images/floors/img2.jpg";
	this.image3 = "images/floors/img3.jpg";
	this.image4 = "images/floors/img4.png";

	this.video = "http://player.vimeo.com/video/98692480";
}


