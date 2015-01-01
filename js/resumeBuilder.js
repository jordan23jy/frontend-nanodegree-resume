
var bio = {
		
	"name": "Jordan Yong",
	"role": "Web Developer",
	"contacts": {
		"mobile": "60-16-819-5430",
		"email": "jordanyong23@gmail.com",
		"github": "jordan23jy",
		"location": "Bukit Bintang, Kuala Lumpur"
	},
	"welcomeMessage": "Hello World",
	"skills": [
	"Javascript", "HTML/CSS", "JQuery"
	],
	"bioPic": "images/fry.jpg"		
};

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBio = formattedName + formattedRole;
	$("#header").prepend(formattedBio);
	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedContacts = formattedMobile + "   " + formattedEmail + "   " + formattedGithub + "   " + formattedLocation;
	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);

	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedImage);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkillsStart = HTMLskillsStart;	
	$("#header").append(formattedWelcomeMsg + formattedSkillsStart);

	for (var skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkills);
	}
	
};

var education = {
	"schools": [
		{
			"name": "Sinaran Institute",
			"location": "Kota Kinabalu",
			"degree": "Science",
			"major": ["Physics", "Mathematics"],
			"dates": "2009",
			"url": "http://www.institut-sinaran.edu.my/"
		},
		{
			"name": "Univeristy of Nottingham",
			"location": "Kuala Lumpur",
			"degree": "BEng Civil Engineering",
			"major": ["Civil Engineering"],
			"dates": "2013",
			"url": "http://www.nottingham.edu.my"
		}
	],

	"onlineCourses" : [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com"
		}
	],

	"display" : [
		{
		}
	]
};

education.display = function () {
	
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);	
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		
		for (var majors in education.schools[school].major) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[majors]);	
			$(".education-entry:last").append(formattedMajor);
		}
	}
	
	for (var online in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);		
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);
	}
	
};

/*
HTMLonlineClasses
HTMLonlineTitle =
HTMLonlineSchool 
HTMLonlineDates =
HTMLonlineURL = '
internationalizeB

HTMLschoolStart = 
HTMLschoolName = '
HTMLschoolDegree =
HTMLschoolDates = 
HTMLschoolLocation
HTMLschoolMajor = 
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
	],

	"display" : [
		{
		}
	]

};

work.display = function () {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(
			formattedEmployerTitle);
	}
};


var projects = {
	"udacity": [
		{
			"title": "Bootstrap first project",
			"dates": 2014,
			"description": "First attempt using bootstrap to build a website",
			"images": ["http://placehold.it/300x150", "http://placehold.it/300x150"],
			"url": ["https://github.com/jordan23jy/bootstrap_projects"]
		},
		{
			"title": "Portfolio Mockup",
			"dates": 2014,
			"description": "First project on Udicaty Front-End Nanodegree",
			"images": ["http://placehold.it/300x150", "http://placehold.it/300x150"],
			"url": ["https://github.com/jordan23jy/project_1/blob/master/index.html"]
		}
	]
};

projects.display = function() {
	for (var project in projects.udacity) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.udacity[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.udacity[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.udacity[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.udacity[project].images.length > 0) {
			for (var image in projects.udacity[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.udacity[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};



//map
$("#mapDiv").append(googleMap);

function locationizer(work_obj) {
	var locationArray = [];

	for (var job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

var name = bio.name;
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();

