---
title: Input Appearance Is Not Updated When Disabled In Internet Explorer
page_title: Input Appearance Is Not Updated When Disabled In Internet Explorer | RadFormDecorator for ASP.NET AJAX Documentation
description: Input Appearance Is Not Updated When Disabled In Internet Explorer
slug: formdecorator/troubleshooting/input-appearance-is-not-updated-when-disabled-in-internet-explorer
tags: input,appearance,is,not,updated,when,disabled,in,internet,explorer
published: True
position: 0
---

# Input Appearance Is Not Updated When Disabled In Internet Explorer



## 

This help article describes an appearance issue with decorated inputs by **RadFormDecorator** when disabled with JavaScript in Internet Explorer and offers a resolution to it.

**Problem:**

The appearance of decorated enabled inputs of type "checkbox", "button" and "radio" is not updated when they are disabled with JavaScript in Internet Explorer 10 and below. This issue is reproducible with the code from **Example 1**.

**Example 1:** Decorated inputs of type "checkbox", "button" and "radio" do not change their appearance when disabled with JavaScript under IE 10 and below.

````JavaScript
	    <script type="text/javascript">
	    	function disableInputs() {
	
	    		var inputCheckBox = $get("<%=myInputCheckBox1.ClientID%>");
	    		var inputRadio = $get("<%=myInputRadio1.ClientID%>");
	    		var inputButton = $get("<%=myInputButton1.ClientID%>");
	
	    		inputCheckBox.disabled = true;
	    		inputRadio.disabled = true;
	    		inputButton.disabled = true;
	    	}
	    </script>
````



````ASPNET
		<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="All" />
		<telerik:RadButton ID="RadButton1" runat="server" AutoPostBack="false" OnClientClicked="disableInputs" Text="Disable Inputs" />
		<input type="checkbox" id="myInputCheckBox1" runat="server" name="name1" value="value1" checked="checked" />
		<input type="radio" id="myInputRadio1" runat="server" name="name2" value="value2" />
		<input type="button" id="myInputButton1" runat="server" name="name3" value="value3" />
		
````



**Cause:**

Internet Explorer 10 and below have an issue with tracking the disabled property of DOM elements when an enabled element is disabled. This is a bug in Internet Explorer and there is no workaround about it.

**Solution:**

There are two ways to workaround this browser limitation:

* Skip the checkbox, button and radio button elements from decoration by setting the **ControlsToSkip** property of the **RadFormDecorator** to **"CheckBoxes,Buttons,RadioButtons"**.**Example 2:** Skipping checkbox, button and radio button elements from decoration by **RadFormDecorator**.

````ASPNET
		<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="All" ControlsToSkip="CheckBoxes,Buttons,RadioButtons" />
````



* Set the CSS classes **RadFormDecorator** uses for the disabled inputs appearance manually. **RadFormDecorator** will remove them when needed (e.g., if inputs are enabled their appearance will be updated too).**Example 3:** Setting the necessary CSS classes to the decorated elements used for their disabled state in Internet Explorer.

````JavaScript
		<script type="text/javascript">
			function disableInputs() {
	
				var inputCheckBox = $get("<%=myInputCheckBox2.ClientID%>");
				var inputRadio = $get("<%=myInputRadio2.ClientID%>");
				var inputButton = $get("<%=myInputButton2.ClientID%>");
	
				//If the browser is IE manually set the css classes for the disabled state of inputs
				if ($telerik.isIE) {
					setDisabledCssClassToDecoratedElement(inputCheckBox, 'rfdInputDisabled');
					setDisabledCssClassToDecoratedElement(inputRadio, 'rfdInputDisabled');
					setDisabledCssClassToDecoratedElement(inputButton, 'rfdInputDisabled');
				}
				inputCheckBox.disabled = true;
				inputRadio.disabled = true;
				inputButton.disabled = true;
			}
			function setDisabledCssClassToDecoratedElement(element, disabledCssClass) {
				var decoratedElement = Telerik.Web.UI.RadFormDecorator.getDecoratedElement(element);
				Sys.UI.DomElement.addCssClass(decoratedElement, disabledCssClass);
			}
		</script>
````



````ASPNET
		<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="All" RenderMode="Classic" />
		<telerik:RadButton ID="RadButton2" runat="server" AutoPostBack="false" OnClientClicked="disableInputs" Text="Disable Inputs" />
		<input type="checkbox" id="myInputCheckBox2" runat="server" name="name1" value="value1" checked="checked" />
		<input type="radio" id="myInputRadio2" runat="server" name="name2" value="value2" />
		<input type="button" id="myInputButton2" runat="server" name="name3" value="value3" />
````



# See Also

 * [RadFormDecorator Checkbox And Radio OnClick Event Is Not Fired]({%slug formdecorator/troubleshooting/checkbox-and-radio-button-click-event-is-not-fired%})

 * [RadFormDecorator Integration With RadControls]({%slug formdecorator/integration-with-radcontrols%})

 * [RadFormDecorator Integration With Standard Controls]({%slug formdecorator/integration-with-standard-controls%})

 * [RadFormDecorator Overview]({%slug formdecorator/overview%})
