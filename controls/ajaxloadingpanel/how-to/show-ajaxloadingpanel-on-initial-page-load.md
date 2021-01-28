---
title: Show AjaxLoadingPanel on Initial Page Load
page_title: Show AjaxLoadingPanel on Initial Page Load
description: Check our Web Forms article about Show AjaxLoadingPanel on Initial Page Load.
slug: ajaxloadingpanel/how-to/show-ajaxloadingpanel-on-initial-page-load
previous_url: ajax/radajaxloadingpanel/how-to/show-ajaxloadingpanel-on-initial-page-load
tags: show,ajaxloadingpanel,on,initial,page,load
published: True
position: 1
---

# Show AjaxLoadingPanel on Initial Page Load



## 

This help article shows sample code that lets you show a **RadAjaxLoadingPanel** as part of the initial page load.

Although Telerik designed **RadAjaxLoadingPanel** so that you can display a progress indicator when an AJAX-enabled control updates,you can also show the loading panel on initial page load as well.This functionality is not supported out of the box; however, you can easily add it using some additional code.

Overall, this example shows how to use the **pageLoad** function, which initiates an **AJAX request** from the client. To be more functional, this example includes an update of an asp: Panel. Thus, you need an **AjaxSetting** , where **RadAjaxManager** "updates" the panel by showing an initially invisible inner panel. The JavaScript in **Example 1** shows how ajaxRequest only on inital page load could be executed and the markup in **Example 2** shows the ajax configuration on the page.The code behind in **Example 3** shows how to show the panel for two seconds on initial load.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function pageLoad(sender, eventArgs) {
	        if (!eventArgs.get_isPartialLoad()) {
	            $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest("InitialPageLoad");
	        }
	    }      
	</script>
</telerik:RadCodeBlock>
````



````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" LoadingPanelID="RadAjaxLoadingPanel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:Panel ID="Panel1" runat="server">
	<asp:Panel ID="Panel2" Visible="false" runat="server">
	            My content:
	</asp:Panel>
</asp:Panel>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Height="75px"
Width="75px" Transparency="50">
<img alt="Loading..." src="~/loading.gif" style="border: 0;" />
</telerik:RadAjaxLoadingPanel>
````



**Example 3**



````C#
	     
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
	{    
	        if (e.Argument == "InitialPageLoad")    
	        {        
	            //simulate longer page load        
	            System.Threading.Thread.Sleep(2000);        
	            Panel2.Visible = true;    
	}
}
				
````
````VB
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
	If e.Argument = "InitialPageLoad" Then
	            'simulate longer page load
	            System.Threading.Thread.Sleep(2000)
	            Panel2.Visible = True
	End If
End Sub
````


## See Also

 * [Overview]({%slug ajaxloadingpanel/overview%})
