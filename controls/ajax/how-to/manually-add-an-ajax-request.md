---
title: Manually Add an AJAX Request
page_title: Manually Add an AJAX Request | RadAjax for ASP.NET AJAX Documentation
description: Manually Add an AJAX Request
slug: ajax/how-to/manually-add-an-ajax-request
tags: manually,add,an,ajax,request
published: True
position: 3
---

# Manually Add an AJAX Request



Usually HTML elements have more client-side events than their server-side counterparts. For example, the **asp:TextBox** control implements only the **TextChanged** server-side event while the corresponding HTML element has a few more: **OnMouseOver**, **OnMouseOut**, **OnKeyPress**, **OnKeyUp**,**OnKeyDown**, etc. If you want to AJAX-enable one of these client events you have to follow the instructions bellow:

## Method I (Add the Attribute Declaratively)

1. Add the **OnKeyUp** attribute and make it call a custom function:

````ASPNET
	    <asp:TextBox onkeyup="TextBoxCustomAjax('TextBox1');" ID="TextBox1" runat="server">
	    </asp:TextBox>
````



2. Implement the **TextBoxCustomAjax** function:

````JavaScript
	        function TextBoxCustomAjax(eventArgs) {
	            $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest(eventArgs);
	        }
````



* a. Implement the **AjaxRequest** server event of the **RadAjaxManager**:



````C#
	
	    protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
	    {
	        if (e.Argument == TextBox1.ClientID)
	        {
	            Label1.Text = TextBox1.Text;
	        }
	    }
				
````
````VB
	
	    Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
	        If e.Argument = TextBox1.ClientID Then
	            Label1.Text = TextBox1.Text
	        End If
	    End Sub
````


* b. In the designer, set **RadAjaxManager1** to update **Label1**.

## Method II (Add the Attribute from Code-behind).

1. Add the **OnKeyUp** attribute:



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        TextBox1.Attributes.Add("onkeyup", RadAjaxManager1.GetAjaxRequestReference(TextBox1.ClientID));
	    }
	
````
````VB
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        TextBox1.Attributes.Add("onkeyup", RadAjaxManager1.GetAjaxRequestReference(TextBox1.ClientID))
	    End Sub
````


2. Implement the **AjaxRequest** event of the **RadAjaxManager**:



````C#
	    protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
	    {
	        if (e.Argument == TextBox1.ClientID)
	        {
	            Label1.Text = TextBox1.Text;
	        }
	    }
	
````
````VB
	    Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
	        If e.Argument = TextBox1.ClientID Then
	            Label1.Text = TextBox1.Text
	        End If
	    End Sub
	
````


3.Set from the design-time configuration wizard that **RadAjaxManager1** will update **Label1**.
