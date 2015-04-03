---
title: Expand RadPanelItems on Hover
page_title: Expand RadPanelItems on Hover | UI for ASP.NET AJAX Documentation
description: Expand RadPanelItems on Hover
slug: panelbar/application-scenarios/expand-radpanelitems-on-hover
tags: expand,radpanelitems,on,hover
published: True
position: 5
---

# Expand RadPanelItems on Hover



## 

The following sample code shows how RadPanelItems can be expanded/collapsed when you hover over them.

````ASPNET
	     
	
	<form id="form2" runat="server">
	   <div>
	       <asp:ScriptManager ID="ScriptManager1" runat="server">
	       </asp:ScriptManager>
	       <script type="text/javascript">
	           function ExpandItem(panelbar, args) {
	               if (args.get_item().get_items.Count != 0 && args.get_item().get_expanded() == false) {
	                   args.get_item().set_expanded(true);
	               }
	               else {
	                   args.get_item().set_expanded(false);
	               }
	           }
	       </script>
	       <telerik:RadPanelBar ID="RadPanelBar1" runat="server" OnClientMouseOver="ExpandItem">
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
	                   <Items>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
	                           <Items>
	                               <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
	                               </telerik:RadPanelItem>
	                               <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
	                                   <Items>
	                                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
	                                       </telerik:RadPanelItem>
	                                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
	                                       </telerik:RadPanelItem>
	                                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
	                                       </telerik:RadPanelItem>
	                                   </Items>
	                               </telerik:RadPanelItem>
	                               <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
	                               </telerik:RadPanelItem>
	                               <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 4">
	                               </telerik:RadPanelItem>
	                               <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 5">
	                               </telerik:RadPanelItem>
	                           </Items>
	                       </telerik:RadPanelItem>
	                   </Items>
	               </telerik:RadPanelItem>
	               <telerik:RadPanelItem runat="server" Text="Root RadPanelItem3">
	               </telerik:RadPanelItem>
	               <telerik:RadPanelItem runat="server" Text="Root RadPanelItem4">
	                   <Items>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 4">
	                       </telerik:RadPanelItem>
	                   </Items>
	               </telerik:RadPanelItem>
	           </Items>
	           <ExpandAnimation Duration="100" Type="None" />
	       </telerik:RadPanelBar>
	   </div>
	</form> 
				
````




