---
title: Manually Add an AJAX Request
page_title: Manually Add an AJAX Request
description: "Learn how to manually add an Ajax request."
slug: ajaxmanager/how-to/manually-add-an-ajax-request
previous_url: ajax/how-to/manually-add-an-ajax-request, controls/ajaxmanager/how-to/manually-add-an-ajax-request
tags: telerik, asp, net, ajax, manager, how, to, manually, add, request
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I manually add an Ajax request with Telerik UI for ASP.NET AJAX? 

## Solution


Usually HTML elements have more client-side events than their server-side counterparts. For example, the `asp:TextBox` control implements only the `TextChanged` server-side event while the corresponding HTML element has a few more, namely, `OnMouseOver`, `OnMouseOut`, `OnKeyPress`, `OnKeyUp`, `OnKeyDown`, and so on. To AJAX-enable one of these client events, use any of the following approaches. 

### Adding the Attribute Declaratively

1. Add the `OnKeyUp` attribute and make it call a custom function:

  ````ASP.NET
  <asp:TextBox onkeyup="TextBoxCustomAjax('TextBox1');" ID="TextBox1" runat="server">
  </asp:TextBox>
  ````



2. Implement the `TextBoxCustomAjax` function:

  ````JavaScript
   function TextBoxCustomAjax(eventArgs) {
  	 $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest(eventArgs);
   }
  ````


  * Implement the `AjaxRequest` server event of the AjaxManager:



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


    * In the designer, set `RadAjaxManager1` to update `Label1`.

### Adding the Attribute from Code-Behind

1. Add the `OnKeyUp` attribute:



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


2. Implement the `AjaxRequest` event of the AjaxManager:



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


3. From the design-time configuration wizard, define that `RadAjaxManager1` will update `Label1`.
