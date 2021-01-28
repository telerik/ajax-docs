---
title: Overview
page_title: RadAjaxPanel Overview
description: Check our Web Forms article about Overview.
slug: ajaxpanel/overview
previous_url: ajax/radajaxpanel/overview
tags: overview
published: True
position: 0
---

# RadAjaxPanel Overview



This help article describes the main features of the RadAjaxPanel, how to use it, and provides methods you can use if you need to use an external control to force RadAjaxPanel to perform an AJAX request. The **RadAjaxPanel** control provides the easiest way to AJAX-enable ASP.NET web controls. You simply need to place the controls that you want Ajax-enabled into a **RadAjaxPanel** and Telerik **RadAjax** takes care of the rest. Best of all, this happens transparently to the framework and the controls that are being Ajax-enabled.

## Key features:

* Ajax-enables all controls inside that normally work with postbacks.

* Defines visually and codeless (in Visual Studio design-time) which elements should be updated via AJAX requests. All elements wrapped in the panel will be updated via AJAX

* No need to modify your application logic

* Allows you to update a number of page elements at once

* No need to write any JavaScript or invoke AJAX requests manually

## RadAjaxPanel Usage

In Visual Studio at design time, if you want to Ajax-enable web controls on a page just add a **RadAjaxPanel** to your page and then drag the controls you want to make callbacks into the **RadAjaxPanel**. Those controls will start performing callbacks instead of postbacks. **Figure 1** shows a typical usage scenario. A standard ASP.NET Calendar control is placed in a **RadAjaxPanel**. On the web form there is also a [loading panel]({%slug ajaxloadingpanel/overview%}) control that will be shown in place of the **RadAjaxPanel** during the AJAX request.

![AJAX Panel (Design-time)](images/ajaxpanel.PNG)

>caution The whole **RadAjaxPanel** (with **ALL** controls inside) is updated when one of the controls makes an AJAX request. Thus, if you put the whole page into a **RadAjaxPanel** , this may cause -reduced- performance, as -all- controls within the panel will be updated, -not- just the AJAX initiator.Placing the whole page into a **RadAjaxPanel** is usable when you have a relatively small number of controls on the page.
>


**Out-of-Panel Update**

There are cases when you may want to update the controls inside a **RadAjaxPanel** by triggering a callback externally from other control on the page. The following approach is not recommended as **RadAjaxManager** can handle any complex scenarios. You can use asp:Panel controls and link them via **RadAjaxManager**'s settings. The same Panel may be set as both AJAX initiator and updated control, which will cause functionality similar to **RadAjaxPanel** .

You need to call the**$find(<%RadAjaxPanel1.ClientID%>).ajaxRequest()** method (passing the necessary information as parameters to it) and then override the **RaisePostBackEvent** method or handle theRadAjaxPanel **AjaxRequest** server-side event to apply the changes. **Example 1** shows a sample implementation, which changes the background color of the panel.

**Example 1**: Use external control to update **RadAjaxPanel**

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" OnAjaxRequest="RadAjaxPanel1_AjaxRequest">
</telerik:RadAjaxPanel>
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	     function invokeAjaxRequest() {
	        $find("<%= RadAjaxPanel1.ClientID%>").ajaxRequestWithTarget("<%= RadAjaxPanel1.UniqueID %>", "ChangeColor");
	    }
	</script>
</telerik:RadCodeBlock>
<input type="button" value="Change color" onclick="invokeAjaxRequest();" />
````



And in the code-behind:



````C#
	
protected void RadAjaxPanel1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
	        switch (e.Argument)
	        {
	            case "ChangeColor":
	                RadAjaxPanel1.BackColor = System.Drawing.Color.Maroon;
	                break;
	            default:
	                break;
	        }
} 
				
````
````VB
Protected Sub RadAjaxPanel1_AjaxRequest(sender As Object, e As AjaxRequestEventArgs)
	        Select Case e.Argument
	            Case "ChangeColor"
	                RadAjaxPanel1.BackColor = System.Drawing.Color.Maroon
	        End Select
End Sub
````


## ajaxRequestWithTarget() Reference

You can use any external control to force **RadAjaxPanel** to perform an AJAX request by calling this client-side function. When using this function, the event target defaults to the **RadAjaxPanel** instance.

>note You can construct the JavaScript function calls manually or alternatively use the server-side method [GetAjaxEventReference](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadAjaxControl#getajaxeventreference) and have Telerik RadAjax generate the necessary code for you.
>



|  **_doPostBack(eventTarget, eventArgument)** or **$find("<%=RadAjaxPanel1.ClientID%>").ajaxRequestWithTarget(eventTarget, eventArgument)**  |  |
| ------ | ------ |
| **eventTarget** |The control that should raise the postback event. You should use the control's **UniqueID** .|
| **eventArgument** |This is an optional argument for the event|



## ajaxRequest() Reference


>caption  

|  **$find("<%=RadAjaxPanel1.ClientID%>").ajaxRequest(arguments)**  |  |
| ------ | ------ |
| **arguments** |The parameters the control used when it raised the request.|

When either of these functions is called on the client it can be handled in the AjaxRequest event handler on the server.

## See Also
 * [Client-side Programming Overview]({%slug ajaxpanel/client-side-programming/overview%})

 * [Demo: RadAjaxManager](https://demos.telerik.com/aspnet-ajax/ajax/examples/overview/defaultcs.aspx)

 * [Demo: RadAjaxPanel](https://demos.telerik.com/aspnet-ajax/ajax/examples/panel/firstlook/defaultcs.aspx)
