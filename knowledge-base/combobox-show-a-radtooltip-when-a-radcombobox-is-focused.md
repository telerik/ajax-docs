---
title: Show a RadToolTip when a RadComboBox is focused
description: Show a RadToolTip when a RadComboBox is focused. Check it now!
type: how-to
page_title: Show a RadToolTip when a RadComboBox is focused
slug: combobox-show-a-radtooltip-when-a-radcombobox-is-focused
res_type: kb
---

## How to
   
Show a **RadToolTip** when a **RadComboBox** is focused  
  

## Solution

Usually, to show a **RadToolTip** when an element is focused, it is enough to set the element as target control and to set **ShowEvent="OnFocus**". However, the case when using **RadComboBox** is slightly different because the **RadComboBox** /as all **RadControls**/ is complex HTML and it is formed by different standard HTML elements. The combo box has its focus event when actually the INPUT element is focused and thus you should "inform" the tooltip that this is the particular element it should use as a target.  
   
In order to achieve this, we suggest the following two approaches:

 1. Specify the target as the actual client ID of the  input 
 
 The INPUT element of the **RadComboBox** has its client ID formed by the ClientID of the **RadComboBox** plus the suffix \_Input. Note, that  you should explicitly set **isClientID** to **true** as well because otherwise the tooltip will search for a server control with such an ID and since there is not such, an error will be thrown. 

 Sample code snippet which shows the approach is available below:

 ````ASPX
 <h3>
      First Approach - Input client ID specified</h3>
  <br />
  <br />
  <br />
  <telerik:RadComboBox ID="RadComboBoxCurrency" runat="server" Skin="Outlook" Width="184px">
      <Items>
          <telerik:RadComboBoxItem Text="Test Item" />
          <telerik:RadComboBoxItem Text="Test Item" />
          <telerik:RadComboBoxItem Text="Test Item" />
          <telerik:RadComboBoxItem Text="Test Item" />
          <telerik:RadComboBoxItem Text="Test Item" />
          <telerik:RadComboBoxItem Text="Test Item" />
      </Items>
  </telerik:RadComboBox>
  <telerik:RadToolTip ID="RadToolTipCurrency" runat="server" TargetControlID="RadComboBoxCurrency_Input"
      IsClientID="true" Position="MiddleRight" RelativeTo="Element" ShowDelay="300"
      ShowEvent="OnFocus" Text="******************" Skin="Windows7" AnimationDuration="300"
      Animation="Resize" HideDelay="200" />
 ````

 This approach is recommended in simple scenarios e.g with a separate **RadToolTip** as shown above.  
   
 1. Handle the **RadComboBox's** **OnClientFocus** event and show the tooltip from code  

 In this case you should set **ShowEvent="FromCode"** for the tooltip and use its API to show it in the **OnClientFocus** handler of the **RadComboBox** - e.g as shown below:  
 
 ````ASPX
 <h3>
       Second Approach - OnClientFocus event</h3>
   <br />
   <br />
   <br />
   <script type="text/javascript">
       function OnClientFocus()
       {
           setTimeout(function()
           {
               var tooltip = $find("<%=RadToolTip1.ClientID %>");
               if (tooltip) tooltip.show();
           }, 200);
       }
     
   </script>
   <telerik:RadToolTip ID="RadToolTip1" runat="server" TargetControlID="RadComboBox1"
       IsClientID="true" Position="MiddleRight" RelativeTo="Element" ShowDelay="300"
       ShowEvent="FromCode" Text="******************" Skin="Windows7" AnimationDuration="300"
       Animation="Resize" HideDelay="200" />
   <telerik:RadComboBox ID="RadComboBox1" runat="server" Skin="Outlook" Width="184px"
       OnClientFocus="OnClientFocus">
       <Items>
           <telerik:RadComboBoxItem Text="Test Item" />
           <telerik:RadComboBoxItem Text="Test Item" />
           <telerik:RadComboBoxItem Text="Test Item" />
           <telerik:RadComboBoxItem Text="Test Item" />
           <telerik:RadComboBoxItem Text="Test Item" />
           <telerik:RadComboBoxItem Text="Test Item" />
       </Items>
   </telerik:RadComboBox>
 ````

 This approach covers more complex scenarios as well - e.g you can use it for dynamic creation of tooltips on the client  by using the **RadToolTipManager** client  API.  
   
>note Note, that always when using on focus event for the tooltip you should use a little timeout /ShowDelay/ because otherwise if you use the mouse click to focus, this will trigger the tooltip to hide.


 