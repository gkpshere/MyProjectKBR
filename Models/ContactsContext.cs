using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace NetCoreWebApp.Models
{
    public class ContactsContext
    {
        public string ConnectionString { get; set; }

        public ContactsContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public void SaveContacts(Contacts ContactData)
        {

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("insert into contacts(contact_name,phone_number,email_id,comments)values('Gayathri','','gkpshere@gmail.com','testfromapplication');", conn);
                cmd.ExecuteNonQuery();

            }
            return;
        }

    }
}