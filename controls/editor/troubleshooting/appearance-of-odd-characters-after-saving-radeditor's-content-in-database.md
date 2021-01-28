---
title: Appearance of Odd Characters After Saving RadEditor's Content In Database
page_title: Appearance of Odd Characters After Saving RadEditor's Content In Database - RadEditor
description: Check our Web Forms article about Appearance of Odd Characters After Saving RadEditor's Content In Database.
slug: editor/troubleshooting/appearance-of-odd-characters-after-saving-radeditor's-content-in-database
tags: appearance,of,odd,characters,after,saving,radeditor's,content,in,database
published: True
position: 6
---

# Appearance of Odd Characters After Saving RadEditor's Content In Database

Sometimes when saving standard or multi language content with apostrophes and other special characters in a database, the text is saved with odd characters, e.g.:

````XML
?????? sample content ?? ???? ???? "â€™??? ???ÂÂcontent ?? ???? Â??? ?? ?????? ????
??????? sample cont???? ??????? ????? ?? ?????? ? ????
````

**Solution**:

This is an encoding problem, which could be fixed using the following suggestions:

* Set your page and request encoding to be **UTF-8**

* Set UTF-8 encoding to the page with the editor: `<meta http-equiv="content-type" content="text/html; charset=utf-8">`

* Set UTF-8 encoding to the Web.config of your web application `<?xml version="1.0" encoding="utf-8" ?>` and the fileEncoding to UTF-8 in the `<globalization>` inner tag of `<system.web>` tags, e.g. `<globalization fileEncoding="UTF-8"/>`

* Change the data type of the database column to be **nchar** or **ntext**. The **nchar** type returns the Unicode character with the given integer code, as defined by the Unicode standard. You can find additional information about these SQL STRING column types in this MSDN help center by following the next link: [String Functions (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/functions/string-functions-transact-sql?view=sql-server-ver15)

* Precede all Unicode strings with a prefix N when you deal with Unicode string constants in SQL Server as documented in this MS KB article: [Character data is represented incorrectly when the code page of the client computer differs from the code page of the database in SQL Server](Character data is represented incorrectly when the code page of the client computer differs from the code page of the database in SQL Server 2005).
