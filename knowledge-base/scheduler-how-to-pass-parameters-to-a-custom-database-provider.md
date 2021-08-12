---
title: How to pass parameters to a custom database provider
description: How to pass parameters to a custom database provider. Check it now!
type: how-to
page_title: How to pass parameters to a custom database provider
slug: scheduler-how-to-pass-parameters-to-a-custom-database-provider
res_type: kb
---


## HOW-TO  
   
 How to pass parameters to a custom database provider  
   
## DESCRIPTION  
   
 There are quite a few scenarios in which you may need to pass a parameter to your custom database provider. For example, suppose that you want to apply a filter to the appointments collection of RadScheduler and leave only appointments with a specific Resource. The way to accomplish this is to pass a parameter to the custom provider which will carry the key for your filter rule.   
   
## SOLUTION  
   
 
1. Create your own class in App\_Code which inherits from the Page class. In the example, I create the MyPage.cs file.
2. Define the properties which will be passed to the provider in MyPage.cs.   
   ````C#
    private string _myparam;  
      
    public string MyParam  
    {  
 
        get { return _myparam; }  
 
        set { _myparam = value; }  
 
    } 
   ````
3. Set your page to inherit from MyPage:  
   ````C#
   public partial class _Default : MyPage 
   ````
4. Find and cast MyPage in the provider like this:  
   ````C#
   using (DbConnection conn = OpenConnection())  
   {  
         DbCommand cmd = DbFactory.CreateCommand();  
         cmd.Connection = conn;  
         cmd.CommandText = "SELECT [ClassID], [Subject], [Start], [End], [RecurrenceRule], [RecurrenceParentId] FROM [DbProvider_Classes]";  

         MyPage page1 = (MyPage) owner.Page;  
         string param1 = page1.MyParam;  
         using (DbDataReader reader = cmd.ExecuteReader())  
   { 
   ````
5. Once you have access to the parameter, you can implement your custom logic with it. For example, the highlighted code below will load only appointments with Text for the **Teacher** resource equal to the value of the parameter:  
   ````C#
   while (reader.Read())  
   {  
      Appointment apt = new Appointment();  
         
         apt.Owner = owner;  
         apt.ID = reader["ClassID"];  
         apt.Subject = Convert.ToString(reader["Subject"]);  
         apt.Start = DateTime.SpecifyKind(Convert.ToDateTime(reader["Start"]), DateTimeKind.Utc);  
         apt.End = DateTime.SpecifyKind(Convert.ToDateTime(reader["End"]), DateTimeKind.Utc);  
         apt.RecurrenceRule = Convert.ToString(reader["RecurrenceRule"]);  
         apt.RecurrenceParentID = reader["RecurrenceParentId"] == DBNull.Value ? null : reader["RecurrenceParentId"];  
   
         if (apt.RecurrenceParentID != null)  
         {  
               apt.RecurrenceState = RecurrenceState.Exception;  
         }  
         else 
               if (apt.RecurrenceRule != string.Empty)  
               {  
                  apt.RecurrenceState = RecurrenceState.Master;  
               }  
         LoadResources(apt);  
         if (apt.Resources.GetResourceByType("Teacher") != null)  
         {  
               if (apt.Resources.GetResourceByType("Teacher").Text == param1)  
               {  
                  appointments.Add(apt);  
               }  
         }                         
   } 
   ````

6. Now, because of step 2 and 3, you can easily access the new property MyParam and assign it a value in code-behind of your page:   

   ````C#
   protected void Page_Load(object sender, EventArgs e)  
   {  
      //Show only lectures by Mr John Doe  
      MyParam = "Mr John Doe";  
   
      //Show only lectures by Mrs Jane Smith  
      //MyParam = "Mrs Jane Smith";           
   } 
   ````
 
Attached is a [demo project](files/scheduler-passparamtocustomprovider.zip).


