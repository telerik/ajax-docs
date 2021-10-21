---
title: Adding special characters in HTML code
description: Adding special characters in HTML code - Telerik Web UI. Check it now!
type: how-to
page_title: Adding special characters in HTML code
slug: licensing-adding-special-characters-in-html-code
res_type: kb
---


## HOW-TO  
Add special characters in HTML code  
  
## ANSWER  
Very often special characters, not present on the keyboard, need to be inserted in HTML. These include various punctuation marks and diacritics.    
In order to use such in HTML code, you must encode them with generic alpha-numeric characters. Basically, you can encode any character using its Unicode code, for example &#xxxx; where xxxx is its numeric representation. Below is a table with the most often used characters:
 

<table cellspacing="0" cellpadding="3" border="1"> <tbody> <tr> <th bgcolor="#dddddd"><font size="2">Punctuation</font></th> <th bgcolor="#dddddd"><font size="2">HTML Entity<br><small>(case sensitive)</small></font></th> <th bgcolor="#dddddd"><font size="2">ISO Latin-1 code</font></th> <th bgcolor="#dddddd"><font size="2">name or meaning</font></th></tr> <tr> <th><font size="2">¡</font></th> <td align="middle"><font size="2">&amp;iexcl;</font></td> <td align="middle"><font size="2">&amp;#161;</font></td> <td align="middle"><font size="2">inverted exclamation</font></td></tr> <tr> <th><font size="2">¿</font></th> <td align="middle"><font size="2">&amp;iquest;</font></td> <td align="middle"><font size="2">&amp;#191;</font></td> <td align="middle"><font size="2">inverted question mark</font></td></tr> <tr> <th><font size="2">"</font></th> <td align="middle"><font size="2">&amp;quot;</font></td> <td align="middle"><font size="2">&amp;#34;</font></td> <td align="middle"> <p><font size="2">quotation mark</font></p></td></tr> <tr> <th><font size="2">« 
<hr width="50%" noshade="" size="1">
»</font></th> <td align="middle"><font size="2">&amp;laquo; 
<hr width="50%" noshade="" size="1">
&amp;raquo;</font></td> <td align="middle"><font size="2">&amp;#171; 
<hr width="50%" noshade="" size="1">
&amp;#187;</font></td> <td align="middle"><font size="2">guillemets (European-style quotation marks)</font></td></tr> <tr> <td align="middle"><font size="2">&nbsp; <br><small><i>(Its there, but you can't see it!)</i></small></font></td> <td align="middle"><font size="2">&amp;nbsp;</font></td> <td align="middle"><font size="2">&amp;#160;</font></td> <td align="middle"> <p><font size="2">non-breaking space</font></p></td></tr> <tr> <th bgcolor="#dddddd"><font size="2">Symbols</font></th> <th colspan="3"><font size="2">&nbsp;<br></font></th></tr> <tr> <th><font size="2">&amp;</font></th> <td align="middle"><font size="2">&amp;amp;</font></td> <td align="middle"><font size="2">&amp;#38;</font></td> <td align="middle"><font size="2">ampersand</font></td></tr> <tr> <th><font size="2">¢</font></th> <td align="middle"><font size="2">&amp;cent;</font></td> <td align="middle"><font size="2">&amp;#162;</font></td> <td align="middle"><font size="2">cent</font></td></tr> <tr> <th><font size="2">©</font></th> <td align="middle"><font size="2">&amp;copy;</font></td> <td align="middle"><font size="2">&amp;#169;</font></td> <td align="middle"><font size="2">copyright</font></td></tr> <tr> <th><font size="2">÷</font></th> <td align="middle"><font size="2">&amp;divide;</font></td> <td align="middle"><font size="2">&amp;#247;</font></td> <td align="middle"><font size="2">divide</font></td></tr> <tr> <th><font size="2">&gt;</font></th> <td align="middle"><font size="2">&amp;gt;</font></td> <td align="middle"><font size="2">&amp;#62;</font></td> <td align="middle"><font size="2">greater than</font></td></tr> <tr> <th><font size="2">&lt;</font></th> <td align="middle"><font size="2">&amp;lt;</font></td> <td align="middle"><font size="2">&amp;#60;</font></td> <td align="middle"><font size="2">less than</font></td></tr> <tr> <th><font size="2">µ</font></th> <td align="middle"><font size="2">&nbsp;</font></td> <td align="middle"><font size="2">&amp;#181;</font></td> <td align="middle"><font size="2">micron</font></td></tr> <tr> <th><font size="2">·</font></th> <td align="middle"><font size="2">&amp;middot;</font></td> <td align="middle"><font size="2">&amp;#183;</font></td> <td align="middle"> <p><font size="2">middle dot</font></p></td></tr> <tr> <th><font size="2">¶</font></th> <td align="middle"><font size="2">&amp;para;</font></td> <td align="middle"><font size="2">&amp;#182;</font></td> <td align="middle"><font size="2">pilcrow (paragraph sign)</font></td></tr> <tr> <th><font size="2">±</font></th> <td align="middle"><font size="2">&amp;plusmn;</font></td> <td align="middle"><font size="2">&amp;#177;</font></td> <td align="middle"><font size="2">plus/minus</font></td></tr> <tr> <th><font size="2">£</font></th> <td align="middle"><font size="2">&amp;pound;</font></td> <td align="middle"><font size="2">&amp;#163;</font></td> <td align="middle"><font size="2">British Pound Sterling</font></td></tr> <tr> <th><font size="2">®</font></th> <td align="middle"><font size="2">&amp;reg;</font></td> <td align="middle"><font size="2">&amp;#174;</font></td> <td align="middle"><font size="2">registered</font></td></tr> <tr> <th><font size="2">§</font></th> <td align="middle"><font size="2">&amp;sect;</font></td> <td align="middle"><font size="2">&amp;#167;</font></td> <td align="middle"><font size="2">section</font></td></tr> <tr> <th><font size="2">¥</font></th> <td align="middle"><font size="2">&amp;yen;</font></td> <td align="middle"><font size="2">&amp;#165;</font></td> <td align="middle"><font size="2">Japanese Yen</font></td></tr> <tr> <th bgcolor="#dddddd"><font size="2">Diacritics</font></th> <th colspan="3"><font size="2">&nbsp;<br></font></th></tr> <tr> <th><font size="2">á 
<hr width="50%" noshade="">
Á</font></th> <td align="middle"><font size="2">&amp;aacute; 
<hr width="50%" noshade="">
&amp;Aacute;</font></td> <td align="middle"><font size="2">&amp;#225; 
<hr width="50%" noshade="">
&amp;#193;</font></td> <td align="middle"><font size="2">lower-case "a" with acute accent 
<hr width="50%" noshade="">
upper-case "A" with acute accent</font></td></tr> <tr> <th><font size="2">à 
<hr width="50%" noshade="">
À</font></th> <td align="middle"><font size="2">&amp;agrave; 
<hr width="50%" noshade="">
&amp;Agrave;</font></td> <td align="middle"><font size="2">&amp;#224; 
<hr width="50%" noshade="">
&amp;#192;</font></td> <td align="middle"><font size="2">lower-case "a" with acute accent 
<hr width="50%" noshade="">
upper-case "A" with acute accent</font></td></tr> <tr> <th><font size="2">â 
<hr width="50%" noshade="">
Â</font></th> <td align="middle"><font size="2">&amp;acric; 
<hr width="50%" noshade="">
&amp;Acirc;</font></td> <td align="middle"><font size="2">&amp;#226; 
<hr width="50%" noshade="">
&amp;#194;</font></td> <td align="middle"><font size="2">lower-case "a" with circumflex 
<hr width="50%" noshade="">
upper-case "A" with circumflex</font></td></tr> <tr> <th><font size="2">å 
<hr width="50%" noshade="">
Å</font></th> <td align="middle"><font size="2">&amp;aring; 
<hr width="50%" noshade="">
&amp;Aring;</font></td> <td align="middle"><font size="2">&amp;#229; 
<hr width="50%" noshade="">
&amp;#197;</font></td> <td align="middle"><font size="2">lower-case "a" with ring 
<hr width="50%" noshade="">
upper-case "A" with ring</font></td></tr> <tr> <th><font size="2">ã 
<hr width="50%" noshade="">
Ã</font></th> <td align="middle"><font size="2">&amp;atilde; 
<hr width="50%" noshade="">
&amp;Atilde;</font></td> <td align="middle"><font size="2">&amp;#227; 
<hr width="50%" noshade="">
&amp;#195;</font></td> <td align="middle"><font size="2">lower-case "a" with tilde 
<hr width="50%" noshade="">
upper-case "A" with tilde</font></td></tr> <tr> <th><font size="2">ä 
<hr width="50%" noshade="">
Ä</font></th> <td align="middle"><font size="2">&amp;auml; 
<hr width="50%" noshade="">
&amp;Auml;</font></td> <td align="middle"><font size="2">&amp;#228; 
<hr width="50%" noshade="">
&amp;#196;</font></td> <td align="middle"><font size="2">lower-case "a" with diaeresis/umlaut 
<hr width="50%" noshade="">
upper-case "A" with diaeresis/umlaut</font></td></tr> <tr> <th><font size="2">æ 
<hr width="50%" noshade="">
Æ</font></th> <td align="middle"><font size="2">&amp;aelig; 
<hr width="50%" noshade="">
&amp;AElig;</font></td> <td align="middle"><font size="2">&amp;#230; 
<hr width="50%" noshade="">
&amp;#198;</font></td> <td align="middle"><font size="2">lower-case "ae" ligature 
<hr width="50%" noshade="">
upper-case "AE" ligature</font></td></tr> <tr> <th><font size="2">ç 
<hr width="50%" noshade="">
Ç</font></th> <td align="middle"><font size="2">&amp;ccedil; 
<hr width="50%" noshade="">
&amp;Ccedil;</font></td> <td align="middle"><font size="2">&amp;#231; 
<hr width="50%" noshade="">
&amp;#199;</font></td> <td align="middle"><font size="2">lower-case "c" with cedilla 
<hr width="50%" noshade="">
upper-case "C" with cedilla</font></td></tr> <tr> <th><font size="2">é 
<hr width="50%" noshade="">
É</font></th> <td align="middle"><font size="2">&amp;eacute; 
<hr width="50%" noshade="">
&amp;Eacute;</font></td> <td align="middle"><font size="2">&amp;#233; 
<hr width="50%" noshade="">
&amp;#201;</font></td> <td align="middle"><font size="2">lower-case "e" with acute accent 
<hr width="50%" noshade="">
upper-case "E" with acute accent</font></td></tr> <tr> <th><font size="2">è 
<hr width="50%" noshade="">
È</font></th> <td align="middle"><font size="2">&amp;egrave; 
<hr width="50%" noshade="">
&amp;Egrave;</font></td> <td align="middle"><font size="2">&amp;#232; 
<hr width="50%" noshade="">
&amp;#200;</font></td> <td align="middle"><font size="2">lower-case "e" with grave accent 
<hr width="50%" noshade="">
upper-case "E" with grave accent</font></td></tr> <tr> <th><font size="2">ê 
<hr width="50%" noshade="">
Ê</font></th> <td align="middle"><font size="2">&amp;ecirc; 
<hr width="50%" noshade="">
&amp;Ecirc;</font></td> <td align="middle"><font size="2">&amp;#234; 
<hr width="50%" noshade="">
&amp;#202;</font></td> <td align="middle"><font size="2">lower-case "e" with circumflex 
<hr width="50%" noshade="">
upper-case "E" with circumflex</font></td></tr> <tr> <th><font size="2">ë 
<hr width="50%" noshade="">
Ë</font></th> <td align="middle"><font size="2">&amp;euml; 
<hr width="50%" noshade="">
&amp;Euml;</font></td> <td align="middle"><font size="2">&amp;#235; 
<hr width="50%" noshade="">
&amp;#203;</font></td> <td align="middle"><font size="2">lower-case "e" with diaeresis/umlaut 
<hr width="50%" noshade="">
upper-case "E" with diaeresis/umlaut</font></td></tr> <tr> <th><font size="2">í 
<hr width="50%" noshade="">
Í</font></th> <td align="middle"><font size="2">&amp;iacute; 
<hr width="50%" noshade="">
&amp;Iacute;</font></td> <td align="middle"><font size="2">&amp;#237; 
<hr width="50%" noshade="">
&amp;#205;</font></td> <td align="middle"><font size="2">lower-case "i" with acute accent 
<hr width="50%" noshade="">
upper-case "I" with acute accent</font></td></tr> <tr> <th><font size="2">ì 
<hr width="50%" noshade="">
Ì</font></th> <td align="middle"><font size="2">&amp;igrave; 
<hr width="50%" noshade="">
&amp;Igrave;</font></td> <td align="middle"><font size="2">&amp;#236; 
<hr width="50%" noshade="">
&amp;#204;</font></td> <td align="middle"><font size="2">lower-case "i" with grave accent 
<hr width="50%" noshade="">
upper-case "I" with grave accent</font></td></tr> <tr> <th><font size="2">î 
<hr width="50%" noshade="">
Î</font></th> <td align="middle"><font size="2">&amp;icirc; 
<hr width="50%" noshade="">
&amp;Icirc;</font></td> <td align="middle"><font size="2">&amp;#238; 
<hr width="50%" noshade="">
&amp;#206;</font></td> <td align="middle"><font size="2">lower-case "i" with circumflex 
<hr width="50%" noshade="">
upper-case "I" with circumflex</font></td></tr> <tr> <th><font size="2">ï 
<hr width="50%" noshade="">
Ï</font></th> <td align="middle"><font size="2">&amp;iuml; 
<hr width="50%" noshade="">
&amp;Iuml;</font></td> <td align="middle"><font size="2">&amp;#239; 
<hr width="50%" noshade="">
&amp;#207;</font></td> <td align="middle"><font size="2">lower-case "i" with diaeresis/umlaut 
<hr width="50%" noshade="">
upper-case "I" with diaeresis/umlaut</font></td></tr> <tr> <th><font size="2">ñ 
<hr width="50%" noshade="">
Ñ</font></th> <td align="middle"><font size="2">&amp;ntilde; 
<hr width="50%" noshade="">
&amp;Ntilde;</font></td> <td align="middle"><font size="2">&amp;#241; 
<hr width="50%" noshade="">
&amp;#209;</font></td> <td align="middle"><font size="2">lower-case "n" with tilde 
<hr width="50%" noshade="">
upper-case "N" with tilde</font></td></tr> <tr> <th><font size="2">ó 
<hr width="50%" noshade="">
Ó</font></th> <td align="middle"><font size="2">&amp;oacute; 
<hr width="50%" noshade="">
&amp;Oacute;</font></td> <td align="middle"><font size="2">&amp;#243; 
<hr width="50%" noshade="">
&amp;#211;</font></td> <td align="middle"><font size="2">lower-case "o" with acute accent 
<hr width="50%" noshade="">
upper-case "O" with acute accent</font></td></tr> <tr> <th><font size="2">ò 
<hr width="50%" noshade="">
Ò</font></th> <td align="middle"><font size="2">&amp;ograve; 
<hr width="50%" noshade="">
&amp;Ograve;</font></td> <td align="middle"><font size="2">&amp;#242; 
<hr width="50%" noshade="">
&amp;#210;</font></td> <td align="middle"><font size="2">lower-case "o" with grave accent 
<hr width="50%" noshade="">
upper-case "O" with grave accent</font></td></tr> <tr> <th><font size="2">ô 
<hr width="50%" noshade="">
Ô</font></th> <td align="middle"><font size="2">&amp;ocirc; 
<hr width="50%" noshade="">
&amp;Ocirc;</font></td> <td align="middle"><font size="2">&amp;#244; 
<hr width="50%" noshade="">
&amp;#212;</font></td> <td align="middle"><font size="2">lower-case "o" with circumflex 
<hr width="50%" noshade="">
upper-case "O" with circumflex</font></td></tr> <tr> <th><font size="2">Ø 
<hr width="50%" noshade="">
Ø</font></th> <td align="middle"><font size="2">&amp;oslash; 
<hr width="50%" noshade="">
&amp;Oslash;</font></td> <td align="middle"><font size="2">&amp;#248; 
<hr width="50%" noshade="">
&amp;#216;</font></td> <td align="middle"><font size="2">lower-case "o" with slash 
<hr width="50%" noshade="">
upper-case "O" with slash</font></td></tr> <tr> <th><font size="2">õ 
<hr width="50%" noshade="">
Õ</font></th> <td align="middle"><font size="2">&amp;otilde; 
<hr width="50%" noshade="">
&amp;Otilde;</font></td> <td align="middle"><font size="2">&amp;#245; 
<hr width="50%" noshade="">
&amp;#213;</font></td> <td align="middle"><font size="2">lower-case "o" with tilde 
<hr width="50%" noshade="">
upper-case "O" with tilde</font></td></tr> <tr> <th><font size="2">ö 
<hr width="50%" noshade="">
Ö</font></th> <td align="middle"><font size="2">&amp;ouml; 
<hr width="50%" noshade="">
&amp;Ouml;</font></td> <td align="middle"><font size="2">&amp;#246; 
<hr width="50%" noshade="">
&amp;#214;</font></td> <td align="middle"><font size="2">lower-case "o" with diaeresis/umlaut 
<hr width="50%" noshade="">
upper-case "O" with diaeresis/umlaut</font></td></tr> <tr> <th><font size="2">ß</font></th> <td align="middle"><font size="2">&amp;szlig;</font></td> <td align="middle"><font size="2">&amp;#223;</font></td> <td align="middle"><font size="2">ess-tsett</font></td></tr> <tr> <th><font size="2">ú 
<hr width="50%" noshade="">
Ú</font></th> <td align="middle"><font size="2">&amp;uacute; 
<hr width="50%" noshade="">
&amp;Uacute;</font></td> <td align="middle"><font size="2">&amp;#250; 
<hr width="50%" noshade="">
&amp;#218;</font></td> <td align="middle"><font size="2">lower-case "u" with acute accent 
<hr width="50%" noshade="">
upper-case "U" with acute accent</font></td></tr> <tr> <th><font size="2">ù 
<hr width="50%" noshade="">
Ù</font></th> <td align="middle"><font size="2">&amp;ugrave; 
<hr width="50%" noshade="">
&amp;Ugrave;</font></td> <td align="middle"><font size="2">&amp;#249; 
<hr width="50%" noshade="">
&amp;#217;</font></td> <td align="middle"><font size="2">lower-case "u" with grave accent 
<hr width="50%" noshade="">
upper-case "U" with grave accent</font></td></tr> <tr> <th><font size="2">û 
<hr width="50%" noshade="">
Û</font></th> <td align="middle"><font size="2">&amp;ucirc; 
<hr width="50%" noshade="">
&amp;Ucirc;</font></td> <td align="middle"><font size="2">&amp;#251; 
<hr width="50%" noshade="">
&amp;#219;</font></td> <td align="middle"><font size="2">lower-case "u" with circumflex 
<hr width="50%" noshade="">
upper-case "U" with circumflex</font></td></tr> <tr> <th><font size="2">ü 
<hr width="50%" noshade="">
Ü</font></th> <td align="middle"><font size="2">&amp;uuml; 
<hr width="50%" noshade="">
&amp;Uuml;</font></td> <td align="middle"><font size="2">&amp;#252; 
<hr width="50%" noshade="">
&amp;#220;</font></td> <td align="middle"><font size="2">lower-case "u" with diaeresis/umlaut 
<hr width="50%" noshade="">
upper-case "U" with diaeresis/umlaut</font></td></tr> <tr> <th><font size="2">ÿ</font></th> <td align="middle"><font size="2">&amp;yuml;</font></td> <td align="middle"><font size="2">&amp;#255;</font></td> <td align="middle"><font size="2">lower-case "y" with diaeresis/umlaut</font></td></tr> <tr> <th><font size="2">´ 
<hr width="50%" noshade="">
`</font></th> <td align="middle"><font size="2">&nbsp;</font></td> <td align="middle"><font size="2">&amp;#180; 
<hr width="50%" noshade="">
&amp;#96;</font></td> <td align="middle"><font size="2">acute accent with no letter 
<hr width="50%" noshade="">
grave accent/reversed apostrophe with no </font></td></tr></tbody></table>



        