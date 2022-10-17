---
title: How to know if the user checked the "Overwrite if file exists? checkbox", in RadFileExplorer's ItemCommand event?
description: Identify when the user checked the 'Overwrite if file exists? checkbox' in RadFileExplorer.
type: how-to
page_title: How to know if the user checked the "Overwrite if file exists? checkbox", in RadFileExplorer's ItemCommand event?
slug: fileexplorer-how-to-know-in-itemcommand-if-the-user-checked-the-overwrite-if-file-exists-checkbox
res_type: kb
---


## Problem

In the [ItemCommand event]({%slug fileexplorer/server-side-programming/events%}#itemcommand) of the **RadFileExplorer** control, the **OverwriteExistingFiles** property always returns the server value and not the **checkbox value from the Upload dialog**. This can allow you to prevent the user from overwriting files if they already exist, regardless of their choice, based on some server logic.

## Description

In some cases you may want to know whether the **"Overwrite if file exists?" checkbox** is checked or not. Its initial value is determined by the OverwriteExistingFiles property and when files are uploaded the checkbox Checked property is evaluated before overwriting files, so that it can work together with the provider.

## Solution

You can get a reference to the checkbox control and use its value by using the** FindControl()** method. Its ID is **chkOverwrite**. Here is a snippet that checks if the file already exists and prevents file overwrites (the built-in logic would also do that, this is just an example):

````C#
protected void FileExplorer_ItemCommand(object sender, RadFileExplorerEventArgs e)
{
    if (e.Command == "UploadFile")
    {
        bool userWantsToOverwriteFile = ((sender as RadFileExplorer).FindControl("chkOverwrite") as CheckBox).Checked;
        bool fileExists = File.Exists(Server.MapPath(e.Path));
        if (fileExists && !userWantsToOverwriteFile)
        {
            e.Cancel = true;
        }
    }
}
````

## Notes

When using a [custom content provider]({%slug fileexplorer/server-side-programming/use-custom-filebrowsercontentprovider%}), you do not need to perform such a check in your code. The file explorer checks if the file exists and whether the "overwrite" checkbox is checked before calling the StoreFile() method of the provider. So, if the file does not exist, or the user did not check the checkbox, your StoreFile method will not be called.

Here is an extract of the RadFileExplorer code that does this check:

````C#
using (Stream stream = ContentProvider.GetFile(fullFileName))
{
    if (stream != null && !ShouldOverwriteExistingFiles())
    {
        errorMessage += uploadedFile.GetName() + " :  " + Localization.GetString("FileExists") + "\\r\\n";
        continue;
    }
}
newFilePath = ContentProvider.StoreFile(uploadedFile, currentDir, lastFileName);
````

 