---
title: Dynamically change the PostbackTriggers collection of the AsyncUpload
description: Dynamically change the PostbackTriggers collection of the AsyncUpload. Check it now!
type: how-to
page_title: Dynamically change the PostbackTriggers collection of the AsyncUpload
slug: asyncupload-dynamically-change-the-postbacktriggers-collection
res_type: kb
---

## How To
  
Change the PostbackTriggers collection dynamically. For example, when the validation on the server passes, the control that fired the postback should become a PostbackTrigger for the AsyncUpload   
  

## Solutions
  
The PostbackTriggers collection can be modified in the Page\_Init event of the page lifecycle. That would allow adding certain controls to the PostbackTriggers collection based on hidden field values or some other custom logic.


>note
The ViewState might overwrite your settings from the Page\_Init, so it is advisable to set*EnableViewState="false"*to the AsyncUpload control.
>

Here is an example that adds the button that triggered a postback as a PostbackTrigger if the value of a hidden field is equal to "fixTriggers":  
  
````Markup
<asp:HiddenField runat="server" ID="shouldSave" />
````

````JavaScript
function updateHiddenField() {
        var hidden = document.getElementById("<%= shouldSave.UniqueID %>");
        hidden.value = "fixTriggers";
}
````

````Code-behind
protected void Page_Init(object sender, EventArgs e)
{
    if (Request[shouldSave.UniqueID] != null && Request[shouldSave.UniqueID].ToString() == "fixTriggers")
    {
        RadAsyncUpload1.PostbackTriggers = new string[] { "RadButton1" };
    }
    else
    {
        // persist the files on all postbacks
        RadAsyncUpload1.PostbackTriggers = new string[] { "" };
    }
}
 
protected void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
{
    shouldSave.Value = "";
}
````

Here are some resources that can help to get the ID of the control that triggered the postback:

 - [On postback, how can I check which control cause postback in Page\_Init event](https://stackoverflow.com/questions/3175513/on-postback-how-can-i-check-which-control-cause-postback-in-page-init-event);
 
 - [Which control caused the postback?](https://stackoverflow.com/questions/7269271/which-control-caused-the-postback)

  
