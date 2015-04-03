---
title: RadButton Validation and Client-side Event Handlers
page_title: RadButton Validation and Client-side Event Handlers | UI for ASP.NET AJAX Documentation
description: RadButton Validation and Client-side Event Handlers
slug: button/application-scenarios/radbutton-validation-and-client-side-event-handlers
tags: radbutton,validation,and,client-side,event,handlers
published: True
position: 0
---

# RadButton Validation and Client-side Event Handlers



## 

When the ASP.NET Validation is used along with a __RadButton__ that has client-sideevent handler attached, an unexpected behavior may occur. The client-side script will be executed beforethe validation takes place, which is an expected behavior and can be observed with standard Button controlas well. As a result the client's script logic won't be executed properly if it relies on postback of the page and the validation is not successful.

To avoid this effect, the client-side method[Page_ClientValidate](http://msdn.microsoft.com/en-us/library/aa338815%28v=vs.71%29.aspx)should be utilized. It forces the validation on the client and returns a boolean value, indicating whetherit is successful. Using this value you can stop the execution of the client-side function in case thepage is not validated. The following example shows how to achieve this.

>note As of Q2 2012 the client-side event __OnClientClicking__ is raised after thevalidation of the page and calling the method __Page_ClientValidate__ is no longer needed.
>


On the ASPX page markup below are added a __TextBox__, which is validatedwith __RequiredFieldValidator__. The page is submitted through a__RadButton__, that has postback confirmation executed on its __OnClientClicking__ event:

````ASPNET
		<asp:TextBox ID="Textbox1" runat="server" />
		<asp:RequiredFieldValidator ID="Requiredfieldvalidator1" ErrorMessage="Field is empty!"
				ControlToValidate="Textbox1" runat="server" ValidationGroup="Val" />
		<br />
		<telerik:RadButton ID="btnStandardConfirm" runat="server" Text="Standard window.confirm"
				OnClientClicking="StandardConfirm" ValidationGroup="Val">
		</telerik:RadButton>
		
````



Below is the JavaScript function, specified as handler of the __OnClientClicking__ event.Note that before the main logic is executed, the __Page_ClientValidate__ method is usedin order to validate the page on the client. If the validation is successful, the confirm dialog is displayed:

````ASPNET
		<script type="text/javascript">
	        //<![CDATA[
					function StandardConfirm(sender, args) {
						var validated = Page_ClientValidate('Val');
						if (!validated) return;
						args.set_cancel(!window.confirm("Are you sure you want to submit the page?"));
					}
			//]]>
		</script>
````



# See Also

 * [Use NavigateUrl with StandardButton Type]({%slug button/application-scenarios/use-navigateurl-with-standardbutton-type%})
