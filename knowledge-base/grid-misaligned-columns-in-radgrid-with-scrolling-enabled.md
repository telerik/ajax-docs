---
title: Misaligned Columns in RadGrid with Scrolling Enabled
description: Misaligned Columns in RadGrid with Scrolling Enabled. Check it now!
type: how-to
page_title: Misaligned Columns in RadGrid with Scrolling Enabled
slug: grid-misaligned-columns-in-radgrid-with-scrolling-enabled
res_type: kb
---


## Description

In some scrolling cases you can observe misaligned columns and headers, usually when using Internet Explorer. This issue may arise if you have the following property enabled:

````
<ClientSettings>
    <Scrolling ... UseStaticHeaders="true" />
</ClientSettings>
````

To test that, you can temporarily remove this setting and verify that the problematic appearance is resolved.  

## Solution

You can try various approaches to troubleshoot and fix this issue:   
  
 - **Option 1.** As stated in the article below, *when scrolling is enabled and UseStaticHeaders is True, the grid columns should declare HeaderStyle.Width*:
 
 [Scroll with Static Headers]({%slug grid/functionality/scrolling/scroll-with-static-headers%})
 
 It is possible to set this property on several places, depending on your preference:

 ````
 <telerik:RadGrid ... >
<HeaderStyle Width="200px" />
   <MasterTableView ... >
    <HeaderStyle Width="200px" />
      <Columns>
       <telerik:GridBoundColumn ... >
        <HeaderStyle Width="200px" />
 ````

 - **Option 2.** Older versions of IE and Compatibility mode are not supported:   
[Browser Support](/aspnet-ajax/tech-sheets/browser-support)  

 You can check your F12 inspector in IE and ensure that an older emulation option is not selected for the version of the browser:  

 [Different appearance or behavior in Internet Explorer on local and production servers](https://www.telerik.com/support/kb/aspnet-ajax/details/different-appearance-in-internet-explorer-on-local-and-production-servers)  
  
 - **Option 3.** You can try adding the following CSS rule** to your page styles:

 ````CSS
.rgMasterTable {
    width: 100% !important;
}
 ````

 - **Option 4.** Make sure that the calculated total width **of the individual grid columns match the main table's own width.
  
 - **Option 5.** Try upgrading to the latest release version of Telerik controls.
  
 - **Option 6.** Setting the ClientIDMode to "Static" is not supported with Telerik controls, therefore, you can check whether you are setting this mode somewhere in your project and remove it:
 
 [Setting ClientIDMode property to Static breaks the Telerik controls functionality]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting%}#setting-clientidmode-property-to-static-breaks-the-telerik-controls-functionality)

 