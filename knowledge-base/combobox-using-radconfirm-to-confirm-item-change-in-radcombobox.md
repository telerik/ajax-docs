---
title: Using RadConfirm to confirm item change in RadComboBox
description: Using RadConfirm to confirm item change in RadComboBox. Check it now!
type: how-to
page_title: Using RadConfirm to confirm item change in RadComboBox
slug: combobox-using-radconfirm-to-confirm-item-change-in-radcombobox
res_type: kb
---

  
 ## HOW-TO
 Use RadConfirm to confirm item change in RadComboBox. The example will fire the server side "SelectedIndexChanged" event also.  
   
   
 ## SOLUTION
 Hook on the OnClientSelectedIndexChanging event of the ComboBox and invoke the radconfirm. Since radconfirm is a non-blocking control we cancel the OnClientSelectedIndexChanging event. Then in the callback function of the radconfirm we select the item if the user has clicked on the OK button.  

   
 ````ASP.NET
<telerik:RadComboBox ID="RadComboBox1"  
runat="server"  
OnClientSelectedIndexChanging="onClientSelectedIndexChanging" 
OnSelectedIndexChanged="RadComboBox1_SelectedIndexChanged"> 
    <Items> 
        <telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem1" /> 
        <telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem2" /> 
        <telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem3" /> 
        <telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem4" /> 
    </Items> 
</telerik:RadComboBox> 
<telerik:RadWindowManager ID="RadWindowManager1" runat="server"> 
</telerik:RadWindowManager> 

<script type="text/javascript"> 
var showConfirm = 1; 
 
function onClientSelectedIndexChanging(combo, eventArgs) 
{     
    var callBackFn = function (arg) 
    { 
        if (arg == true && showConfirm == 1) 
        { 
            combo.clearSelection(); 
            var item = eventArgs.get_item(); 
             
            //prevent entering the same part after calling the select() method 
            showConfirm = 0; 
            combo.findItemByText(item.get_text()).select(); 
            combo.set_text(item.get_text()); 
            //fire the server-side SelectedIndexChanged event 
            __doPostBack("RadComboBox1" , '{\"Command\":\"Select\"}'); 
             
            //now we can show the confirm again 
            showConfirm = 1; 
        } 
    } 
     
    if (showConfirm == 1) 
    { 
        radconfirm('Are you sure you want to change the item?', callBackFn); 
    } 
     
    //do not change the combo item until clicked on OK button of radconfirm 
    eventArgs.set_cancel(true); 
}         
</script> 
 ````
   


 