using System;
using System.Collections.Generic;
using System.Text;

namespace AuthManager.Entities
{
    public class Token
    {
        public string AccessToken { get; set; }
        public int ExpirationTime { get; set; }
    }
}
