---
title: Overview
page_title: RadCaptcha Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: captcha/overview
tags: overview
published: True
position: 0
---

# RadCaptcha Overview

## 

![Rad Captcha](images/RadCaptcha.PNG)

Telerik's **RadCaptcha** control provides two major strategies for protection against automated form submissions:

1. Image with modified symbols. They are displayed in a form, and the user is required to input the symbols in a textbox. If the input is correct, the control validates that the user is not a robot because it is not yet possible for robots to identify distorted symbols. This is the most secure method to protect from comment spam. There is a set of properties that characterize the image:
	
	1. Noise factors – background, line, font warping
	
	1. Image – height and width
	
	1. Text – font family name, set of characters, number of characters
	
	1. CAPTCHA session expiration time
	
	1. CAPTCHA error message to be displayed if the entered value was incorrect
	
1. Automatic Robots Discovery – this strategy uses predefined rules which decide whether the input comes from a robot or not. This strategy is not 100% secure and some sophisticated robots may pass it. The Sitefinity administrator is allowed to decide which of the predefined rules to use. At this point, there are two implemented rules that could be applied either separately or simultaneously:
	
	1. Minimum form submission time – the presumption is that a human cannot input the fields in a form correctly for a time less than 3 seconds (this is set by default, and could be modified). If the submission is executed faster than the predefined value, it is assumed that the executor is a robot.
	
	1. Invisible textbox in the form (the so-called “honeypot”) – this rule requires the insertion of a textbox which is not visible when the form is styled. Still, it will be detected by a robot, and therefore if any data is entered, the executor is considered to be a robot. An invisible label is also used to instruct humans not to fill in the textbox. This is necessary in case the styles are turned off and the textbox becomes visible, or in case a screen reader is used for disabled people.
