---
title: Overview
page_title: RadCaptcha Overview
description: Check our Web Forms article about Overview.
slug: captcha/overview
tags: overview
published: True
position: 0
---

# WebForms Captcha Overview

The RadCaptcha control helps you prevent your online forms from automated spam. The control generates distorted images of letters and numbers that are easily decipherable to humans, but not to automated programs (spam bots).

#### Strategies for protection against automated form submissions

Telerik's **RadCaptcha** control provides two major strategies for protection against automated form submissions:

1. Image with modified symbols. They are displayed in a form, and the user is required to input the symbols in a textbox. If the input is correct, the control validates that the user is not a robot. There is a set of properties that characterize the generated image:
	
	- Noise factors – background, line, font warping
	
	- Image – height and width
	
	- Text – font family name, set of characters, number of characters
	
	- CAPTCHA session expiration time
	
	- CAPTCHA error message to be displayed if the entered value was incorrect
	
1. Automatic Robots Discovery – this strategy uses predefined rules that decide whether the input comes from a robot or not. This strategy is not 100% secure and some sophisticated robots may pass it. The developer is allowed to decide which of the predefined properties to use (can be applied either separately or simultaneously):
	
	- **MinTimeout** - Minimum form submission time – the presumption is that a human cannot input the fields in a form correctly for a time less than 3 seconds (this is set by default, and can be modified). If the submission is executed faster than the predefined value, it is assumed that the executor is a robot.
	
	- **InvisibleTextBoxLabel** - Invisible textbox in the form (the so-called “honeypot”) – this rule requires the insertion of a textbox which is not visible when the form is styled. Still, it will be detected by a robot, and therefore if any data is entered, the executor is considered to be a robot. An invisible label is also used to instruct humans not to fill in the textbox. This is necessary in case the styles are turned off and the textbox becomes visible, or in case a screen reader is used for disabled people.

## See Also

* [Getting Started]({%slug captcha/getting-started%})

* [Overview Demo](https://demos.telerik.com/aspnet-ajax/captcha/examples/overview/defaultcs.aspx)
