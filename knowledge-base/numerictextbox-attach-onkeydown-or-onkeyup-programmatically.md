---
title: Attach onkeydown or onkeyup to RadNumericTextBox Programmatically
description: Attach onkeydown or onkeyup to RadNumericTextBox Programmatically. Check it now!
type: how-to
page_title: Attach onkeydown or onkeyup to RadNumericTextBox Programmatically
slug: numerictextbox-attach-onkeydown-or-onkeyup-programmatically
res_type: kb
---


### DESCRIPTION

Telerik UI for AJAX toolset provides various input controls like RadNumericTextBox, RadTextBox, RadMaskedTextBox, etc. They have their own built-in `OnKeyPress` event handler:  
[https://docs.telerik.com/devtools/aspnet-ajax/controls/numerictextbox/client-side-programming/events/onkeypress]({%slug numerictextbox/client-side-programming/events/onkeypress%}) 
  
 With some reserved special action keys this event may not be raised - `Escape`, `Tab`, etc. If you need to capture these keys, you can use the `onkeydown` and `onkeyup` of the underlying input element.

### SOLUTION
 The solution demonstrates how you can achieve this by subscribing to the client-side event from the code-behind programmatically. The same logic is applicable for all Telerik input controls:  

````C#
txtDistance.Attributes.Add("onkeyup", "numBoxKeyUp(this, event)");
````
````VB
txtDistance.Attributes.Add("onkeyup", "numBoxKeyUp(this, event)")
````

````JavaScript
function numBoxKeyUp(numBoxEl, event) {
    var numBox = numBoxEl.control;
    console.log(event.keyCode + " -> " + numBox.get_textBoxValue());
}
````

  

 


