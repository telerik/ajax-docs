---
title: Show AjaxLoadingPanel on Initial Page Load
page_title: Show AjaxLoadingPanel on Initial Page Load | UI for ASP.NET AJAX Documentation
description: Show AjaxLoadingPanel on Initial Page Load
slug: ajax/radajaxloadingpanel/how-to/show-ajaxloadingpanel-on-initial-page-load
tags: show,ajaxloadingpanel,on,initial,page,load
published: True
position: 1
---

# Show AjaxLoadingPanel on Initial Page Load



## 

This help article shows sample code that lets you show a __RadAjaxLoadingPanel__ as part of the initial page load.

Although Telerik designed __RadAjaxLoadingPanel__ so that you can display a progress indicator when an AJAX-enabled control updates,you can also show the loading panel on initial page load as well.This functionality is not supported out of the box; however, you can easily add it using some additional code.

Overall, this example shows how to use the __pageLoad__ function, which initiates an __AJAX request__ from the client. To be more functional, this example includes an update of an asp: Panel.Thus, you need an __AjaxSetting__, where __RadAjaxManager__ "updates" the panel by showing an initially invisible inner panel. The JavaScript in __Example 1__ shows how ajaxRequest only on iitla page load could be executed and the makup in __Example 2__ shows the ajax configuration on the page.The code behind in __Example 3__ shows how to show the panel for two seconds on inital load.

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



````ASPNET
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



__Example 3__

>tabbedCode

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
````VB.NET
	    Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
	        If e.Argument = "InitialPageLoad" Then
	            'simulate longer page load
	            System.Threading.Thread.Sleep(2000)
	            Panel2.Visible = True
	        End If
	    End Sub
````
>end

# See Also

 * [Overview]({%slug ajax/client-side-programming/overview%})
