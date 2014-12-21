

/*
var education = {};
education["name"] = "University of Nottingham";
education["years"] = "2009-2013";
education["city"] = "Kuala Lumpur";


$("#main").append(work.position);
$("#main").append(education.name);
*/

var work = {
	"jobs": [
		{
			"employer": "Lazada Malaysia",
			"title": "Business Analyst",
			"location": "Kuala Lumpur",
			"dates": "03/2014 - present",
			"description": "Lead optimization efforts for marketing across all online channels"
		},
		{
			"employer": "GlassesGroupGlobal",
			"title": "Business Analyst",
			"location": "Kuala Lumpur",
			"dates": "10/2013 - 02/2013",
			"description": "Managed operations, decreased shipping backlog by 90%"
		}
	]

}

var projects = {
	"udacity": [
		{
			"title": "Front-End Web Development Nanodegree",
			"dates": 2014,
			"description": "Took part of Udacity's Nanodegree - completing various project during the course",
			"url": ["https://github.com/jordan23jy?tab=repositories"]
		}
	]
}

var bio = {
		
	"name": "Jordan Yong",
	"role": "Web Developer",
	"contacts": {
		"mobile": "60-16-819-5430",
		"email": "jordanyong23@gmail.com",
		"github": "jordan23jy",
		"location": "Kuala Lumpur"
	},
	"welcomeMessage": "Hello World",
	"skills": [
	"Javascript", "HTML/CSS", "JQuery"
	],
	"bioPic": "images/fry.jpg"
		
}

var education = {
	"schools": [
		{
			"name": "Sinaran Institute",
			"city": "Kota Kinabalu",
			"degree": "A-Levels",
			"major": ["Science", "Mathematics"],
			"dates": "2008 - 2009"
		},
		{
			"name": "Univeristy of Nottingham",
			"city": "Kuala Lumpur",
			"degree": "Engineering",
			"major": ["Civil Engineering"],
			"dates": "2009 - 2013",
			"url": "http://www.nottingham.edu.my"
		}
	],
	"onlineCourses" : [
		{
			"title": "JavaScript Synthax",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com"
		}
	]
}

function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBio = formattedName + formattedRole
	$("#header").prepend(formattedBio);

	
	

	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedContact = formattedMobile + "   " + formattedEmail + "   " + formattedGithub;
	$("#topContacts").append(formattedContact);

	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedImage);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkillsStart = HTMLskillsStart;
	
	$("#header").append(formattedWelcomeMsg + formattedSkillsStart);

	for (skill in bio.skills) {
		
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkills);
	}
	
};

displayBio();

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(
			formattedEmployerTitle);
	}
};

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}




function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);