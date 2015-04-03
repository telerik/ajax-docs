---
title: Collapse Previously Expanded Header Item When Clicking on a Header Item Without Child Items
page_title: Collapse Previously Expanded Header Item When Clicking on a Header Item Without Child Items | UI for ASP.NET AJAX Documentation
description: Collapse Previously Expanded Header Item When Clicking on a Header Item Without Child Items
slug: panelbar/application-scenarios/collapse-previously-expanded-header-item-when-clicking-on-a-header-item-without-child-items
tags: collapse,previously,expanded,header,item,when,clicking,on,a,header,item,without,child,items
published: True
position: 0
---

# Collapse Previously Expanded Header Item When Clicking on a Header Item Without Child Items



## 

You could easily achieve your goal by hooking on the __OnClientItemClicked__ event of the panelbar and use the following JS code:

````JavaScript
	   <script language="javascript">
	        function collapseRoots(sender, args) {
	            if (args.get_item().get_items().get_count() < 1 && args.get_item().get_parent().get_parent() == null) {
	                for (var i = 0; i < sender.get_items().get_count(); i++) {
	                    sender.get_items().getItem(0).collapse();
	                }
	            }
	        }    
	     </script>
````



````ASPNET
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" expandmode="SingleExpandedItem"
	        onclientitemclicked="collapseRoots">        
	        <CollapseAnimation Duration="100" Type="None" />        
	        <Items>           
	             <telerik:RadPanelItem runat="server" Text="Root RadPanelItem1">                
	             <Items>                    
	                 <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">                    
	                 </telerik:RadPanelItem>                    
	                 <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">                    
	                 </telerik:RadPanelItem>               
	              </Items>            
	              </telerik:RadPanelItem>            
	              <telerik:RadPanelItem runat="server" Text="Root RadPanelItem2">            
	              </telerik:RadPanelItem>        
	          </Items>        
	          <ExpandAnimation Duration="100" Type="None" />   
	          </telerik:radpanelbar>
````


