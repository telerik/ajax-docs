---
title: Dynamic InputSettings
page_title: Dynamic InputSettings | UI for ASP.NET AJAX Documentation
description: Dynamic InputSettings
slug: input/radinputmanager/dynamic-inputsettings
tags: dynamic,inputsettings
published: True
position: 5
---

# Dynamic InputSettings



## 

You extend TextBox controls with RadInputManager by [adding InputSettings to RadInputManager](http://www.telerik.com/help/aspnet-ajax/using_radinputmanager.html). You would generally use the designer to add the markup of your RadInputManager and its InputSettings to your page. Alternatively, you can add InputSettings dynamically from code-behind. To do that, you need to strictly follow these requirements:

1. Your RadInputManager instance should be dynamically created on Init or Load

1. You need to initialize and add the InputSettings to the RadInputManager first.

1. You need to add RadInputManager to the Page after you have added all the InputSettings.



````C#
	    protected void Page_Init(object sender, EventArgs e)
	    {
	        RadInputManager inputManager = new RadInputManager();
	        inputManager.ID = "RadInputManager1";
	        NumericTextBoxSetting numericSetting = new NumericTextBoxSetting();
	
	        numericSetting.Validation.IsRequired = true;
	        numericSetting.TargetControls.Add(new TargetInput(TextBox1.ID, true));
	
	        inputManager.InputSettings.Add(numericSetting);
	        Page.Form.Controls.Add(inputManager);
	    }
````
````VB.NET
	    Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
	        Dim inputManager As New RadInputManager()
	        inputManager.ID = "RadInputManager1"
	
	        Dim numericSetting As New NumericTextBoxSetting()
	        numericSetting.Validation.IsRequired = True
	        numericSetting.TargetControls.Add(New TargetInput(T1.ID, True))
	
	        inputManager.InputSettings.Add(numericSetting)
	        Page.Form.Controls.Add(inputManager)
	    End Sub
````


You can add InputSettings both for static and dynamic TextBox controls in this way. What is important is that RadInputManager contains all the settings by the time it is added to the Page. Otherwise, RadInputManager's built-in validation will not work.
