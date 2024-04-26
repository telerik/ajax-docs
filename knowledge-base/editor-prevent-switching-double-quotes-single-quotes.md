---
title: Switching Double Quotes with Single Quotes in Telerik UI for RichText Editor
description: Learn how to prevent the switching of double quotes and single quotes in Telerik UI for RichText Editor when toggling between Design and HTML mode.
type: how-to
page_title: Prevent Switching of Double Quotes and Single Quotes | Telerik UI for RichText Editor
slug: editor-prevent-switching-double-quotes-single-quotes
tags: telerik, radeditor, richtext editor, double quotes, single quotes, HTML mode, Design mode
res_type: kb
---

## Environment

| Product | RadEditor for ASP.NET AJAX |

## Description

I want to prevent the automatic switching of double quotes (`"`) with single quotes (`'`) and vice versa in Telerik UI for ASP.NET AJAX RadEditor when toggling between Design and HTML mode. This behavior breaks the HTML5 data attribute element, as the single quote formatting is important for the JSON specification.

Before (HTML mode):

````HTML
<div data-wb-geomap='{
  "tables": [{
  "title": "Test",
  "caption": "Test",
  "id": "test",
  "zoom": true,
  "tab": true,
  "type": "symbol"
  }
  }]
  }'>
````
 

After (Design mode):

 
````HTML
<div data-wb-geomap="{
 'tables': [{
 'title': 'Test',
 'caption': 'Test',
 'id': 'test',
 'zoom': true,
 'tab': true,
 'type': 'symbol'
 }
  }]
  }'>
````

## Solution
The reported behavior is due to the browser's underlying rich text editing engine, which automatically converts double quotes to their HTML entity `&quot;` and vice versa. It can be reproduced in the following dojo project: https://dojo.telerik.com/UlaCozIk and is shown in these videos https://youtu.be/tCkT_gikhww and https://youtu.be/s1LCzDLRnSo. 
To prevent this behavior, you can implement a server-side solution based on regular expressions after obtaining the content via the `RadEditor.Content` property.

Here are the steps to prevent the switching of double quotes and single quotes:

1. Retrieve the content from RadEditor and convert HTML entities to actual quotes.
2. Use a regular expression pattern to locate and match the entire content of the `data-wb-geomap` attribute in double quotes.
3. Replace problematic internal single quotes within the JSON object while replacing the outer double quotes with single quotes.
4. Display the corrected content.

Here's an example of how to implement this server-side solution in ASP.NET:

```csharp
    protected void HandleEditorContent(object sender, EventArgs e)
    {
        // Retrieve the content from RadEditor and convert HTML entities to actual quotes
        string correctedContent = RadEditor1.Content.Replace("&quot;", "\"");

        // Regex pattern to locate and match the entire content of the data-wb-geomap attribute in double quotes
        string pattern = @"(data-wb-geomap="")([^""]*?)("")";

        // Replace problematic internal single quotes within the JSON object while replacing the outer double quotes with single quotes
         correctedContent = Regex.Replace(correctedContent, pattern, delegate (Match m)
        {
            // Replace internal single quotes with double quotes only within the JSON string
            string jsonContent = m.Groups[2].Value.Replace("'", "\"");

            // Return the corrected JSON within its original single-quoted attribute by replacing the double quotes with single quotes
            return "data-wb-geomap='" + jsonContent + "'";
        });

        // Display the corrected content in TextArea
        TextArea1.Text = correctedContent;
    }
```

Here's an example of how to implement this solution in ASPX:

```ASPX
        <telerik:RadEditor runat="server" ID="RadEditor1" Height="600px" >
            <Content></Content>
            <Modules>
                <telerik:EditorModule Name="RadEditorStatistics" Visible="true" />
                <telerik:EditorModule Name="RadEditorDomInspector" Visible="true" />
                <telerik:EditorModule Name="RadEditorNodeInspector" Visible="false" />
                <telerik:EditorModule Name="RadEditorHtmlInspector" Visible="true" />
            </Modules>
            <Content>
               test <div data-wb-geomap='{
                  "tables": [{
                  "title": "Test",
                  "caption": "Test",
                  "id": "test",
                  "zoom": true,
                  "tab": true,
                  "type": "symbol"
                  }

                  }]

                  }'></div> test <strong>test </strong>
            </Content>
           
        </telerik:RadEditor>
        <asp:Button Text="Submit" OnClick="HandleEditorContent" runat="server" />
        <asp:TextBox runat="server" TextMode="MultiLine" Width="1000px" Height="800px" ID="TextArea1" />
```


  
