---
title: Expand Panelbar Width Regarding the Widest Item
page_title: Expand Panelbar Width Regarding the Widest Item - RadPanelBar
description: Check our Web Forms article about Expand Panelbar Width Regarding the Widest Item.
slug: panelbar/how-to/expand-panelbar-width-regarding-the-widest-item
tags: expand,panelbar,width,regarding,the,widest,item
published: True
position: 6
---

# Expand Panelbar Width Regarding the Widest Item



## 

````ASPNET
	     	
<html xmlns="https://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
   <title></title>
   <style type="text/css">
       div.RadPanelBar
       {
           white-space: nowrap !important;
           width: auto;
           display: inline-block;
       }
       * + html .RadPanelBar
       {
           display: inline;
       }
       div.RadPanelBar .rpSlide
       {
           display: block !important;
           height: 0;
       }
   </style>
</head>
<body>
   <form id="form2" runat="server">
   <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
   </telerik:RadScriptManager>
   <telerik:RadPanelBar RenderMode="Lightweight" ID="RadPanelBar1" runat="server">
       <Items>
           <telerik:RadPanelItem runat="server" Text="Root RadPanelItem1">
               <Items>
                   <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1 with very long text with very long text with very long text">
                   </telerik:RadPanelItem>
                   <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2 Child RadPanelItem 2">
                   </telerik:RadPanelItem>
               </Items>
           </telerik:RadPanelItem>
           <telerik:RadPanelItem runat="server" Text="Root RadPanelItem2">
               <Items>
                   <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
                   </telerik:RadPanelItem>
                   <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
                   </telerik:RadPanelItem>
               </Items>
           </telerik:RadPanelItem>
       </Items>
   </telerik:RadPanelBar>
   <script type="text/javascript">
       function pageLoad() {
           if ($telerik.isIE7 || $telerik.isIE6) {
               var panelBar = $telerik.$('#<%= RadPanelBar1.ClientID %>');
               panelBar.width(panelBar.find(".rpItem:first").width());
           }
       }
   </script>
   </form>
   <p>
   </p>
</body>
</html> 
				
````


