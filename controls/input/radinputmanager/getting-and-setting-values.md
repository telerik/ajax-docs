---
title: Getting and Setting Values
page_title: Getting and Setting Values | UI for ASP.NET AJAX Documentation
description: Getting and Setting Values
slug: input/radinputmanager/getting-and-setting-values
tags: getting,and,setting,values
published: True
position: 3
---

# Getting and Setting Values



__RadInputManager__ provides with you the ability of setting/getting values of the TextBox controls either client-side or server-side.

## Getting values Client-Side

To be able to get or set values client-side, first you should know how to get the TextBox client-side object. This can be done through the client-side object of the __RadInputManager__. Here is an example:

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function pageLoad()
	            {
	                var inputManager = $find("<%= RadInputManager1.ClientID %>");
	                var input = inputManager.get_targetInput("<%= TextBox1.ClientID %>");
	            }
	        </script>
	    </telerik:RadCodeBlock>
	    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	    <telerik:RadInputManager ID="RadInputManager1" runat="server">
	        <telerik:TextBoxSetting BehaviorID="Behavior1">
	            <TargetControls>
	                <telerik:TargetInput ControlID="TextBox1" />
	            </TargetControls>
	        </telerik:TextBoxSetting>
	    </telerik:RadInputManager>
````



For getting and setting values on the client, you can use the methods available in the __RadInput__ control client-side API listed below.

Each client-side object exposes properties for getting and setting the value of the control:


>caption  

| Property | Return Type | Description |
| ------ | ------ | ------ |
|get_value(), set_value()| __NumericTextBoxSetting__ : numberAll other input controls: string|Gets or sets the value of the TextBox control.|

In addition to the properties listed above which are present in the client-side object for all the RadInputManager target controls, the TextBox controls targeted under DateInputSettinghave the following additional methods:


>caption  

|  __Property__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ |
|get_selectedDate()|Date|Gets the value of the control as a Date value.|
|set_selectedDate()|none|Sets the value of the control.|

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function pageLoad()
	            {
	                var inputManager = $find("<%= RadInputManager1.ClientID %>");
	                var input = inputManager.get_targetInput("<%= TextBox1.ClientID %>");
	                input.set_value("Setting Value Client Side");
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



## Getting values Server-Side

On the Server-side, you can operate with the TextBox value directly through the instance of the TextBox control. Use the Text property the TextBox to set/get its value.

>tabbedCode

````ASPNET
	    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	    <telerik:RadInputManager ID="RadInputManager1" runat="server">
	        <telerik:TextBoxSetting BehaviorID="Behavior1">
	            <TargetControls>
	                <telerik:TargetInput ControlID="TextBox1" />
	            </TargetControls>
	        </telerik:TextBoxSetting>
	    </telerik:RadInputManager>
````



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        TextBox1.Text = "Setting Value Server-Side";
	    }
	
````



````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        TextBox1.Text = "Setting Value Server-Side"
	    End Sub
````


>end

## Validation

You can use ASP.NET validators for validating TextBox controls targeted in the RadInputManager settings. In this case validation works the same way as for regular TextBox controls. You simple have to set the __ID__ of the TextBox control as the value of the __ControlToValidate__ property of the validator.

## Using different Culture

With the __RadInputManager__ you can specify different __Culture__ per RadInputManager setting. And this Culture usually is different from the current Page Culture. However when setting values, the value you assign to the TextBox control should correspond to the current Page Culture. You should mind this rule especially when entering dates and floating point numbers.
