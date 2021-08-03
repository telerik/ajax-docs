---
title: Preventing insert of appointments in RadScheduler without specifying subject in the Inline Form
description: Preventing insert of appointments in RadScheduler without specifying subject in the Inline Form. Check it now!
type: how-to
page_title: Preventing insert of appointments in RadScheduler without specifying subject in the Inline Form
slug: scheduler-preventing-insert-of-appointments-without-specifying-subject-in-the-inline-form
res_type: kb
---

## How to  
   
Prevent inserting of appointments when no subject is specified in the Inline Form.  
   
![demo image](images/scheduler-preventing-insert-of-appointments-without-specifying-subject-in-the-inline-form.png)  
   
## Description
   
At this moment you are not allowed to create appointments without specifying their subject in the Advanced Form. This is achieved with the help of **RequiredFieldValidator** in the Advanced Form. However there is no limitation when using the Inline Form.   
   
## Solution
   
The solution is achieved by using **JQuery**. You'll need to subscribe to the **OnClientFormCreated** event and use the following code in the handler:  

````JavaScript
function OnClientFormCreated(sender, args) {
   var $ = $telerik.$;
   $(".rsAptEditConfirm").bind({
         click: function() {
            var subject = $('.rsAptEditTextareaWrapper').children();
            var text = subject.val();
            if (text == '') {
               alert('Please insert a subject!');
               return false;
            }
         }
   });
}
````

## Restrictions
   
Please note that if you subscribe to the server-side event **OnFormCreated** - you need to move the logic in the **OnClientFormCreated** event in the **pageLoad():**  


````JavaScript
function pageLoad() { 
   var $ = $telerik.$; 
   $(".rsAptEditConfirm").bind({ 
         click: function() { 
            var subject = $('.rsAptEditTextareaWrapper').children(); 
            var text = subject.val(); 
            if (text == '') { 
               alert('Please insert a subject!'); 
               return false; 
            } 
         } 
   }); 
}
````

 