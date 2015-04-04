---
title: Templates Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: dropdownlist/templates/overview
tags: overview
published: True
position: 0
---

# Templates Overview



Templates allow you to embed any context inside a RadDropDownListItem. For example:

* HTML markup

* ASP.NET server controls

* other third-party controls (other Telerik RadControls for ASP.NET Ajax for example)



## Example

Shows how to use templates to create the following RadDropDownList:

An <ItemTemplate> section is added to the __RadDropDownList__ declaration. The image in the template and the text that appears in the template is taken from the RadDropDownListItem using <%# DataBinder.Eval %> statements.

````C#
	    <telerik:RadDropDownList ID="RadDropDownList1"
	         runat="server">
	        <ItemTemplate>
	            <table >
	            <tr>
	                <td>
	                    <img src='Images/<%# DataBinder.Eval(Container, "Attributes['ImagePath']") %>' alt="" />
	                </td>
	                <td>
	                    <%# DataBinder.Eval(Container, "Text") %>
	                </td>
	            </tr>
	        </table>
	        </ItemTemplate>
	        <Items>
	            <telerik:DropDownListItem ImagePath="additionOperation.png" Text="Sign for Adding" />
	            <telerik:DropDownListItem ImagePath="substractOperation.png" Text="Sign for Substracting" />
	            <telerik:DropDownListItem ImagePath="multiplyOperation.png" Text="Sign for Multiplying" />
	            <telerik:DropDownListItem ImagePath="divideOperation.png" Text="Sign for Dividing" />
	        </Items>
	    </telerik:RadDropDownList>
````



Before the template can use the RadDropDownList item's properties to bind the elements in the template, the application needs to explicitly bind the items by calling __DataBind__ method of __RadDropDownListItem__ objects.

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        for (int i = 0; i < RadDropDownList1.Items.Count; i++)
	        {
	            RadDropDownList1.Items[i].DataBind();
	        }
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	
	        Dim i As Integer = 0
	
	        While i < RadDropDownList1.Items.Count
	            RadDropDownList1.Items(i).DataBind()
	            i = i + 1
	        End While
	
	    End Sub
	
	
````
>end
