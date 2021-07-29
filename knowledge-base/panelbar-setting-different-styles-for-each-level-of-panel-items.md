---
title: Setting different styles for each level of panel items in RadPanelBar
description: Setting different styles for each level of panel items in RadPanelBar. Check it now!
type: how-to
page_title: Setting different styles for each level of panel items in RadPanelBar
slug: panelbar-setting-different-styles-for-each-level-of-panel-items
res_type: kb
---

## How to

Set different styles for each level of panel items in RadPanelBar.  
   
## Description

In number of cases it is mandatory to define different visualization settings for each level of panel items. RadPanelBar is powerful enough to accomplish this through CSS.  
   
## Solution

You can customize the appearance of RadPanelBar using separate css class definitions for each level of items. All you need to do is build css classes in par with you particular requirements and refer to these css classed through the css style properties (CssClass, ExpandedCssClass, SelectedCssClass, etc.) of the corresponding panel items, for example:  

````ASPX
<head runat="server"> 
   ..... 
   <link href="panelbar.css" rel="stylesheet" type="text/css" /> 
</head> 
..... 
<telerik:RadPanelbar ID="RadPanelbar1" runat="server"> 
   <Items> 
         <telerik:RadPanelItem  
            runat="server"  
            Text="root"  
            CssClass="panelbarHeader" 
            ExpandedCssClass="panelbarHeader" 
            ClickedCssClass="panelbarHeader"> 
            <Items> 
               <telerik:RadPanelItem  
                     runat="server"  
                     Text="subroot" 
                     CssClass="panelbarItem" 
                     ExpandedCssClass="panelbarItem" 
                     ClickedCssClass="panelbarItem"> 
                     <Items> 
                        <telerik:RadPanelItem  
                           runat="server"  
                           Text="inner" 
                           CssClass="panelbarInner" 
                           ExpandedCssClass="panelbarInner" 
                           ClickedCssClass="panelbarInner"> 
                        </telerik:RadPanelItem> 
                     </Items> 
               </telerik:RadPanelItem> 
            </Items> 
         </telerik:RadPanelItem> 
   </Items> 
</telerik:RadPanelbar> 
````

````CSS
.panelbarInner
{ 
    FONT-SIZE: 11px; 
    COLOR: green; 
    FONT-FAMILY: Arial,Verdana; 
    cursor: hand; 
    height: 25px; 
    padding-left: 90px; 
    padding-top: 6px; 
} 
 
.panelbarHeaderCollapsed 
{   
    FONT-SIZE: 11px; 
    COLOR: blue; 
    font-weight: bold; 
    FONT-FAMILY: Arial,Verdana; 
    cursor: hand; 
    height: 35px; 
    padding-left: 24px; 
} 
 
.panelbarItem 
{ 
    FONT-SIZE: 11px; 
    COLOR: red; 
    font-weight: bold; 
    FONT-FAMILY: Arial,Verdana; 
    cursor: hand; 
    text-decoration: none; 
    padding-left: 60px; 
    height: 24px; 
} 
````
   
You can also define your custom background/images for the panel items if you like (simply add them to the respective css class definitions).

