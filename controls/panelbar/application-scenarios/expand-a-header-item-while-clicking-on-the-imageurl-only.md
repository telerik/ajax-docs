---
title: Expand a Header Item While Clicking on the ImageUrl Only
page_title: Expand a Header Item While Clicking on the ImageUrl Only | UI for ASP.NET AJAX Documentation
description: Expand a Header Item While Clicking on the ImageUrl Only
slug: panelbar/application-scenarios/expand-a-header-item-while-clicking-on-the-imageurl-only
tags: expand,a,header,item,while,clicking,on,the,imageurl,only
published: True
position: 2
---

# Expand a Header Item While Clicking on the ImageUrl Only



## 

![Panelbar](images/panelbar_expandheaderitem.jpg)

````JavaScript
	   <script type="text/javascript">
	       function OnLoad(sender, eventArgs) {
	           var panelBar = sender;
	           var allItems = panelBar.get_allItems();
	           for (var i = 0; i < allItems.length; i++) {
	               var panelItem = allItems[i];
	               var imageElement = panelItem.get_imageElement();
	               if (imageElement) {
	                   imageElement.AssociatedItem = panelItem;
	                   imageElement.onclick = function (e) {
	                       if (!e) e = window.event;
	                       if (this.AssociatedItem.get_expanded()) {
	                           this.AssociatedItem.collapse();
	                       }
	                       else {
	                           this.AssociatedItem.expand();
	                       }
	                       e.cancelBubble = true;
	                       if (e.stopPropagation) {
	                           e.stopPropagation();
	                       }
	                       return false;
	                   }
	               }
	           }
	       }
	   </script>
````



````ASPNET
	   <telerik:RadPanelBar ID="RadPanelBar1" runat="server" Skin="Outlook" OnClientLoad="OnLoad">
	       <Items>
	           <telerik:RadPanelItem ImageUrl="Img/inbox.gif" Text="Index" runat="server" NavigateUrl="http://www.yahoo.com" Target="_blank">
	               <Items>
	                   <telerik:RadPanelItem runat="server" Text="Feel comfortable gambling with Golden" ImageUrl="Img/3.gif">
	                   </telerik:RadPanelItem>
	                   <telerik:RadPanelItem runat="server" Text="English Lessons - homework" ImageUrl="Img/4.gif">
	                   </telerik:RadPanelItem>
	                   <telerik:RadPanelItem runat="server" Text=" RadControls for ASP.NET AJAX" ImageUrl="Img/5.gif">
	                   </telerik:RadPanelItem>
	               </Items>
	           </telerik:RadPanelItem>
	       </Items>
	       <CollapseAnimation Duration="100" Type="None" />
	       <ExpandAnimation Duration="100" Type="None" />
	   </telerik:RadPanelBar>
	   <br />
	</form> 
				
````


