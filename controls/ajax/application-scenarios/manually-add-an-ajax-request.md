---
title: Manually Add an AJAX Request
page_title: Manually Add an AJAX Request | UI for ASP.NET AJAX Documentation
description: Manually Add an AJAX Request
slug: ajax/application-scenarios/manually-add-an-ajax-request
tags: manually,add,an,ajax,request
published: True
position: 3
---

# Manually Add an AJAX Request



Usually HTML elements have more client-side events than their server-side counterparts. For example, the __asp:TextBox__ control implements only the __TextChanged__ server-side event while the corresponding HTML element has a few more: __OnMouseOver__, __OnMouseOut__, __OnKeyPress__, __OnKeyUp__,__OnKeyDown__, etc. If you want to AJAX-enable one of these client events you have to follow the instructions bellow:

## Method I (Add the Attribute Declaratively)

1. Add the __OnKeyUp__ attribute and make it call a custom function:

````ASPNET
	    <asp:TextBox onkeyup="TextBoxCustomAjax('TextBox1');" ID="TextBox1" runat="server">
	    </asp:TextBox>
````



2. Implement the __TextBoxCustomAjax__ function:

````JavaScript
	        function TextBoxCustomAjax(eventArgs) {
	            $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest(eventArgs);
	        }
````



* a. Implement the __AjaxRequest__ server event of the __RadAjaxManager__:

>tabbedCode

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


>end

* b. In the designer, set __RadAjaxManager1__ to update __Label1__.

## Method II (Add the Attribute from Code-behind).

1. Add the __OnKeyUp__ attribute:

>tabbedCode

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


>end

2. Implement the __AjaxRequest__ event of the __RadAjaxManager__:

>tabbedCode

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


>end

3.Set from the design-time configuration wizard that __RadAjaxManager1__ will update __Label1__.
