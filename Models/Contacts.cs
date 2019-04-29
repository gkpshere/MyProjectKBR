namespace NetCoreWebApp.Models  
{  
    public class Contacts  
    {  
        private ContactsContext context;  
  
        public int Id { get; set; }  
  
        public string Name { get; set; }  
  
        public string EmailID { get; set; }  
  
        public int Phone { get; set; }  
  
        public string Comments { get; set; }  
    }  
}