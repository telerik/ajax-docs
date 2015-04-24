---
title: Single Input Rendering Mode
page_title: Single Input Rendering Mode | RadInput for ASP.NET AJAX Documentation
description: Single Input Rendering Mode
slug: input/single-input-rendering-mode
tags: single,input,rendering,mode
published: True
position: 4
---

# Single Input Rendering Mode



Since Q3 2011 RadInput introduces a new rendering mode for its controls, where only one input element of type text is used.

Since Q1 2012 this mode is enabled by default for the RadInput controls. It could bedisables by setting the **EnableSingleInputRendering** property to **"false"**.

The main idea of this feature is to optimize the input rendering and Client-Side API. By using the single input rendering mode only two main HTML elements are rendered on the page, instead of two or three (depending on the specific RadInput) which are rendered in the non-single mode of the RadInput controls.

The two main HTML elements of the RadInput in single input rendering mode are:

* The input element in which the user types and submits.

* Span element over the input that holds formatted and empty messages when needed.

Since Q2 2012 some changes were made to the rendering engine of RadInput:

* Render one input element that to be visible all the time like in Q2 2012.

* Do not use SPAN element like in Q3 2011.

* Render only one input like in Q2 2012.

* Set validators to access different value from the visible one to work with cultures properly.

* Provide a way for showing different text in the input, without changing the validation value, in order to show empty/error messages dynamically on all Input controls.

## Getting a reference to the input area DOM element when SingleInputRendering is enabled

Due to the rendering difference when the SingleInputRendering mode is enabled the input DOM element could be accessed on the client directly with the control's server ID. Therefore, it is no longer needed to use "_text" to access the DOM element on the client.

````JavaScript
<script type="text/javascript">
	function getElement(sender, eventArgs)
	{
		var inputElement = $get('<%=RadInput1.ClientID%>');

	}
</script>
````



## Focus input element when SingleInputRendering is enabled

In order to properly focus the input element, you should directy pass the client ID of the RadInput control to the specific Focus() method, instead of using "_text".



````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadInput1.Focus();
	Page.SetFocus(RadInput1.ClientID );
	RadAjaxPanel1.FocusControl(RadInput1.ClientID );
	RadAjaxManager1.FocusControl(RadInput1.ClientID);
	ScriptManager1.SetFocus(RadInput1.ClientID );
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	RadInput1.Focus()
	Page.SetFocus(RadInput1.ClientID)
	RadAjaxPanel1.FocusControl(RadInput1.ClientID)
	RadAjaxManager1.FocusControl(RadInput1.ClientID)
	ScriptManager1.SetFocus(RadInput1.ClientID)
End Sub
````


>caution If you disable the RadInput control, its value will not be persisted on the server. More information about W3C recommendations on disabled controls can be gathered [here](http://www.w3.org/TR/html401/interact/forms.html#h-17.12.1).
>

