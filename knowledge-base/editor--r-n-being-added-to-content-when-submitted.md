---
title: line feed symbols being added to content when submitted
description: line feed symbols being added to content of RadEditor when submitted. Check it now!
type: how-to
page_title: line feed symbols being added to content when submitted
slug: editor--r-n-being-added-to-content-when-submitted
res_type: kb
---

  
## QUESTION  
**Why is the "\r\n" being added to the end of the text content of RadEditor when being submitted?  
  
## ANSWER**  
The \r\n are added for readability. Due to them when the editor's content is displayed in **Html** mode or in the Database it will be readable.  
  

If you do not want these line-feed and line breaks in the produced content you can use the **Trim** method of the **Content** server property:  
  
````C#
RadEditor1.Content.Trim(); .  
```` 

Another approach is to replace the line-feed and new line with empty string using the Replace method  
  
````C#
RadEditor1.Content.Replace("\r", "").Replace("\n", "")**;
````

  