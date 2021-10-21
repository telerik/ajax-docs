---
title: Expected op «,» but found punc «;» error when loading Excel file in Spreadsheet
description: Expected op «,» but found punc «;» error when loading Excel file in Spreadsheet. Check it now!
type: how-to
page_title: Expected op «,» but found punc «;» error when loading Excel file in Spreadsheet
slug: spreadsheet-expected-op-but-found-punc-error-when-loading-excel-file-in-spreadsheet
res_type: kb
---


## PROBLEM

Expected op «,» but found punc «;» error is thrown in the console when loading an Excel file in Spreadsheet.

## DESCRIPTION

By default, the Spreadsheet uses the separators for the English culture while Excel depends on the current culture in order to determine which separators to use.

That can cause issues when the current culture's separators are different from the English culture's ones. For example, the list separator for the English culture is a comma `","` while in some cultures it is a semicolon `";"`.

### Example

The AVERAGE formula for the English culture looks like `=AVERAGE(1,3,5,6)`. In cultures where the list separator is a semicolon, the same formula will be rendered as `=AVERAGE(1;3;5;6). `When the Spreadsheet tries to parse the latter formula, it will throw the *Expected op «,» but found punc «;»*error.  
  
![punc error image](images/spreadsheet-punc-error.png)

## SOLUTION

One option to resolve this issue is to load the Excel file with the following approach

1. Save the current culture in a variable
2. Set the current culture to English
3. Load the file
4. Restore the current culture to the saved variable


````C#
protected void Page_Load(object sender, EventArgs e)
{
    MySpreadsheetProvider provider;
    if (Session[sessionKeyProviderSpreadsheet] == null || !IsPostBack)
    {
        provider = new MySpreadsheetProvider();
  
        Session[sessionKeyProviderSpreadsheet] = provider;
    }
    else
    {
        provider = (MySpreadsheetProvider)Session[sessionKeyProviderSpreadsheet];
    }
  
     // save the current culture
    var currentCulture = Thread.CurrentThread.CurrentCulture;
    var currentUICulture = Thread.CurrentThread.CurrentUICulture;
    // set the current culture to English
    Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("en-GB");
    Thread.CurrentThread.CurrentUICulture = new CultureInfo("en-GB");
    // load the file
    MySheet.Provider = provider;
    MySheet.DataBind();
    // restore the current culture
    Thread.CurrentThread.CurrentCulture = currentCulture;
    Thread.CurrentThread.CurrentUICulture = currentUICulture;
}
````
 