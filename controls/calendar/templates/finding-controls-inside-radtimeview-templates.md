---
title: Finding Controls inside RadTimeView Templates
page_title: Finding Controls inside RadTimeView Templates | UI for ASP.NET AJAX Documentation
description: Finding Controls inside RadTimeView Templates
slug: calendar/templates/finding-controls-inside-radtimeview-templates
tags: finding,controls,inside,radtimeview,templates
published: True
position: 3
---

# Finding Controls inside RadTimeView Templates



Sometimes it is necessary to locate a control contained inside a template.
If the control is given an ID in the template, it can be retrieved from its
container (the first control in the parent hierarchy that supports
__INamingContainer__). Simply call the
__FindControl__ method of the container object to obtain a
reference to the control in the template.

The most difficult case is locating a control inside the
__TimeTemplate__ or __AlternatingTimeTemplate__ of a
__RadTimeView__ control. This is difficult because there are
several controls with the same ID. However, each is contained logically in the
namespace of the __DataListItem__ control that is its container.
You can access the container by using the __DataList__ property of
the __RadTimeView__ control. You can then go through the data
list's Items collection to retrieve the __DataListItem__ for a
given index. Once you have found the __DataListItem__ of interest,
call its __FindControl__ method to retrieve a reference to the
control in the template.

## Example

The following definitions declare a __RadTimePicker__ that has
a __TimeTemplate__ defined, and a __Button__ whose
__Click__ event handler needs to access a control in the
template:

````ASPNET
	     
	
	<telerik:RadTimePicker ID="RadTimePicker1" runat="server">
	    <TimeView>
	        <TimeTemplate>
	            <input style="width: 100%;"
	            runat= "server"
	            id= "Button1"
	            type="button"
	            value='<%# DataBinder.Eval(Container, "DataItem.Time", "{0:t}")%>' />
	        </TimeTemplate>
	    </TimeView>
	</telerik:RadTimePicker>
	<asp:Button
	   ID="btnChangeColor"
	   runat="server"
	   Text="Change Color"
	   OnClick="btnChangeColor_Click" />
	
				
````



In the codebehind, the button's __Click__ handler uses the
__FindControl__ method of the __DataListItem__ to
locate the control in the template:

>tabbedCode

````C#
	
	    protected void btnChangeColor_Click(object sender, EventArgs e)
	    {
	        foreach (DataListItem dataListItem in RadTimePicker1.TimeView.DataList.Items)
	        {
	            HtmlInputButton button = (HtmlInputButton)dataListItem.FindControl("Button1");
	            button.Style.Add("background-color", "red");
	        }
	    }
	
````
````VB.NET
	     
		Protected Sub btnChangeColor_Click(ByVal sender As Object, ByVal e As EventArgs) Handles btnChangeColor.Click
	        For Each dataListItem As DataListItem In RadTimePicker1.TimeView.DataList.Items
	            Dim button As HtmlInputButton = DirectCast(dataListItem.FindControl("Button1"), HtmlInputButton)
	            button.Style.Add("background-color", "red")
	        Next
	    End Sub
	
````
>end

# See Also

 * [RadTimeView Templates]({%slug calendar/templates/radtimeview-templates%})
