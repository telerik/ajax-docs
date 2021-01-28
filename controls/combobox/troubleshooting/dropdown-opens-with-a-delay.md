---
title: DropDown Opens with a Delay
page_title: DropDown Opens with a Delay - RadComboBox
description: Check our Web Forms article about DropDown Opens with a Delay.
slug: combobox/troubleshooting/dropdown-opens-with-a-delay
tags: dropdown,opens,with,a,delay
published: True
position: 8
---

# DropDown Opens with a Delay



## 

In case of **RadComboBox** with a high number of Items a brief delay is observable when the drop down is opened for the first time in a page life cycle.The delay is caused by the so called **‘lazy initialization’** mechanism - Item objects are initialized in the latest possible moment in the control life cycle. This is the first time Items are accessed with the **get_items()** method, which happens automatically right before the drop down opens.

You could avoid this delay, or more specifically 'move' it to the initial page load, by calling **get_items** early in the page life cycle either for all RadComboBoxes on the page or for individual ones.

The first approach uses the **pageLoad** function as shown below:

````JavaScript
	 
function pageLoad(sender, eventArgs) {
   //get an array of all RadComboBoxes on the page
   var comboBoxesOnPage = Telerik.Web.UI.RadComboBox.ComboBoxes;
   
   for (var ix = 0; ix < comboBoxesOnPage.length; ix++) {
	   comboBoxesOnPage[ix].get_items(); //force Item initialization
   }
}
				
````



The second approach uses the [OnClientLoad]({%slug combobox/client-side-programming/events/onclientload%}) event of a single RadComboBox:

````JavaScript
	     
<script type="text/javascript">

   function onLoad(sender, eventArgs) {
	   sender.get_items(); //force Item initialization
   }
</script>

<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server" OnClientLoad="onLoad" /> 
				
````


