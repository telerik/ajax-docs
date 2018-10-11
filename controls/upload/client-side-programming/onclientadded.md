---
title: OnClientAdded
page_title: OnClientAdded | RadUpload for ASP.NET AJAX Documentation
description: OnClientAdded
slug: upload/client-side-programming/onclientadded
tags: onclientadded
published: True
position: 6
---

# OnClientAdded



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The **OnClientAdded** client-side event occurs when a new row has just been added to the **RadUpload** control.

>tip This event occurs for the initial rows that are added when the **RadUpload** control is first loaded, as well as any rows added in response to the **Add** button or client-side methods such as **addFileInput()** .
>


The event handler receives two parameters:

1. The instance of the **RadUpload** control firing the event.

1. An eventArgs parameter containing the following method:

	* **get_row** returns the row that was just added.

	* **get_rowIndex** returns the index of the row

	* **get_fileInputField** returns the input element of the row (`<INPUT>` element)

Use the **OnClientAdded** event to perform any last minute changes to the rows in the **RadUpload** control. This is the point at which you should add controls for [custom fields]({%slug upload/how-to/adding-information-to-uploaded-files%}).

The following example shows how to use the **OnClientAdded** event to add child controls in a different order than the one that arises from using the **ControlObjectsVisibility** property:

````ASPNET
<script type="text/javascript">
    function addControls(upload, args) {
        var row = args.get_row();
        upload.appendClearButton(row);
        upload.appendCheckBox(row);
        upload.appendRemoveButton(row);
    }
</script>

<telerik:radupload id="RadUpload1" runat="server" 
    controlobjectsvisibility="AddButton, DeleteSelectedButton"
    onclientadded="addControls" />
````



# See Also

 * [OnClientAdding]({%slug upload/client-side-programming/onclientadding%})
