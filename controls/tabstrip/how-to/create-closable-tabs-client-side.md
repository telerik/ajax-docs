---
title: Create Closable Tabs Client-Side
page_title: Create Closable Tabs Client-Side | UI for ASP.NET AJAX Documentation
description: Create Closable Tabs Client-Side
slug: tabstrip/how-to/create-closable-tabs-client-side
tags: create,closable,tabs,client-side
published: True
position: 4
---

# Create Closable Tabs Client-Side



## 

````JavaScript
	    <html xmlns="http://www.w3.org/1999/xhtml">
	    <head runat="server">
	        <title>Untitled Page</title>
	        <style type="text/css">
	            .RadTabStrip .rtsLink img
	            {
	                border: 0;
	                position: relative;
	                right: -2px;
	                margin-top: 3px;
	            }
	        </style>
	    </head>
	    <body>
	        <form id="form1" runat="server">
	        <asp:ScriptManager ID="ScriptManager1" runat="server">
	        </asp:ScriptManager>
	        <script type="text/javascript">
	            var tabStrip1;
	
	            function OnClientLoad() {
	                tabStrip1 = $find('<%= RadTabStrip1.ClientID %>');
	
	                for (var i = 0; i < tabStrip1.get_tabs().get_count(); i++) {
	                    AttachCloseImage(tabStrip1.get_tabs().getItem(i), "delete.gif");
	                }
	            }
	
	            function addtab() {
	                var tab = new Telerik.Web.UI.RadTab();
	                tab.set_text("Root RadTab" + tabStrip1.get_tabs().get_count());
	                tabStrip1.get_tabs().add(tab);
	                AttachCloseImage(tab, "delete.gif");
	            }
	
	            function CreateCloseImage(closeImageUrl) {
	                var closeImage = document.createElement("img");
	                closeImage.src = closeImageUrl;
	                closeImage.alt = "Close this tab";
	                return closeImage;
	            }
	
	            function AttachCloseImage(tab, closeImageUrl) {
	                var closeImage = CreateCloseImage(closeImageUrl);
	                closeImage.AssociatedTab = tab;
	                closeImage.onclick = function (e) {
	                    if (!e) e = event;
	                    if (!e.target) e = e.srcElement;
	
	                    deleteTab(tab);
	
	                    e.cancelBubble = true;
	                    if (e.stopPropagation) {
	                        e.stopPropagation();
	                    }
	
	                    return false;
	                }
	                tab.get_innerWrapElement().appendChild(closeImage);
	            }
	
	            function deleteTab(tab) {
	                var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	
	                var tabToSelect = tab.get_nextTab();
	                if (!tabToSelect)
	                    tabToSelect = tab.get_previousTab();
	
	                tabStrip.get_tabs().remove(tab);
	
	                if (tabToSelect)
	                    tabToSelect.set_selected(true);
	            }
	
	        </script>
	        <div>
	            <telerik:radtabstrip id="RadTabStrip1" runat="server" selectedindex="0" skin="Office2007"
	                onclientload="OnClientLoad">
	               <Tabs>
	                   <telerik:RadTab runat="server" Selected="True" Text="Root RadTab1">
	                   </telerik:RadTab>
	               </Tabs>
	           </telerik:radtabstrip>
	            <input id="Button1" type="button" value="Add Tab" onclick="addtab()" /></div>
	        </form>
	    </body>
	    </html>
````


