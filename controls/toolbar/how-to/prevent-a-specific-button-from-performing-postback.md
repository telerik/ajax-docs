---
title: Prevent a Specific Button from Performing Postback
page_title: Prevent a Specific Button from Performing Postback - RadToolBar
description: Check our Web Forms article about Prevent a Specific Button from Performing Postback.
slug: toolbar/how-to/prevent-a-specific-button-from-performing-postback
tags: prevent,a,specific,button,from,performing,postback
published: True
position: 0
---

# Prevent a Specific Button from Performing Postback

## 

This topic shows how to prevent a specific button from performing postback. There are two ways to achieve this.

You can set the **PostBack** property to **false** for the item for which you want to prevent postback:

````ASPNET
<items>        
    <telerik:RadToolBarButton runat="server" Text="Button A">        
    </telerik:RadToolBarButton>        
    <telerik:RadToolBarButton runat="server" PostBack="false" Text="Button B (no postback)">        
    </telerik:RadToolBarButton>        
    <telerik:RadToolBarButton runat="server" Text="Button C">        
    </telerik:RadToolBarButton>    
</items>
````

Or, you can **cancel** the **OnClientButtonClicking** event for the specific item:

````ASPNET
<telerik:radtoolbar id="RadToolbar1" runat="server" onbuttonclick="RadToolbar1_ButtonClick" onclientbuttonclicking="OnClientButtonClickingHandler">       
    <Items>            
        <telerik:RadToolBarButton runat="server" Text="Button A">            
        </telerik:RadToolBarButton>            
        <telerik:RadToolBarButton runat="server" Value="noPostback" Text="Button B (no postback)">            
        </telerik:RadToolBarButton>            
        <telerik:RadToolBarButton runat="server" Text="Button C">            
        </telerik:RadToolBarButton>        
    </Items>    
</telerik:radtoolbar>

<script type="text/javascript">
    function OnClientButtonClickingHandler(sender, eventArgs) {
        if (eventArgs.get_item().get_value() == "noPostback") {
            eventArgs.set_cancel(true);
        }
    }    
 </script>	
````

# See Also

 * [Exclude specific items from ajaxifying](https://www.telerik.com/support/kb/article/b454K-hhk-b454T-cdb-b454c-cdb.aspx)
