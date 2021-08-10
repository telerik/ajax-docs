---
title: RadSlider inside initially hidden elements (e.g. RadToolTip)
description: RadSlider inside initially hidden elements (e.g. RadToolTip). Check it now!
type: how-to
page_title: RadSlider inside initially hidden elements (e.g. RadToolTip)
slug: slider-radslider-inside-initially-hidden-elements
res_type: kb
---


  
   
 **PROBLEM:**   
   
 When a RadSlider control is placed in initially invisible element it does not render properly when shown  
   
 **SOLUTION:**   
   
  
   
 The **RadSlider** control calculates its track's size according to its parent element. That is the reason for its incorrect rendering when its parent is initially invisible and gets visible later, after the **RadSlider** control has been initialized.  
   
 You can solve this problem by forcing the **RadSlider** to recalculate its size when it is being shown. This can be achieved by obtaining a reference to it and then calling its **repaint()** method.  
   
 In the attached file you can find a sample demonstrative project of this approach - it contains a RadToolTip with a **RadSlider** in it. The **RadSlider**'s **repaint()** method is executed when it is shown - in the **RadToolTip**  **OnClientShow** eventhadler:  
   

````ASPX
        <script type="text/javascript">
        function OnClientShow(sender, eventArgs)
        {
           var slider = $find("<%= RadSlider1.ClientID %>");
           slider.repaint();
        }
        </script>

        <asp:Label ID="Label1" runat="server" Text="Hover here to display the tooltip"></asp:Label>
        <telerik:RadToolTip ID="RadToolTip1" runat="server" TargetControlID="Label1" RelativeTo="Element"
            OnClientShow="OnClientShow" HideEvent="LeaveTargetAndToolTip">
            <telerik:RadSlider ID="RadSlider1" runat="server" />
        </telerik:RadToolTip>
 ````

    