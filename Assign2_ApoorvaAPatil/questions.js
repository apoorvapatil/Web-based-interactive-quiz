/*
    Theme Name: Interactive Quiz using HTML/CSS3/JavaScript/JQuery
    Date: January 22 2016
    Description: Basic HTML/CSS Interactive Quiz 
    Version: 1.0
    Author: Apoorva Patil
    Student ID: 00001188522

*/
var questeasyperlset = [
		{
			que:"Which of the following special variable represents current file name?",
			quetype:1,
			choices:["FILE","_FILE_","file","all of the mentioned"],
			ans:"all of the mentioned",
		    score:5
		},
		{
			que:"Most common data type is suppported in Perl?",
			quetype:2,
			ans:"Array",
			score:10
		},
	    {
	    	que:"Which of the following special variable represents current package name??",
			quetype:1,
			choices:["PACKAGE","_PACKAGE_","package","None"],
			ans:"_PACKAGE_",
			score:5
		},
		{
	    	que:"Which of the following method prepends list to the front of the array, and returns the number of elements in the new array?",
			quetype:2,
			ans:"unshift @ARRAY, LIST",
			score:10
		},
		{
			que:"Which of the following function returns epoch time?",
			quetype:1,
			choices:["localtime","gmtime","time","all of the mentioned"],
			ans:"all of the mentioned",
		    score:5
		},
		{
	    	que:"Which of the following statement repeats a statement or group of statements until a given condition becomes true. It tests the condition before executing the loop body?",
			quetype:2,		
			ans:"until",
			score:10
		},
	    {
	    	que:"Which of the following operator decreases integer value by one?",
		    quetype:1,
		    choices:["--","++","=","none of the mentioned"],
		    ans:"--",
		    score:5
		},
		{
	    	que:"How will you get the count of parameters passed to a perl subroutine?",
			quetype:2,
			ans:"using scalar(@_)",
			score:10
		},
	    {
	    	que:"Which of the following operator is used when the current value of a variable must be visible to called subroutines?",
			quetype:1,		
			choices:["my","local","state","none"],
			ans:"local",
		    score:5
		},
		{
			que:"Which of the following operator performs exponential (power) calculation on operators?",
			quetype:2,
			ans:"**",
			score:10
		},
	    {
	    	que:"Which of the following operator checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true?",
			quetype:1,
			choices:["<",">=","<=","<=>"],
			ans:"<=",
			score:5
		},
		{
	    	que:"Which of the following operator checks if the value of left operand equal to the value of right operand, if yes then condition becomes true?",
			quetype:1,
			choices:["==",">=","<=","<=>"],
			ans:"==",
			score:5
		},
	    {
	    	que:"Which of the following operator checks if the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true?",
			quetype:1,
			choices:["<",">=","<=","<=>"],
			ans:">=",
			score:5
		},
		{
			que:"Which of the following function returns a single character from the specified FILEHANDLE, or STDIN if none is specified?",
			quetype:2,
			ans:"getc",
			score:10
		},
	    {
	    	que:"Which of the following function returns a single character from the specified FILEHANDLE, or STDIN if none is specified?",
			quetype:1,
			choices:["close","getc",
					"seek","none of the mentioned"],
		    ans:"getc",
		    score:5
		},
		{
			que:"Which of the function points current position of a pointer to a particular position in a file?",
			quetype:2,
			ans:"seek",
			score:10
		},
	    {
	    	que:"Which of the following statement causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating?",
			quetype:1,
		 	choices:["next","last",
					"continue","redo"],
			ans:"next",
		    score:5
		},
	    {
	    	que:"Which of the following statement executes a sequence of statements multiple times and abbreviates the code that manages the loop variable?",
			quetype:2,		
			ans:"for",
		    score:10
		},
	    {
	    	que:"Which of the following operator checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true?",
			quetype:1,
			choices:["<",">=","<=","<=>"],
			ans:"<=",
		    score:5
		},
	    {
	    	que:"In which of the following variable context, an expression is being evaluated to see whether it's true or false?",
			quetype:2,
			ans:"boolean",
		    score:10
		}
];

var questeasywebset = [
		{
			que:"What is the center most layer of the Earth?",
			quetype:1,
			choices:["Outer core"," Inner core","Mantle","None"],
			ans:"Inner core",
		    score:5
		},
		{
			que:"The layer of the Earth that is both liquid and solid is the",
			quetype:2,
			ans:"Mantle",
			score:10
		},
	    {
	    	que:"The solid least dense layer of the Earth is the",
			quetype:1,
			choices:["Outer core"," Inner core","Mantle","Crust"],
			ans:"Crust",
			score:5
		},
		{
	    	que:"What is the only liquid layer of the Earth?",
			quetype:2,
			ans:"Outer Core",
			score:10
		},
		{
			que:"What happens to density as you go deeper into the Earth?",
			quetype:1,
			choices:["It increases","It decreases","stays same","none"],
			ans:"It increases",
		    score:5
		},
		{
	    	que:"What happens to temperature as you go deeper into the Earth?",
			quetype:2,		
			ans:"It increases",
			score:10
		},
	    {
	    	que:"The dense metallic layer of the Earth is the",
		    quetype:1,
		    choices:["Outer core"," Inner core","Mantle","Crust"],
		    ans:"Inner core",
		    score:5
		},
		{
	    	que:"The idea that continents slowly move over Earth's surface is called",
			quetype:2,
			ans:"Continental drift",
			score:10
		},
	    {
	    	que:"The layer on which we live is the",
			quetype:1,		
			choices:["Outer core"," Inner core","Mantle","Crust"],
			ans:"Crust",
		    score:5
		},
		{
			que:"Wegener's hypothesis was",
			quetype:2,
			ans:"That the landmasses had been joined together as Pangaea, and have since drifted apart",
			score:10
		},
	    {
	    	que:"Pangaea existed",
			quetype:1,
			choices:["5 thousand years","250 thousand years","10 thousand years","None"],
			ans:"250 thousand years",
			score:5
		},
		{
	    	que:"One piece of evidence for Pangaea was that",
			quetype:2,
			ans:"The same fossilized organism was found on two different continents",
		    score:10
		},
	    {
	    	que:"The Mesosaurus fossil being found on two sides of an ocean are the result of",
	    	quetype:1,
			choices:["The movement of tectonic plates","Earthquake","all","none"],
			ans:"The movement of tectonic plates",
			score:5
		},
		{
			que:"Text within EM tag is displayed as?",
			quetype:2,
			ans:"italic",
			score:10
		},
	    {
	    	que:"No one believed Wegener because",
			quetype:1,
			choices:["He did not provide an explanation for the force that moved the continents","His ideas were false","all","None"],
		    ans:"He did not provide an explanation for the force that moved the continents",
		    score:5
		},
		{
			que:"The ___________ forms the relatively cool, brittle plates of plate tectonics.",
			quetype:2,
			ans:"Lithosphere",
			score:10
		},
	    {
	    	que:"A ______ is a well-tested and widely accepted view that best explains certain scientific observations.",
			quetype:1,
		 	choices:["Hypothesis","Generalization",
					"Theory","None"],
			ans:"Theory",
		    score:5
		},
	    {
	    	que:"__________ rocks form by crystallization and consolidation of molten magma.",
			quetype:2,		
			ans:"Ingeneous",
		    score:10
		},
	    {
	    	que:"_________ rocks always originate at the surface of the solid Earth.",
			quetype:1,
			choices:["Metamorphic","Sedimentory","all","None"],
			ans:"Sedimentory",
		    score:5
		},
	    {
	    	que:"In correct order from the center outward, Earth includes which units?",
			quetype:2,
			ans:"Inner core, outer core, mantle, crust",
		    score:10
		}
];

var questhardperlset = [
		{
			que:"Which of the following special variable represents current file name?",
			quetype:1,
			choices:["FILE","_FILE_","file","all of the mentioned"],
			ans:"all of the mentioned",
		    score:5
		},
		{
			que:"Most common data type is suppported in Perl?",
			quetype:2,
			ans:"Array",
			score:10
		},
	    {
	    	que:"Which of the following special variable represents current package name??",
			quetype:1,
			choices:["PACKAGE","_PACKAGE_","package","None"],
			ans:"_PACKAGE_",
			score:5
		},
		{
	    	que:"Which of the following method prepends list to the front of the array, and returns the number of elements in the new array?",
			quetype:2,
			ans:"unshift @ARRAY, LIST",
			score:10
		},
		{
			que:"Which of the following function returns epoch time?",
			quetype:1,
			choices:["localtime","gmtime","time","all of the mentioned"],
			ans:"all of the mentioned",
		    score:5
		},
		{
	    	que:"Which of the following statement repeats a statement or group of statements until a given condition becomes true. It tests the condition before executing the loop body?",
			quetype:2,		
			ans:"until",
			score:10
		},
	    {
	    	que:"Which of the following operator decreases integer value by one?",
		    quetype:1,
		    choices:["--","++","=","none of the mentioned"],
		    ans:"--",
		    score:5
		},
		{
	    	que:"How will you get the count of parameters passed to a perl subroutine?",
			quetype:2,
			ans:"using scalar(@_)",
			score:10
		},
	    {
	    	que:"Which of the following operator is used when the current value of a variable must be visible to called subroutines?",
			quetype:1,		
			choices:["my","local","state","none"],
			ans:"local",
		    score:5
		},
		{
			que:"Which of the following operator performs exponential (power) calculation on operators?",
			quetype:2,
			ans:"**",
			score:10
		},
	    {
	    	que:"Which of the following operator checks if the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true?",
			quetype:1,
			choices:["<",">=","<=","<=>"],
			ans:">=",
			score:5
		},
		{
	    	que:"The link between two processes P and Q to send and receive messages is called :",
			quetype:2,
			ans:"communication link",
		    score:10
		},
	    {
	    	que:"Which one of the following is not shared by threads?",
	    	quetype:1,
			choices:["program counter","stack","program counter and stack","none of the mentioned"],
			ans:"program counter and stack",
			score:5
		},
		{
			que:"Which of the following function returns a single character from the specified FILEHANDLE, or STDIN if none is specified?",
			quetype:2,
			ans:"getc",
			score:10
		},
	    {
	    	que:"Which of the following function returns a single character from the specified FILEHANDLE, or STDIN if none is specified?",
			quetype:1,
			choices:["close","getc",
					"seek","none of the mentioned"],
		    ans:"getc",
		    score:5
		},
		{
			que:"Which of the function points current position of a pointer to a particular position in a file?",
			quetype:2,
			ans:"seek",
			score:10
		},
	    {
	    	que:"Which of the following statement causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating?",
			quetype:1,
		 	choices:["next","last",
					"continue","redo"],
			ans:"next",
		    score:5
		},
	    {
	    	que:"Which of the following statement executes a sequence of statements multiple times and abbreviates the code that manages the loop variable?",
			quetype:2,		
			ans:"for",
		    score:10
		},
	    {
	    	que:"Which of the following operator checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true?",
			quetype:1,
			choices:["<",">=","<=","<=>"],
			ans:"<=",
		    score:5
		},
	    {
	    	que:"In which of the following variable context, an expression is being evaluated to see whether it's true or false?",
			quetype:2,
			ans:"boolean",
		    score:10
		}
];

var questhardwebset = [
		 {
			que:"What is the center most layer of the Earth?",
			quetype:1,
			choices:["Outer core"," Inner core","Mantle","None"],
			ans:"Inner core",
		    score:5
		},
		{
			que:"The layer of the Earth that is both liquid and solid is the",
			quetype:2,
			ans:"Mantle",
			score:10
		},
	    {
	    	que:"The solid least dense layer of the Earth is the",
			quetype:1,
			choices:["Outer core"," Inner core","Mantle","Crust"],
			ans:"Crust",
			score:5
		},
		{
	    	que:"What is the only liquid layer of the Earth?",
			quetype:2,
			ans:"Outer Core",
			score:10
		},
		{
			que:"What happens to density as you go deeper into the Earth?",
			quetype:1,
			choices:["It increases","It decreases","stays same","none"],
			ans:"It increases",
		    score:5
		},
		{
	    	que:"What happens to temperature as you go deeper into the Earth?",
			quetype:2,		
			ans:"It increases",
			score:10
		},
	    {
	    	que:"The dense metallic layer of the Earth is the",
		    quetype:1,
		    choices:["Outer core"," Inner core","Mantle","Crust"],
		    ans:"Inner core",
		    score:5
		},
		{
	    	que:"The idea that continents slowly move over Earth's surface is called",
			quetype:2,
			ans:"Continental drift",
			score:10
		},
	    {
	    	que:"The layer on which we live is the",
			quetype:1,		
			choices:["Outer core"," Inner core","Mantle","Crust"],
			ans:"Crust",
		    score:5
		},
		{
			que:"Wegener's hypothesis was",
			quetype:2,
			ans:"That the landmasses had been joined together as Pangaea, and have since drifted apart",
			score:10
		},
	    {
	    	que:"Pangaea existed",
			quetype:1,
			choices:["5 thousand years","250 thousand years","10 thousand years","None"],
			ans:"250 thousand years",
			score:5
		},
		{
	    	que:"One piece of evidence for Pangaea was that",
			quetype:2,
			ans:"The same fossilized organism was found on two different continents",
		    score:10
		},
	    {
	    	que:"The Mesosaurus fossil being found on two sides of an ocean are the result of",
	    	quetype:1,
			choices:["The movement of tectonic plates","Earthquake","all","none"],
			ans:"The movement of tectonic plates",
			score:5
		},
		{
			que:"Text within EM tag is displayed as?",
			quetype:2,
			ans:"italic",
			score:10
		},
	    {
	    	que:"No one believed Wegener because",
			quetype:1,
			choices:["He did not provide an explanation for the force that moved the continents","His ideas were false","all","None"],
		    ans:"He did not provide an explanation for the force that moved the continents",
		    score:5
		},
		{
			que:"The ___________ forms the relatively cool, brittle plates of plate tectonics.",
			quetype:2,
			ans:"Lithosphere",
			score:10
		},
	    {
	    	que:"A ______ is a well-tested and widely accepted view that best explains certain scientific observations.",
			quetype:1,
		 	choices:["Hypothesis","Generalization",
					"Theory","None"],
			ans:"Theory",
		    score:5
		},
	    {
	    	que:"__________ rocks form by crystallization and consolidation of molten magma.",
			quetype:2,		
			ans:"Ingeneous",
		    score:10
		},
	    {
	    	que:"_________ rocks always originate at the surface of the solid Earth.",
			quetype:1,
			choices:["Metamorphic","Sedimentory","all","None"],
			ans:"Sedimentory",
		    score:5
		},
	    {
	    	que:"In correct order from the center outward, Earth includes which units?",
			quetype:2,
			ans:"Inner core, outer core, mantle, crust",
		    score:10
		}
];
