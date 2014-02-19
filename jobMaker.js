var PERKS = [
  "3 weeks maternity/paternity leave",
  "Catered lunches",
  "Your MacBook Air",
  "Beer on tap",
  "Telecommute once a week",
  "Stocked Fridge",
  "Gym subsidy",
  "Standing desks",
  "Lofted ceilings",
  "Corner office",
  "OMG Parking...",
  "Bean bags",
  "Easy BART access"
]

var REQUIREMENTS = [
  "3+ Years in Web Development",
  "2+ Years with Javascript",
  "Familiar with OO",
  "Agile",
  "Fluent in at least one scripting language(Ruby, Python...)",
  "Strong command of mySQL",
  "Good communication skills",
  "Authorized to work in USA",
  "Comfortable with UNIX environments",
  "Can draw the rest of the owl",
  "Developed consumer facing websites",
  "Can scale a userbase",
  "Comes through with unreasonable deadlines",
  "Deploy, deploy, deploy!",
  "Can write unit tests",
  "Familiarity working with REST APIs"
]


var betterTitle = {
  prefix: ['Jr.', 'Sr.', 'Lead', '', 'Co-founding', 'Master'],
  name: ['Software', 'Web', 'Rails', 'Database', 'Full-Stack', 'Front-End', 'Back-End'],
  position: ['Developer', 'Engineer', 'Intern', 'Code Monkey', 'Programmer']
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var randomJobPost = function (){
  this.title = shuffle(betterTitle.prefix)[0]
    + ' ' + shuffle(betterTitle.name)[0] + ' '
    + shuffle(betterTitle.position)[0],
  this.requirements = shuffle(REQUIREMENTS).slice(0,3),
  this.perks = shuffle(PERKS).slice(0,2)
};

module.exports.randomJobPost = randomJobPost
