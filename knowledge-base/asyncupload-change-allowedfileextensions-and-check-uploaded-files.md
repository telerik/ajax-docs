---
title: Change AllowedFileExtensions and Check Uploaded Files
description: Change AllowedFileExtensions and Check Uploaded Files. Check it now!
type: how-to
page_title: Change AllowedFileExtensions and Check Uploaded Files
slug: asyncupload-change-allowedfileextensions-and-check-uploaded-files
res_type: kb
---

## How to

Change the allowed file extensions of RadAsyncUpload dynamically.

The potential issue from UX perspective is that if the user had uploaded a valid file that is now invalid, they will not get a notification out of the box, the file will simply not get uploaded to the target folder and the FileUploaded event will not fire for it.

## Solution

When you change the AllowedFileExtensions on the server, you can also call a JS function that will traverse the current files and invalidate them. This will also allow you to notify the user that they need to re-upload something.

Here follows a small example of such a scenario. The key points have comments.

````ASPX
<ol>
    <li>select a PDF in the async upload</li>
    <li>change the dropdown selection so that it allows PNGs</li>
    <li>optionally, upload a PNG and save it</li>
</ol>
<asp:UpdatePanel ID="upDocuments" runat="server" UpdateMode="Conditional">
    <ContentTemplate>
        <telerik:RadAsyncUpload ID="radUp" runat="server" HideFileInput="true"
            InputSize="55" MaxFileInputsCount="1" MultipleFileSelection="Disabled"
            PostbackTriggers="btnSave"
            AllowedFileExtensions=".pdf"
            OnFileUploaded="radUp_FileUploaded" />
        <asp:DropDownList runat="server" ID="ddlFileType" AutoPostBack="true" OnSelectedIndexChanged="ddlFileType_SelectedIndexChanged">
            <asp:ListItem Text="PDF" Selected="True" />
            <asp:ListItem Text="PNG" />
        </asp:DropDownList>
        <asp:Button Text="Save" ID="btnSave" runat="server" />
    </ContentTemplate>
</asp:UpdatePanel>
<script>
    function invalidateUploadedFiles() {
        var upload = $find("<%= radUp.ClientID %>");
        var inputs = upload.getUploadedFiles();
        //loop through current uploaded files
        for (i = inputs.length - 1; i >= 0; i--) {
            //check if the extension is valid
            if (!upload.isExtensionValid(inputs[i])) {
                //notify the user
                alert("extension is invalid for file: " + inputs[i] + "\nPlease upload a " + upload.get_allowedFileExtensions())
                //remove the invalid file
                upload.deleteFileInputAt(i);
            }
        }
        //without this, the handler will execute after every partial postback which you may or may not want
        Sys.Application.remove_load(invalidateUploadedFiles);
    }
</script>
````

````C#
protected void ddlFileType_SelectedIndexChanged(object sender, EventArgs e)
{
    //change allowed extensions
    radUp.AllowedFileExtensions = new string[] { (sender as DropDownList).SelectedItem.Text };
    //call client-side validation to check for the current files
    string script = "Sys.Application.add_load(invalidateUploadedFiles);";
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "someKey", script, true);
}
 
protected void radUp_FileUploaded(object sender, FileUploadedEventArgs e)
{
    //work with the uploaded file
    //make sure to validate files even after client-side validation
}
````

 