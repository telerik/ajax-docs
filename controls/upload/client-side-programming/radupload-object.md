---
title: RadUpload Object
page_title: RadUpload Object | RadUpload for ASP.NET AJAX Documentation
description: RadUpload Object
slug: upload/client-side-programming/radupload-object
tags: radupload,object
published: True
position: 2
---

# RadUpload Object



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The following table lists the important **RadUpload** client-side methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addFileInput|none|none|Adds a new row to the RadUpload control.|

````ASPNET
<telerik:radupload runat="server" id="RadUpload1" controlobjectsvisibility="None" />
<input type="button" value="Add" onclick="myAdd()" />

<script type="text/javascript">
    function myAdd() {
        $find("<%= RadUpload1.ClientID %>").addFileInput();
    }
</script>
	
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| addFileInputAt | integer | none | Adds a new row to the RadUpload control at the specified (0-based) location. |

````ASPNET
<telerik:radupload runat="server" id="RadUpload1" controlobjectsvisibility="None" />
<input type="button" value="Add" onclick="myAdd()" />
<script type="text/javascript">
    function myAdd() {
        $find("<%= RadUpload1.ClientID %>").addFileInput(0);
    }
</script>
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| appendCheckBox | row | none | Appends a check box to the specified row. This method is useful for customizing the order of control elements. |

````ASPNET
<script type="text/javascript">
    function PutCheckBoxOnRight(upload, arguments) {
        upload.appendCheckBox(arguments.get_row());
    }
</script>
<telerik:radupload id="RadUpload1" runat="server" controlobjectsvisibility="AddButton, DeleteSelectedButton"
    onclientadded="PutCheckBoxOnRight" />
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| appendClearButton | row | none | Appends a clear button to the specified row.This method is useful for customizing the order of control elements. |


````ASPNET
<script type="text/javascript">
    function AddClearButton(upload, arguments) {
        upload.appendClearButton(arguments.get_row());
    }
</script>

<telerik:radupload id="RadUpload1" runat="server" controlobjectsvisibility="AddButton, DeleteSelectedButton"
    onclientadded="AddClearButton" />
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| appendRemoveButton | row | none | Appends a remove button to the specified row.This method is useful for customizing the order of control elements. |


````ASPNET
<script type="text/javascript">        

    function AddRemoveButton(upload, arguments) { upload.appendRemoveButton(arguments.get_row()); }
    // #region client-side-radupload_5

    function clearAllInputs() {
        var upload = $find("<%= RadUpload1.ClientID %>");
        var fileInputs = upload.getFileInputs();
        for (var i = fileInputs.length - 1; i >= 0; i--) {
            upload.clearFileInputAt(i);
        } 
    }
</script>
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| clearFileInputAt | integer | none | Clears the file input area in the specified (0-based) row. This method is useful for clearing all inputs in response to a cancel button, or clearing invalid inputs. |


````JavaScript

function clearAllInputs() {
    var upload = $find("<%= RadUpload1.ClientID %>");
    var fileInputs = upload.getFileInputs();
    for (var i = fileInputs.length - 1; i >= 0; i--) {
        upload.clearFileInputAt(i);
    } 
}
	
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| deleteFileInputAt | integer | none | Deletes the row at the specified (0-based) index if it exists. |


````JavaScript
	
function DeleteInvalidInputs() {
    var ul = $find("<%= RadUpload1.ClientID %>");
    var inputs = ul.getFileInputs();
    for (i = inputs.length - 1; i >= 0; i--) {
        if (!ul.isExtensionValid(inputs[i].value))
            ul.deleteFileInputAt(i);
    } 
}
	
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| deleteSelectedFileInputs | none | none | Deletes all selected rows. |


````ASPNET
<telerik:radupload id="RadUpload1" runat="server" controlobjectsvisibility="CheckBoxes, AddButton" />
<input type="button" value="Delete Selected" onclick="myDelete()" />
<script type="text/javascript">
    function myDelete() {
        $find("<%= RadUpload1.ClientID %>").deleteSelectedFileInputs();
    }
</script>
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| getFileInputs | none | Array | Returns an array containing the DOM elements for all file input elements. |


````JavaScript
	
function ClearInvalidInputs() {
    var ul = $find("<%= RadUpload1.ClientID %>");
    var inputs = ul.getFileInputs();
    for (i = inputs.length - 1; i >= 0; i--) {
        if (!ul.isExtensionValid(inputs[i].value))
            ul.clearFileInputAt(i);
    }
}
	
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| getID | string | string | Creates a new ID, based on the RadUpload ClientID and the supplied parameter. This method must be usedwhen adding custom fields to a RadUpload instance. |


````ASPNET
<telerik:radupload runat="server" id="RadUpload1" onclientadded="addTitle" />
<script type="text/javascript">
    function addTitle(radUpload, args) {
        var row = args.get_row();
        var title = document.createElement("input");
        title.id = title.name = radUpload.getID("title");
        row.insertBefore(title, row.firstChild);
    }
</script>
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| isExtensionValid | string | boolean | Validates the extension of the file name that is passed as a parameter. |


````JavaScript
	
function ClearInvalidInputs() {
    var ul = $find("<%= RadUpload1.ClientID %>");
    var inputs = ul.getFileInputs();
    for (i = inputs.length - 1; i >= 0; i--) {
        if (!ul.isExtensionValid(inputs[i].value)) 
            ul.clearFileInputAt(i);
    }
}
	
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| validateExtensions | none | boolean | Returns whether the client-side validation of the selected file names succeeded. |


````ASPNET
<telerik:radupload runat="server" id="RadUpload1" allowedfileextensions=".zip,.cab" />
<asp:CustomValidator runat="server" ID="CustomValidator1" Display="Dynamic" ClientValidationFunction="ValidateRadUpload1">
  Invalid extensions.
</asp:CustomValidator>
<asp:Button runat="server" ID="Upload" Text="Upload" />
<script type="text/javascript">
    function validateRadUpload1(source, arguments) {
        arguments.IsValid = $find("<%= RadUpload1.ClientID %>").validateExtensions();
    }
    // #region client-side-radupload_12

    function AllowJPEGExtension() {
        var update = $find("<%= RadUpload1.ClientID %>");
        if (!update.isExtensionValid(".jpeg")) {
            var exts = update.get_allowedFileExtensions();
            exts[exts.length] = ".jpeg";
        }
    }

````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| get_maxFileCount | none | integer | Returns the maximum number of rows in the RadUpload control. |
| set_maxFileCount | integer | none | Sets the maximum number of rows in the RadUpload control. |
| get_initialFileInputsCount | none | integer | Returns the initial number of rows when the RadUpload control is first loaded. |
| get_allowedFileExtensions | none | Array | Returns an array containing the allowed file extensions. |


````JavaScript
	
function AllowJPEGExtension() {
    var update = $find("<%= RadUpload1.ClientID %>");
    if (!update.isExtensionValid(".jpeg")) {
        var exts = update.get_allowedFileExtensions();
        exts[exts.length] = ".jpeg";
    }
}
	
````




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| get_element | none | HTML Element | Returns the DOM element for the RadUpload control. |


# See Also

 * [Client-side Programming Overview]({%slug upload/client-side-programming/overview%})

 * [Client-side Programming Events]({%slug upload/client-side-programming/events%})
