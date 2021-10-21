---
title: Use RadInput controls (RadTextBox, RadMaskedTextBox, RadNumericTextBox, RadDateInput) as targets for RadToolTip
description: Use RadInput controls (RadTextBox, RadMaskedTextBox, RadNumericTextBox, RadDateInput) as targets for RadToolTip. Check it now!
type: how-to
page_title: Use RadInput controls (RadTextBox, RadMaskedTextBox, RadNumericTextBox, RadDateInput) as targets for RadToolTip
slug: tooltip-use-radinput-controls-as-targets
res_type: kb
---
   
   
## How To

 Use a RadInput control (RadTextBox, RadMaskedTextBox, RadNumericTextBox, RadDateInput) as a target for RadToolTip and avoid the browser tooltip.  
   
## Description

 RadInput controls render the title attribute set through the ToolTip property to both the span wrapper and actual input. If a RadToolTip targets the control it can remove only one of them, for the element it uses.  
   
## Solution

 The second one must be removed with a line of code when the input is loaded, for example:  
 
````ASP.NET
<script type="text/javascript">
    function removeTooltip(sender, args)
    {
        sender.get_element().parentNode.title = "";
    }
</script>
 
<telerik:RadTextBox ClientEvents-OnLoad="removeTooltip" runat="server" ID="RadTextBox1"
    ToolTip="Lorem ipsum dolor sit amet.">
</telerik:RadTextBox>
 
<telerik:RadToolTip runat="server" ID="RadToolTip1" TargetControlID="RadTextBox1" IsClientID="false"
    Width="150px" Height="60px" Position="BottomRight" RelativeTo="Element">
</telerik:RadToolTip>
````
 


