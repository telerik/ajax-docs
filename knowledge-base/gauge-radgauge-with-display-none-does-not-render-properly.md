---
title: RadGauge with 'display: none' does not render properly
description: RadGauge with 'display: none' does not render properly. Check it now!
type: how-to
page_title: RadGauge with 'display: none' does not render properly
slug: gauge-radgauge-with-display-none-does-not-render-properly
res_type: kb
---


## PROBLEM
 Initially hidden gauge is not resized and rendered properly when shown on the page  
   
## DESCRIPTION
 If you have a RadGauge with style="display: none;" set to its parent container, toggling its CSS attribute to display: block may result in gauge rendering with wrong dimensions.  
  
 This happens because the hidden container does not let the control evaluate its dimensions, size and render properly.

    
## SOLUTION
 In order to resolve the rendering issue call its repaint client-side method so the gauge will redraw itself:  
  

````ASP.NET
<div id="testdiv" style="display: none;">
    <telerik:RadRadialGauge runat="server" ID="RadRadialGauge1" Width="100px" Height="100px"></telerik:RadRadialGauge>
    <telerik:RadRadialGauge runat="server" ID="RadRadialGauge2" Width="100px" Height="100px"></telerik:RadRadialGauge>
</div>
<asp:Button Text="show me" ID="btn1" OnClientClick="showMe(); return false;" runat="server" />
<script>
    function showMe() {
        var div = $telerik.$(document.getElementById("testdiv"));
        div.show();
        div.find(".RadGauge").each(function (index, elem) {
            if (elem && elem.control && elem.control.repaint) {
               elem.control.repaint();
            }
        });
    }
</script>
````

 