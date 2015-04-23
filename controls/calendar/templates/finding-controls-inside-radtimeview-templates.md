---
title: Finding Controls inside RadTimeView Templates
page_title: Finding Controls inside RadTimeView Templates | RadCalendar for ASP.NET AJAX Documentation
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
**INamingContainer**). Simply call the
**FindControl** method of the container object to obtain a
reference to the control in the template.

The most difficult case is locating a control inside the
**TimeTemplate** or **AlternatingTimeTemplate** of a
**RadTimeView** control. This is difficult because there are
several controls with the same ID. However, each is contained logically in the
namespace of the **DataListItem** control that is its container.
You can access the container by using the **DataList** property of
the **RadTimeView** control. You can then go through the data
list's Items collection to retrieve the **DataListItem** for a
given index. Once you have found the **DataListItem** of interest,
call its **FindControl** method to retrieve a reference to the
control in the template.

## Example

The following definitions declare a **RadTimePicker** that has
a **TimeTemplate** defined, and a **Button** whose
**Click** event handler needs to access a control in the
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



In the codebehind, the button's **Click** handler uses the
**FindControl** method of the **DataListItem** to
locate the control in the template:



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


# See Also

 * [RadTimeView Templates]({%slug calendar/templates/radtimeview-templates%})
