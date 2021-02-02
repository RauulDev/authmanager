using System;
using System.Collections.Generic;
using System.Text;

namespace AuthManager.Entities
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string LoginName { get; set; }
        public short? Age { get; set; }
        public string Role { get; set; }
    }
}
