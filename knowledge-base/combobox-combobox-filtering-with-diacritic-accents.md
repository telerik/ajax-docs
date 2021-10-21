---
title: ComboBox Filtering with Diacritic Accents
description: ComboBox Filtering with Diacritic Accents. Check it now!
type: how-to
page_title: ComboBox Filtering with Diacritic Accents
slug: combobox-combobox-filtering-with-diacritic-accents
res_type: kb
---

## DESCRIPTION  
  
 Usually you can keep various records in databases which can include letters and symbols from different cultures. Here are some of the diacritics of the Latin letter **e** for instance: **éèëê**.  

For convenience to your users, you can choose to enable accent-insensitive filtering for the RadComboBox component.

## SOLUTION
 This is a definition of a sample RadComboBox including item text with diacritic:  

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" Filter="Contains"
    EmptyMessage="Select a value">
    <Items>
        <telerik:RadComboBoxItem Text="Luís" Value="Luís" />
        <telerik:RadComboBoxItem Text="John" Value="John" />
        <telerik:RadComboBoxItem Text="Luis" Value="Luis" />
        <telerik:RadComboBoxItem Text="Doe" Value="Doe" />
        <telerik:RadComboBoxItem Text="Lûis" Value="Lûis" />
        <telerik:RadComboBoxItem Text="Müller" Value="Müller" />
    </Items>
</telerik:RadComboBox>
````

  
 And you can add the following override JavaScript logic to your page to achieve this filtering requirement:  

````JavaScript
<script>
    var $ = $telerik.$, $T = Telerik.Web.UI, $I = $T.RadComboBoxItem;
 
    Telerik.Web.UI.RadComboBoxItem.prototype._highlightOrg =
        Telerik.Web.UI.RadComboBoxItem.prototype._highlight;
    Telerik.Web.UI.RadComboBoxItem.prototype._highlight = function (regex, element) {
        var text = $(element).text().trim();
        $(element).text(replaceDiacritics(text));
        //$(element).text(text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")); - not supported in IE
 
        var matchIsFound = this._highlightOrg(regex, element);
        var highlightedText = $(element).html().trim();
 
        var highlightStartPosition = highlightedText.indexOf("<em>");
        text = [text.slice(0, highlightStartPosition), "<em>", text.slice(highlightStartPosition)].join('');
 
        var highlightEndPosition = highlightedText.indexOf("</em>");
        text = [text.slice(0, highlightEndPosition), "</em>", text.slice(highlightEndPosition)].join('');
 
        $(element).html(text);
        return matchIsFound;
    }
 
    Telerik.Web.UI.RadComboBoxItem.prototype.highlightText = function (filter, text) {
        this.clearEmTags();
 
        if (text === "")
            return true;
 
        var escapedText = $I._regExEscape(replaceDiacritics(text)),
            regex = null;
 
        if (filter == $T.RadComboBoxFilter.StartsWith)
            regex = new RegExp("^\\s*" + escapedText, "im");
        else if (filter == $T.RadComboBoxFilter.Contains)
            regex = new RegExp(escapedText, "gim");
 
        var matchIsFound = this._highlight(regex, this.get_element());
 
        return matchIsFound;
    }
 
    function replaceDiacritics(str) {
        var diacritics = [
          { char: 'A', base: /[\300-\306]/g },
          { char: 'a', base: /[\340-\346]/g },
          { char: 'E', base: /[\310-\313]/g },
          { char: 'e', base: /[\350-\353]/g },
          { char: 'I', base: /[\314-\317]/g },
          { char: 'i', base: /[\354-\357]/g },
          { char: 'O', base: /[\322-\330]/g },
          { char: 'o', base: /[\362-\370]/g },
          { char: 'U', base: /[\331-\334]/g },
          { char: 'u', base: /[\371-\374]/g },
          { char: 'N', base: /[\321]/g },
          { char: 'n', base: /[\361]/g },
          { char: 'C', base: /[\307]/g },
          { char: 'c', base: /[\347]/g }
        ]
 
        diacritics.forEach(function (letter) {
            str = str.replace(letter.base, letter.char);
        });
 
        return str;
    };
</script>
````
  


