---
title: Setup virtual scrolling in the RadGrid embedded in RadFileExplorer
description: Setup virtual scrolling in the RadGrid embedded in RadFileExplorer. Check it now!
type: how-to
page_title: Setup virtual scrolling in the RadGrid embedded in RadFileExplorer
slug: fileexplorer-setup-virtual-scrolling-in-the-embedded-radgrid
res_type: kb
---

 ## HOW TO

Setup virtual scrolling in the RadGrid embedded in **RadFileExplorer** control (used in the **RadEditor**'s dialogs as well)  
   
## DESCRIPTION 

This article shows how to enable the `VirtualScrolling` feature of the grid embedded in the RadFileExplorer control. After applying the steps in this article you will no longer see the `Pager` (a RadSlider) in the bottom of the grid when the RadFileExplorer's `AllowPaging="true"` is set.  
   
 ![](Images/fileexplorer-virtual-scrollbar.jpg)  

## SOLUTION  

There are several properties (for more details please refer to [this help page]({%slug grid/ajaxified-radgrid/virtual-scrolling-and-paging %})) that need to be set in order to enable virtual scrolling feature:  
 
#### RadFileExplorer's properties:  

    - `AllowPaging="true"` - enables the paging (this property can be set directly to the embedded grid as well)
    - `PageSize="15"` - sets the count of the rows (this property can be set directly to the embedded grid as well).   
   

    >note Please note that the count of the items should be set in order to fill the grid's height - please check the screenshot bellow.
    >

#### Properties of the embedded RadGrid (should be set in codebehind):  

    - `RadFileExplorer1.Grid.ClientSettings.Scrolling.EnableVirtualScrollPaging = true`
    - `RadFileExplorer1.Grid.AllowCustomPaging = true`
    - `RadFileExplorer1.Grid.PagerStyle.Visible = false` - hides the pager
    
    >note Please note that the Grid's `ClientSettings.Scrolling.AllowScroll`  and `ClientSettings.Scrolling.UseStaticHeaders` properties are set to `true` internaly in the code of the RadFileExplorer control. The value of the `VirtualItemCount` property is also set internally.
    >

The final setup looks like this:  


````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" Width="500px" Height="400"
    EnableCopy="true" AllowPaging="true" PageSize="15">
    <Configuration ViewPaths="~/ROOT/" DeletePaths="~/ROOT/" UploadPaths="~/ROOT/" />
</telerik:RadFileExplorer>
````

````C#
protected void Page_Load(object sender, EventArgs args)
{
    RadFileExplorer1.Grid.ClientSettings.Scrolling.AllowScroll = true;
    RadFileExplorer1.Grid.ClientSettings.Scrolling.EnableVirtualScrollPaging = true;
    RadFileExplorer1.Grid.AllowCustomPaging = true;
    RadFileExplorer1.Grid.PagerStyle.Visible = false;
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal args As EventArgs) Handles Me.Load
    RadFileExplorer1.Grid.ClientSettings.Scrolling.AllowScroll = True
    RadFileExplorer1.Grid.ClientSettings.Scrolling.EnableVirtualScrollPaging = True
    RadFileExplorer1.Grid.AllowCustomPaging = True
    RadFileExplorer1.Grid.PagerStyle.Visible = False
End Sub
````


You can find atached the projects demonstrating the described approached here:

* [VirtualScrolling_CS.zip](files/fileexplorer-virtualscrolling_cs.zip)

* [VirtualScrolling_VB.zip](files/fileexplorer-virtualscrolling_vb.zip)


   
   

   
   
   
 


