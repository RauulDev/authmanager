using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AuthManagerApp.Data.Contracts
{
    public interface IUserManagerData
    {
        User Get(string loginName, string password);
        User Add(User user);
    }
}
