---
title: Center the Loading Panel on the Screen
page_title: Center the Loading Panel on the Screen | RadAjax for ASP.NET AJAX Documentation
description: Center the Loading Panel on the Screen
slug: ajaxloadingpanel/how-to/center-the-loading-panel-on-the-screen
previous_url: ajax/radajaxloadingpanel/how-to/center-the-loading-panel-on-the-screen
tags: center,the,loading,panel,on,the,screen
published: True
position: 3
---

# Center the Loading Panel on the Screen


## 

The code below centers the loading panel on the screen. Note the use of absolute positioning along with Sticky mode of RadAjaxLoadingPanel control.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function centerLoadingPanel() {
	        centerElementOnScreen($get("<%= RadAjaxLoadingPanel1.ClientID %>"));
	    }
	    function centerElementOnScreen(element) {
	        var scrollTop = document.body.scrollTop;
	        var scrollLeft = document.body.scrollLeft;
	        var viewPortHeight = document.body.clientHeight;
	        var viewPortWidth = document.body.clientWidth;
	        if (document.compatMode == "CSS1Compat") {
	            viewPortHeight = document.documentElement.clientHeight;
	            viewPortWidth = document.documentElement.clientWidth;
	            if (!$telerik.isSafari) {
	                scrollTop = document.documentElement.scrollTop;
	                scrollLeft = document.documentElement.scrollLeft;
	            }
	        }
	        var topOffset = Math.ceil(viewPortHeight / 2 - element.offsetHeight / 2);
	        var leftOffset = Math.ceil(viewPortWidth / 2 - element.offsetWidth / 2);
	        var top = scrollTop + topOffset - 40;
	        var left = scrollLeft + leftOffset - 70;
	        element.style.position = "absolute";
	        element.style.top = top + "px";
	        element.style.left = left + "px";
	    }
	</script>
</telerik:RadCodeBlock>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
<ClientEvents OnRequestStart="centerLoadingPanel"></ClientEvents>
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" IsSticky="true">
	<img src="loading.gif" alt="loading.." />
</telerik:RadAjaxLoadingPanel>
<asp:Button ID="Button1" runat="server" Text="AJAX" OnClick="Button1_Click" />
<asp:Panel ID="Panel1" runat="server" Style="width: 800px; height: 400px; border: 1px solid red">
	asp:Panel
</asp:Panel>
````



When Skin is set for the RadAjaxLoadingPanel, you can center it on the page as follows.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Vista"
IsSticky="true" Style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;">
</telerik:RadAjaxLoadingPanel>
````



For additional approaches and samples on centering RadAjaxLoadingPanel, you can review the listed code libraries:

* [How to Make a RadAjaxLoadingPanel Span Over the Whole Page](https://www.telerik.com/community/code-library/aspnet-ajax/ajax/how-to-make-a-radajaxloadingpanel-span-over-the-whole-page.aspx)

* [How to Center Image in a RadAjaxLoadingPanel](https://www.telerik.com/community/code-library/aspnet-ajax/ajax/how-to-center-image-in-a-radajaxloadingpanel.aspx)
