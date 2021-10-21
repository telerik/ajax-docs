---
title: Styling Scrollbars
description: Styling Scrollbars. Check it now!
type: how-to
page_title: Styling Scrollbars
slug: formdecorator-styling-scrollbars
res_type: kb
---

  
## DESCRIPTION
**According to the W3C standards, scrollbars are not part of the page** but the browser. Therefore they are not supposed to be decorated, although some browsers like InternetExplorer and WebKit (Safari, Chrome,Midori, Shiira, Epiphany) are an exception. The following table explains the main elements of a scrollbar and what RadFormDecorator does on them for browsers that support the feature:   
![](Images/formdecorator-styling-scrollbars-1.png)  
  

   
## SOLUTION
[This help article]({%slug formdecorator/appearance-and-styling/css-classes%}) (its Skin-specific Scrollbar Settings for WebKit Browsers section) lists the CSS rules RadFormDecorator uses to style scrollbars. They can be used to create a custom design.  
   
This example shows a RadComboBox with Skin set to "Vista" along with FormDecorator with Skin set to "WebBlue". The following set of styling rules changes the color of the Scrollbar face of "WebBlue" skin to Red results in the following appearance:  

![](Images/formdecorator-styling-scrollbars-2.png)  

>note The skin name can be changed from WebBlue to the name of the skin that is actually used.  
 
>note This wil work only under browsers that support scrollbar styling (i.e. WebKit based).

 
````CSS
.RadForm.rfdScrollBars.RadForm_WebBlue body::-webkit-scrollbar-thumb:vertical,
.RadForm.rfdScrollBars.RadForm_WebBlue body::-webkit-scrollbar-thumb:horizontal,
.RadForm.rfdScrollBars.RadForm_WebBlue div::-webkit-scrollbar,
.RadForm.rfdScrollBars.RadForm_WebBlue div::-webkit-scrollbar-thumb:vertical,
.RadForm.rfdScrollBars.RadForm_WebBlue div::-webkit-scrollbar-thumb:horizontal,
.RadForm.rfdScrollBars.RadForm_WebBlue ul::-webkit-scrollbar,
.RadForm.rfdScrollBars.RadForm_WebBlue ul::-webkit-scrollbar-thumb:vertical,
.RadForm.rfdScrollBars.RadForm_WebBlue ul::-webkit-scrollbar-thumb:horizontal,
.RadForm.rfdScrollBars.RadForm_WebBlue form::-webkit-scrollbar-thumb:vertical,
.RadForm.rfdScrollBars.RadForm_WebBlue form::-webkit-scrollbar-thumb:horizontal
{
    background-color: red !important; /* choose your color */
}
````

````ASP.NET
<telerik:RadFormDecorator ID="rfd1" runat="server" Skin="WebBlue" DecoratedControls="All"
    EnableRoundedCorners="false" />
<telerik:RadComboBox ID="RadComboBox1" runat="server" Height="100" Skin="Vista">
    <Items>
        <telerik:RadComboBoxItem Text="RadComboBoxItem1RadComboBoxItem1RadComboBoxItem1RadComboBoxItem1RadComboBoxItem1" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem2RadComboBoxItem2RadComboBoxItem2RadComboBoxItem2RadComboBoxItem2" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem3RadComboBoxItem3RadComboBoxItem3RadComboBoxItem3RadComboBoxItem3" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem4RadComboBoxItem4RadComboBoxItem4RadComboBoxItem4RadComboBoxItem4" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem5RadComboBoxItem5RadComboBoxItem5RadComboBoxItem5RadComboBoxItem5" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem6RadComboBoxItem6RadComboBoxItem6RadComboBoxItem6RadComboBoxItem6" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem7RadComboBoxItem7RadComboBoxItem7RadComboBoxItem7RadComboBoxItem7" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem8RadComboBoxItem8RadComboBoxItem8RadComboBoxItem8RadComboBoxItem8" />
        <telerik:RadComboBoxItem Text="RadComboBoxItem9RadComboBoxItem9RadComboBoxItem9RadComboBoxItem9RadComboBoxItem9" />
    </Items>
</telerik:RadComboBox>
````
 

   