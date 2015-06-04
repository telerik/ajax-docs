---
title: Events
page_title: Client-side Events | RadUpload for ASP.NET AJAX Documentation
description: Events
slug: upload/client-side-programming/events
tags: events
published: True
position: 1
---

# Events



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


**RadUpload**, **RadProgressArea**, and **RadProgressManager** support the following client-side events:

## RadUpload

* [OnClientAdding]({%slug upload/client-side-programming/onclientadding%}) occurs when a row is about to be added to the **RadUpload** control.

* [OnClientAdded]({%slug upload/client-side-programming/onclientadded%}) occurs when a row has just been added to the **RadUpload** control.

* [OnClientClearing]({%slug upload/client-side-programming/onclientclearing%}) occurs when a file input control is cleared.

* [OnClientDeleting]({%slug upload/client-side-programming/onclientdeleting%}) occurs when a row is about to be deleted.

* [OnClientDeletingSelected]({%slug upload/client-side-programming/onclientdeletingselected%}) occurs when all selected rows are about to be deleted.

* [OnClientFileSelected]({%slug upload/client-side-programming/onclientfileselected%}) occurs when a file is selected in a file input control: either when the control loses focus after the user types in a value, or when the user selects a file using the browser.

## RadProgressArea

* [OnClientProgressUpdating]({%slug progressarea/client-side-programming/onclientprogressupdating%}) occurs immediately before the text indicators in the **RadProgressArea** dialog are updated.

* [OnClientProgressBarUpdating]({%slug progressarea/client-side-programming/onclientprogressbarupdating%}) occurs immediately before one of the progress bars in the **RadProgressArea** dialog is updated.

## RadProgressManager

* [OnClientProgressUpdating]({%slug progressarea/client-side-programming/onclientprogressupdating%}) occurs immediately before any **RadProgressArea** dialogs on the page are updated.

* [OnClientProgressStarted]({%slug progressarea/client-side-programming/onclientprogressstarted%}) occurs when the progress manager starts monitoring the progress of a file upload operation.

* [OnClientSubmitting]({%slug upload/client-side-programming/onclientsubmitting%}) occurs when a postback that uploads files is about to occur.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding property:

````ASPNET
<script type="text/javascript">
    function confirmDeletes(sender, eventArgs) {
        if (!confirm("Are you sure you want to delete the selected row?"))
            eventArgs.set_cancel(true); 
    }
    // #region client-side-events_1

    function onAddedHandler1() {
        alert("First handler called");
    }

    function onAddedHandler2() {
        alert("Second handler called"); 
    }

    function pageLoad() {
        var upload = $find("<%= RadUpload1.ClientID %>");
        upload.add_added(onAddedHandler1);
        upload.add_added(onAddedHandler2); 
    }
</script>
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	
function onAddedHandler1() {
    alert("First handler called");
}

function onAddedHandler2() {
    alert("Second handler called"); 
}

function pageLoad() {
    var upload = $find("<%= RadUpload1.ClientID %>");
    upload.add_added(onAddedHandler1);
    upload.add_added(onAddedHandler2); 
}
	
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
function removeOnAdded2() {
    var upload = $find("<%= RadUpload1.ClientID %>");
    upload.remove_added(onAddedHandler2); 
}
	
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondence between client-side and server-side names:


>caption  

| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientAdding|adding|add_adding, remove_adding|
|OnClientAdded|added|add_added, remove_added|
|OnClientClearing|clearing|add_clearing, remove_clearing|
|OnClientDeleting|deleting|add_deleting, remove_deleting|
|OnClientDeletingSelected|deletingSelected|add_deletingSelected, remove_deletingSelected|
|OnClientFileSelected|fileSelected|add_fileSelected, remove_fileSelected|
|OnClientProgressUpdating|progressUpdating|add_progressUpdating, remove_progressUpdating|
|OnClientProgressBarUpdating|progressBarUpdating|add_progressBarUpdating, remove_progressBarUpdating|
|OnClientProgressStarted|progressStarted|add_progressStarted, remove_progressStarted|

# See Also

 * [Client-side Programming Overview]({%slug upload/client-side-programming/overview%})

 * [Server-side Events]({%slug upload/server-side-programming/events%})

 * [RadUpload Object]({%slug upload/client-side-programming/radupload-object%})
 
 * [RadProgressArea Client Object]({%slug progressarea/client-side-programming/radprogressarea-client-object%})
 
 * [RadProgressManager Client Object]({%slug progressarea/client-side-programming/radprogressmanager-client-object%})
