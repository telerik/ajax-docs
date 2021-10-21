---
title: Setting RadPanelBar to be fully expanded
description: Setting RadPanelBar to be fully expanded. Check it now!
type: how-to
page_title: Setting RadPanelBar to be fully expanded
slug: panelbar-setting-radpanelbar-to-be-fully-expanded
res_type: kb
---


## HOW-TO  
 Set RadPanelBar to be fully expanded  
   
## SOLUTION  
 Here we will use the **GetAllItems()** method of the RadPanelBar. It returns a linear collection of all items regardless their place in the hierarchy. 

````ASP.NET
<telerik:RadPanelBar ID="RadPanelBar1" runat="server"> 
    <Items> 
        <telerik:RadPanelItem runat="server" Text="Root RadPanelItem1"> 
            <Items> 
                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1"> 
                    <Items> 
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1"> 
                            <Items> 
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1"> 
                                </telerik:RadPanelItem> 
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2"> 
                                </telerik:RadPanelItem> 
                            </Items> 
                        </telerik:RadPanelItem> 
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2"> 
                        </telerik:RadPanelItem> 
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3"> 
                            <Items> 
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1"> 
                                </telerik:RadPanelItem> 
                            </Items> 
                        </telerik:RadPanelItem> 
                    </Items> 
                </telerik:RadPanelItem> 
            </Items> 
        </telerik:RadPanelItem> 
        <telerik:RadPanelItem runat="server" Text="Root RadPanelItem2"> 
            <Items> 
                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1"> 
                </telerik:RadPanelItem> 
            </Items> 
        </telerik:RadPanelItem> 
    </Items> 
</telerik:RadPanelBar>
````

````C#
protected void Page_Load(object sender, EventArgs e) 
{ 
       foreach (RadPanelItem item in RadPanelBar1.GetAllItems()) 
        { 
            if (item.Items.Count > 0) 
            { 
                item.Expanded = true; 
            } 
        } 
} 
````


  