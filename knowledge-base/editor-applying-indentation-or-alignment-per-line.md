---
title: Applying indentation or alignment per line 
description: Applying indentation or alignment per line in RadEditor. Check it now!
type: how-to
page_title: Applying indentation or alignment per line 
slug: applying-indentation-or-alignment-per-line
res_type: kb
---

 
## HOW-TO
Applying indentation or alignment per line
   
## DESCRIPTION 
RadEditor uses the Rich Text Editing engine of the browser under which it operates. The default behavior of Internet Explorer is to apply the indentation and alignment to the whole paragraph rather than to a single line/word of text. The same behavior could be observed in MS Word as well.  
   
The solution below describes how to indent or align only the selected line.  
   
## SOLUTION 
All you need to do is setting the editor's **NewLineMode** property to "**P**". Thus the editor will insert a paragraph tag on every enter-key press and the user will be able to apply the indentation and alignment per line.   
   
The **NewLineMode** property was introduced because of browser differences when the user presses 'Enter'. In IE a paragraph is inserted, while Firefox inserts a &lt;br&gt; tag. By default this property is set to "**Br**", the editor insert &lt;br/&gt; tags and for that reason the indentation is applied to the whole content, because there is only one paragraph and all the content is inside it.
 
Additionally, to reduce the extra space between the paragraph blocks inside the editor's content area, you should set a global CSS paragraph style in your page, i.e.
 
 
````CSS
P  
{  
    margin:0px;  
}   
 
blockquote   
{   
    margin-top: 0px;       
    margin-bottom: 0px;   
} 
```` 
 
 
The blockquote style is used to remove the extra space when indentation is applied.

 