
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
	this.mainContent += "With this vision, I re factored the calibration code into Unity3D and developed the game in this same platform";
	this.mainContent += "<br/><br/> <img src='images/palmistryBall/calibration_process.jpg' align='left'style='margin:10px 20px 0 0;'> ";
	this.mainContent += "For the calibration aspect of this project (the hardest for me), I first marked a place in my finger to use as guide."
	this.mainContent += " <br/><br/>Then, I would place the projector where I wanted it to go and place my hand under it. ";
	this.mainContent += "I would move the mouse courser to my finger. Click, ";
	this.mainContent += "and record the 3D point of Leap motion and the 2D point of the screen where the mouse cursor was at. ";
	this.mainContent += " <br/><br/>This information was then passed into openCV to find the final position "
	this.mainContent += "of the virtual camera in the scene and translate it there.";
	this.video = "http://player.vimeo.com/video/127358563";
}

function necklaces(){
	this.title = "Love Necklaces";
	this.content = "A fun Arduino project made in two weeks for Burning Man. ";
	this.content += "Protytped the entire concept and build all the components.";
	this.mainContent = "All the necklaces talk to each other through a radio component and to a centralized installation. Users could send different color patterns and animatio to the other users by pressing the button on the necklace. The idea behind that was to be able to send messages across the playa to your loved ones even when you were away.";
    this.mainContent += "<br/><br/>";
    this.mainContent += "They ended up working very well, and people kept sending messages all the time! Only issue was power :) ";
	this.image1 = "images/necklaces/proto_1.jpeg";
	this.image2 = "images/necklaces/proto_2.jpeg";
	this.image3 = "images/necklaces/proto_3.jpeg";
	this.image4 = "images/necklaces/proto_4.jpeg";
	this.video = "none";
}

function remnant(){
	this.title = "Remnant Dinner";
	this.content = "An Interactive Story told through Mixed Reality and food. ";
	this.content += "The merging of the real and virtual worlds, is slowly changing how we work, how we play, and how we communicate.";
	this.mainContent = "Remnant was made in collaboration with a well known restaurant in Copenhagen, Denmark. We prepared an interactive experience and took it across the world. ";
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was incharge of creating the mixed reality component of the experience. It was built on ARKit and it detedetected cting users inputs, movements and surroundings.";
    this.mainContent += "<br/><br/>";
    this.mainContent += "The overall idea of the game was that users had to plant their own crops, and hunt for their food to survive. As they did that on the app, the chefs would react and start bringing food to the tables depending on the state of the game.";
	this.image1 = "images/remnant/dinner_1.jpeg";
	this.image2 = "images/remnant/dinner_2.jpeg";
	this.image3 = "images/remnant/dinner_4.jpg";
	this.image4 = "images/remnant/dinner_3.jpeg";
	this.video = "none";
}
function marioneta(){
	this.title = "Marioneta";
	this.content = "A puppet gesture recognition and mirroring experience done using Microsoft Kinect v2. ";
	this.content += "It was a project for the Pittsburgh Children's Museum and it is currently a permanently installation.";
	this.mainContent = "Marioneta's main focus is to create an endless experience in which everything in the virtual world will ";
	this.mainContent += "react to the users actions as they become and impersonate a puppet. "
	this.mainContent += "It was admitted into SXSW 2015 Film Festival. ";
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
	this.mainContent = "MoleCap was a research project at Carnegie Mellon University. Its main purpose is ";
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
	this.mainContent += "The player's objective is to take all the heart pieces that are around the robot's body back ";
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
	this.content = "Inspired by the video of <a target='_blank' href='https:/vimeo.com/38840688'>'point cloud dancer' </a>.";
	this.content += "I decided to make a sound reactive point cloud to give the user some control on what would ";
	this.content += "happen throughout the simulation.<br/>A low pitch sound, will decompose the user and ";
	this.content += "a high pitch sound will re-generate the user.<br/>";
	this.content += "(FFT for audio recognition)"
	this.video = "http://player.vimeo.com/video/50759765";

	this.title_2 = "Noise Ball";
	this.content_2 = "Noise Ball is a Kinect simulation made in openFrameworks. Balls are created with different sound levels. ";
	this.content_2 += "The main point of this simulation is to create noise to be able to interact with the balls. ";
	this.video_2 = "http://player.vimeo.com/video/50020490";

	this.title_3 = "Multiple Me";
	this.content_3 = "Multiple Me was inspired from the typical video editing technical of having 'multiple yous' ";
	this.content_3 += "on the screen. I decided to make it real time with the use of the Kinect! it can hold up to 20 ";
	this.content_3 += "different video clips. I really want to go to space, so that's why it's multiple me in space! ";
	this.video_3 = "http://player.vimeo.com/video/50760404";

	this.title_4 = "OpenGL Car";
	this.content_4 = " My first Xbox Kinect simulation. Made with ofxKinect drivers in OpenFrameworks. ";
	this.content_4 += "The scene is made up of openGL primitives and you get to drive around a boxy blue car. ";
	this.content_4 += "Physics is fully implemented so if you hit a wall to fast, you may flip!";
	this.video_4 = "http://player.vimeo.com/video/49884803";
	
}

function linguar() {
	this.title = "LinguAR";

	this.content = "A language learning application on <a href='https://www.google.com/glass/start/' target='_blank'> Google Glass</a>.";
	this.content += " It taking advantage of this wearable device by collecting as much data as possible from the user's daily life.";
	this.mainContent = "The application aggregates what the users has been saying throughout the day to create what we call: 'smart categories'. ";
    this.mainContent += "This categories consist of words related to what the user has been talking about. We use them to build a tailored ";
    this.mainContent += "Lesson Plan for the user, which will teach the user about content we know he is interested on because he ";
    this.mainContent += "has been talking about it throughout the day. ";
	this.mainContent += "<br/><br/>";
	this.mainContent += "I was one of the programmers in the project, and was responsible for the data collection and the "; 
	this.mainContent += "smart categories. Once the data was aggregated for the user, it was send to the Lesson Plan which ";
	this.mainContent += "I also helped implement.";

	this.image1 = "images/linguar/img1.jpg";
	this.image2 = "images/linguar/img2.png";
	this.image3 = "images/linguar/img3.jpg";
	this.image4 = "images/linguar/img4.png";

	this.video = "http://player.vimeo.com/video/114456391";
}

function floors(){
	this.title = "Interactive Floors";

	this.content = "A set of interactive floor installation experiences done with Unity3D and OpenCV. They were ";
	this.content += "done during my internship at <a href='http://kinesisstudio.com' target='_blank'> Kinesis Studio</a> ";
	this.content += "and I was the technical lead for the project."
	this.mainContent = "One of the experiences was an extension of a 'Pong Game', with 6 teams and a 25 feet tracking arena. ";
	this.mainContent += "The second experience was a 'social floor'. The floor would show you what you had in common with other participants. ";
	this.mainContent += "It was also a 25 feet tracking area and it hold up to 16 people."; 
	
	this.image1 = "images/floors/img1.jpg";
	this.image2 = "images/floors/img2.jpg";
	this.image3 = "images/floors/img3.jpg";
	this.image4 = "none";

	this.video = "http://player.vimeo.com/video/106218476";
}

function numMission(){
	this.title = "Number Mission";

	this.content = "An interactive learning math game done with the Microsoft Kinect. ";
	this.content += "The game has a  green theme that encourages recycling and awareness of environmental issues.";

	this.mainContent = "Number Mission is targeted for 7 to 12 year old children and it was specially made to promote ";
	this.mainContent += "learning in underdeveloped countries and economically challenged areas. ";
	this.mainContent += "A three month HCI research was done prior to the development of the game. It was focused on ";
	this.mainContent += "discovering the best ways to interact with the children. During development, play testing was done ";
	this.mainContent += " weekly with a local charter school to proof or disproof our implementations." 
	this.mainContent += " <br/><br/>";
	this.mainContent += "The game has three three difficulty levels and three mini games to help the kids improve and ";
	this.mainContent += "at the same time feel progress by discovering a new mini game after each level.";
	this.mainContent += " <br/><br/>Made in OpenFrameworks.";
	
	this.image1 = "images/numMission/img1.jpg";
	this.image2 = "images/numMission/img2.jpg";
	this.image3 = "images/numMission/img3.png";
	this.image4 = "images/numMission/img4.jpg";

	this.video = "http://player.vimeo.com/video/41059563";
}

