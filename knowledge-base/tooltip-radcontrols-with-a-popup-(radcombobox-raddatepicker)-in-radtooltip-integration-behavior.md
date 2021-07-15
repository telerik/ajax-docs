---
title: RadControls with a popup (RadComboBox, RadDatePicker) in RadToolTip integration behavior
description: RadControls with a popup (RadComboBox, RadDatePicker) in RadToolTip integration behavior. Check it now!
type: how-to
page_title: RadControls with a popup (RadComboBox, RadDatePicker) in RadToolTip integration behavior
slug: tooltip-radcontrols-with-a-popup-radcombobox-raddatepicker-in-radtooltip-integration-behavior
res_type: kb
---

   
## PROBLEM
Integration issues when RadControls with a popup (**RadComboBox**, **RadDatePicker**) are nested in a **RadToolTip**  
   
 ## SOLUTION
   
 Since the **RadToolTip** is a popup itself, some small issues related to general popup behavior might occur when another control with popup behavior is nested in the **RadToolTip**. This article explains what are these problems and provides an easy solution.  
   

The two issues related to the above described scenario are the following ones:  
   

1) The popup of the nested control shows behind the **RadToolTip** which also needs a big z-index due to expected to usually show on top. This issue is handled by assigning proper z-indexes, bigger than the one of **RadToolTip**.  
   

2) If the nested popup is not closed when the **RadToolTip** hides, it stays opened. To resolve this problem you should handle the **RadToolTip's** **OnClientHide** client event and close the nested popup through code from there.  
   

Sample code with the suggested solutions implemented and highlighted is available below:  
   
 ````ASP.NET
<head runat="server">
    <style type="text/css">
    .RadCalendarPopup
    {
      z-index: 9000 !important;
    }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
  
        <script type="text/javascript">
          
        function ComboToolTipHide()
        {
           var combo = $find("<%=combo.ClientID %>");
           combo.hideDropDown();
        }
          
        function DatePickerToolTipHide()
        {
           var picker = $find("<%=picker.ClientID %>");
           picker.hidePopup();
        }
          
        </script>
  
        <asp:HyperLink ID="target1" runat="server" Text="Show RadComboBox in RadToolTip"></asp:HyperLink>
        <br />
        <br />
        <asp:HyperLink ID="target2" runat="server" Text="Show RadDatePicker in RadToolTip"></asp:HyperLink>
        <br />
        <br />
        <telerik:RadToolTip ID="tooltip1" runat="server" TargetControlID="target1" RelativeTo="element"
            Width="200" Height="200" HideEvent="manualclose" OnClientHide="ComboToolTipHide">
            <telerik:RadComboBox ID="combo" runat="server" Style="z-index: 9000">
                <Items>
                    <telerik:RadComboBoxItem Text="Test Item" />
                    <telerik:RadComboBoxItem Text="Test Item" />
                    <telerik:RadComboBoxItem Text="Test Item" />
                    <telerik:RadComboBoxItem Text="Test Item" />
                    <telerik:RadComboBoxItem Text="Test Item" />
                </Items>
            </telerik:RadComboBox>
        </telerik:RadToolTip>
        <telerik:RadToolTip ID="RadToolTip1" runat="server" TargetControlID="target2" RelativeTo="element"
            Width="200" Height="200" HideEvent="manualclose" OnClientHide="DatePickerToolTipHide">
            <telerik:RadDatePicker ID="picker" runat="server">
            </telerik:RadDatePicker>
        </telerik:RadToolTip>
    </form>
</body>
</html>
 ````

  