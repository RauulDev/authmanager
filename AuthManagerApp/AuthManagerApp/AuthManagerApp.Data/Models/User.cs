using System;
using System.Collections.Generic;

#nullable disable

namespace AuthManagerApp.Data.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public short? Age { get; set; }
        public int Role { get; set; }
        public string LoginName { get; set; }
        public string Password { get; set; }

        public virtual Role RoleNavigation { get; set; }
    }
}
