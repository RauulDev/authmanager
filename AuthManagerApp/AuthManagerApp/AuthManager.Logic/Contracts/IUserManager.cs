using System;
using System.Collections.Generic;
using System.Text;

namespace AuthManager.Logic.Contracts
{
    public interface IUserManager
    {
        bool Login(string loginName, string password);
    }
}
