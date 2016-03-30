/*
    Theme Name: Interactive Quiz using HTML/CSS3/JavaScript/JQuery
    Date: January 22 2016
    Description: Basic HTML/CSS Interactive Quiz 
    Version: 1.0
    Author: Apoorva Patil
	Student ID: 00001188522
*/
var chosen,t,runs = 0;
var correct = 0, incorrect = 0,score = 0;
var a = ['21','21','21','21','21','21','21','21','21','21'];
var difficulty,easy = 0,hard = 1;
var unattempted = 0,sec = 0,attempted = 0;
var ctime,cctime;

var getDates= function()
{
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

	var d = new Date();
	var date1 = month[d.getMonth()] + "/" + d.getDate() + "/" + d.getFullYear();
	document.getElementById("sp1").innerHTML = days[d.getDay()] + "<br />" + d.toLocaleTimeString() + "<br />" + date1;

	setInterval(function(){
		var d = new Date();
		var date1 = month[d.getMonth()] + "/" + d.getDate() + "/" + d.getFullYear();
		document.getElementById("sp1").innerHTML = days[d.getDay()] + "<br />" + d.toLocaleTimeString() + "<br />" + date1;
	}, 1000);
}

var getSubjects = function()
{
	var d = new Date();
	var subchosen;
	var app;
	var t_date = d.getDate();
	var t_year = d.getFullYear();
	var t_month = d.getMonth();
	t_month = t_month + 1;
	var t_day = d.getDay();
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var month = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
	var x = days[t_day].length;
	var y = month[t_month].length;

	app = t_date + t_month + t_year + t_day + x + y;
	app = app % 2;
    switch(app)
    {
		case 0:
			subchosen = "Geology";
			break;
		case 1:
			subchosen = "Perl";
			break;
		
	}
	document.getElementById("sub").innerHTML = subchosen;
}

var selEasyQue = function()
{
	ctime = setInterval("checktimer()",1000);
	setTimeout("stoptimer()",46000);
	document.getElementById("timerrun").innerHTML = "Timer Begins!";
	difficulty = easy;
	quesNo();
}

var checktimer = function()
{
	 var min,minsec,time;
	 sec = sec + 1;
	 if(sec < 10)
	 {
	 	time = "00" + ":" + "0" + sec;
	 }
	 else if((sec >= 10) && (sec < 60))
	 {
	 	time = "00" + ":" + sec;
	 }
	 else if(sec >= 60)
	 {
	 	min = sec/60;
	 	minsec = sec%60;
	 	if((min < 10)&&(minsec < 10))
	 	{
	 		time = "0"+ min + ":" + "0" + minsec; 
	 	}
	 	else if ((min < 10)&& (minsec > 10))
	 	{
	 		time = "0" + min + ":" + minsec; 
	 	}
	 	else if((min > 10)&&(minsec< 10))
	 	{
	 		time = min + ":" + "0" + minsec;
	 	}
	 	else
	 	{
	 		time = min + ":" + minsec;
	 	}
	 }

 	document.getElementById("timerval").innerHTML = time;	
}

var selHardQue = function()
{
	ctime = setInterval("checktimer()",1000);
	setTimeout("stoptimer()",46000);
	document.getElementById("timerrun").innerHTML = "Timer Begins!";
	difficulty = hard;
	quesNo();

}

var quesNo = function()
{
	var i,j,temp;
	var x;
	var set;
		do
		{
			temp = 0;
			chosen = Math.floor(Math.random() * 20);
			for(j=0;j<10;j++)
			{
				if(a[j] == chosen)
				{
					temp = 1;
				}
			}
			if(temp == 0)
				a[runs] = chosen;
		}while(temp == 1);
	quesSet();
}

var quesSet = function()
{
	var para1,paratext1,radio0,radio1,radio2,radio3,label1,label0,label3,label4,txt0,z,b,b1;
	
	if(document.getElementById("sub").innerHTML == "Geology")
	{
		if(difficulty == easy)
			t = questeasywebset[chosen];
		else	
			t = questhardwebset[chosen];
	}
	else if(document.getElementById("sub").innerHTML == "Perl")
	{
		if(difficulty == easy)
			t = questeasyperlset[chosen];
		else	
			t = questhardperlset[chosen];
	}
	else
	{
		if(difficulty == easy)
			t = questeasynetset[chosen];
		else	
			t = questhardnetset[chosen];
	}

	runs = runs + 1;
	document.getElementById("cent").innerHTML = " ";
	z = document.getElementById("cent");
	
	para1 = document.createElement("p");
	para1.setAttribute("class","styleques");
	paratext1 = document.createTextNode(t.que);
	para1.appendChild(paratext1);
 	z.appendChild(para1);

	if(t.quetype == 1)
	{
		radio0 = document.createElement("input");
		radio0.setAttribute("type","radio");
		radio0.setAttribute("name","radio");
		radio0.setAttribute("value","radio1");
		radio0.setAttribute("id","choice1");
		label0 = document.createElement("label");
		label0.setAttribute("id","label1");
		label0.innerHTML = t.choices[0] + "<br/>";
		z.appendChild(radio0);
		z.appendChild(label0);
	
		radio1 = document.createElement("input");
		radio1.setAttribute("type","radio");
		radio1.setAttribute("name","radio");
		radio1.setAttribute("value","radio2");
		radio1.setAttribute("id","choice2");
		label1 = document.createElement("label");
		label1.setAttribute("id","label2");
		label1.innerHTML = t.choices[1] + "<br/>";
		z.appendChild(radio1);
		z.appendChild(label1);
		
		radio2 = document.createElement("input");
		radio2.setAttribute("type","radio");
		radio2.setAttribute("name","radio");
		radio2.setAttribute("value","radio3");
		radio2.setAttribute("id","choice3");
		label2 = document.createElement("label");
		label2.setAttribute("id","label3");
		label2.innerHTML = t.choices[2] + "<br/>";
		z.appendChild(radio2);
		z.appendChild(label2);
	
		radio3 = document.createElement("input");
		radio3.setAttribute("type","radio");
		radio3.setAttribute("name","radio");
		radio3.setAttribute("value","radio4");
		radio3.setAttribute("id","choice4");
		label3 = document.createElement("label");
		label3.setAttribute("id","label4");
		label3.innerHTML = t.choices[3] + "<br/>";
		z.appendChild(radio3);
		z.appendChild(label3);
	
	}
	else{
		txt0 = document.createElement("input");
		txt0.setAttribute("type","text");
		txt0.setAttribute("name","answer");
		txt0.setAttribute("id","txtans")
		txt0.setAttribute("size","25");
		txt0.setAttribute("height","20");
		z.appendChild(txt0);
	}
	if(runs<10)
	{
		b = document.createElement("button");
		b.setAttribute("onclick","compute()");
		b.setAttribute("class","choice");
		b.appendChild(document.createTextNode("Next"));
		z.appendChild(b);
		b1 = document.createElement("button");
		b1.setAttribute("onclick","quitQuiz()");
		b1.setAttribute("class","choice");
		b1.appendChild(document.createTextNode("Quit"));
		z.appendChild(b1);
	}
	else{
		b = document.createElement("button");
		b.setAttribute("onclick","scoreSubmit()");
		b.setAttribute("class","choice");
		b.appendChild(document.createTextNode("Submit"));
		z.appendChild(b);
	}		
}

var compute = function()
{
	scoreCompute();
	quesNo();
}

var scoreCompute = function()
{	
	var ansis = t.ans;
	if(t.quetype == 1)
	{
		if(document.getElementById("choice1").checked == true)
		{
			attempted = attempted + 1;
			if ((ansis + "<br>") == document.getElementById("label1").innerHTML)
			{
				document.getElementById("best").innerHTML = "Doing Well!!"
				correct = correct + 1;
				score = score + 5;
			}
			else
			{
				document.getElementById("best").innerHTML = "Do Better.."
				incorrect = incorrect + 1;
			}
		}
		else if(document.getElementById("choice2").checked == true)
		{
			attempted = attempted + 1;
			if ((ansis + "<br>") == document.getElementById("label2").innerHTML)
			{
				document.getElementById("best").innerHTML = "Doing Well!!"
				correct = correct + 1;
				score = score + 5;
			}
			else
			{
				document.getElementById("best").innerHTML = "Do Better.."
				incorrect = incorrect + 1;
			}
		}
		else if(document.getElementById("choice3").checked == true)
		{
			attempted = attempted + 1;
			if ((ansis + "<br>") == document.getElementById("label3").innerHTML)
			{
				document.getElementById("best").innerHTML = "Doing Well!!"
				correct = correct + 1;
				score = score + 5;
			}
			else
			{
				document.getElementById("best").innerHTML = "Do Better.."
				incorrect = incorrect + 1;
			}
		}
		else if(document.getElementById("choice4").checked == true)
		{
			attempted = attempted + 1;	
			if ((ansis + "<br>") == document.getElementById("label4").innerHTML)
			{
				document.getElementById("best").innerHTML = "Doing Well!!"
				correct = correct + 1;
				score = score + 5;
			}
			else
			{
				document.getElementById("best").innerHTML = "Do Better.."
				incorrect = incorrect + 1;
			}
		}
		else
		{
			document.getElementById("best").innerHTML = "Do Better.."
			incorrect = incorrect + 1;
		}
	}
	else
	{
		if(document.getElementById("txtans").value.length > 1)
		{
			attempted = attempted + 1;
		}
		if(ansis == document.getElementById("txtans").value.toLowerCase())
		{
			document.getElementById("best").innerHTML = "Doing Well!!"
			score = score + 10;
			correct = correct + 1;	
		}
		else
		{
			document.getElementById("best").innerHTML = "Do Better.."
			incorrect = incorrect + 1;
		}
	}

	var len = (runs * 10) + '%';
	$("#innerprog").animate({width: len});
	
	document.getElementById("rightans").innerHTML = correct;
	document.getElementById("wrongans").innerHTML = incorrect;
	document.getElementById("totalscore").innerHTML = score;
}

var scoreSubmit = function()
{
	clearInterval(ctime);
	document.getElementById("timerrun").innerHTML = "Timer Ends..";
	scoreCompute();
	
	var z;
	var para,para2,para1,para3,para4,para5,para6,para7,para8,para9,para10,para11;
	var paratext1,paratext,paratext3,paratext4,paratext2,paratext5,paratext6;
	var paratext7,paratext8,paratext9,paratext10,para12,paratext11,paratext12;
	
	document.getElementById("cent").innerHTML = " ";
	
	para = document.createElement("p");
	para.setAttribute("class","styleques");
	paratext = document.createTextNode("Quiz Completed!!");
	para.appendChild(paratext);
	z = document.getElementById("cent");
	z.appendChild(para);

	para1 = document.createElement("p");
	para1.setAttribute("class","compstatus");
	paratext1 = document.createTextNode("Questions Attempted:");
	para1.appendChild(paratext1);
	para2 = document.createElement("span");
	para2.setAttribute("class","compstatus");
	paratext2 = document.createTextNode(attempted);
	para2.appendChild(paratext2);
	para1.appendChild(para2);
	z.appendChild(para1);

	para3 = document.createElement("p");
	para3.setAttribute("class","compstatus");
	paratext3 = document.createTextNode("Questions Unattempted:");
	para3.appendChild(paratext3);
	para4 = document.createElement("span");
	para4.setAttribute("class","compstatus");
	paratext4 = document.createTextNode((10 - attempted));
	para4.appendChild(paratext4);
	para3.appendChild(para4);
	z.appendChild(para3);

	para5 = document.createElement("p");
	para5.setAttribute("class","compstatus");
	paratext5 = document.createTextNode("Questions Seen Before Timer Expired:");
	para5.appendChild(paratext5);
	para6 = document.createElement("span");
	para6.setAttribute("class","compstatus");
	paratext6 = document.createTextNode((correct+incorrect));
	para6.appendChild(paratext6);
	para5.appendChild(para6);
	z.appendChild(para5);

	para7 = document.createElement("p");
	para7.setAttribute("class","compstatus");
	paratext7 = document.createTextNode("Questions Correct:");
	para7.appendChild(paratext7);
	para8 = document.createElement("span");
	para8.setAttribute("class","compstatus");
	paratext8 = document.createTextNode(correct);
	para8.appendChild(paratext8);
	para7.appendChild(para8);
	z.appendChild(para7);

	para9 = document.createElement("p");
	para9.setAttribute("class","compstatus");
	paratext9 = document.createTextNode("Questions Incorrect:");
	para9.appendChild(paratext9);
	para10 = document.createElement("span");
	para10.setAttribute("class","compstatus");
	paratext10 = document.createTextNode(incorrect);
	para10.appendChild(paratext10);
	para9.appendChild(para10);
	z.appendChild(para9);

	para11 = document.createElement("p");
	para11.setAttribute("class","compstatus");
	paratext11 = document.createTextNode("Total score:");
	para11.appendChild(paratext11);
	para12 = document.createElement("span");
	para12.setAttribute("class","compstatus");
	paratext12 = document.createTextNode(score);
	para12.appendChild(paratext12);
	para11.appendChild(para12);
	z.appendChild(para11);
	
	document.getElementById("award").innerHTML = "You Got:"
	if(correct <= 3)
	{
		$("#img1").hide();
		$("#img2").hide();
		$("#img3").hide();
		$("#img4").show();
		document.getElementById("img4").style.margin = "1vw 10vw 1vw 12vw";
	}
	else if((correct > 3) && (correct <=5))
	{
		$("#img1").hide();
		$("#img2").hide();
		$("#img4").hide();
		$("#img3").show();
		document.getElementById("img3").style.margin = "1vw 10vw 1vw 12vw";
	}
	else if((correct > 5) && (correct <=7))
	{
		$("#img1").hide();
		$("#img3").hide();
		$("#img4").hide();
		$("#img2").show();
		document.getElementById("img2").style.margin = "1vw 10vw 1vw 12vw";
	}
	else 
	{
		$("#img2").hide();
		$("#img3").hide();
		$("#img4").hide();
		$("#img1").show();
		document.getElementById("img1").style.margin = "1vw 10vw 1vw 12vw";
	}
}

var stoptimer = function()
{
	clearInterval(ctime);
	scoreSubmit();
}

var quitQuiz = function()
{
	clearInterval(ctime);
	scoreSubmit();
}

var pollView = function()
{	
	var option1,option2,option3,option4,option5;
	option1 = document.getElementById("opt1").checked;
	option2 = document.getElementById("opt2").checked;
	option3 = document.getElementById("opt3").checked;
	option4 = document.getElementById("opt4").checked;
	option5 = document.getElementById("opt5").checked;
	
	if(option1 || option2 || option3 || option4 || option5)
	{
		alert("Thank You For Rating Us!!!");
		document.getElementById("opt1").checked = false;
	    document.getElementById("opt2").checked = false;
	    document.getElementById("opt3").checked = false;
	    document.getElementById("opt4").checked = false;
	    document.getElementById("opt5").checked = false;
	}
	else
	{
		alert("Please Select An Option..")
	}
}