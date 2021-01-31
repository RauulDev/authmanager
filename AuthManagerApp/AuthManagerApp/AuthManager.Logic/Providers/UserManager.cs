using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace AuthManager.Logic.Providers
{
    public class UserManager : IUserManager
    {
        private readonly IUserManagerData _userManagerData;

        public UserManager(IUserManagerData userManagerData)
        {
            _userManagerData = userManagerData;
        }
        public bool Login(string loginName, string password)
        {
            var user = _userManagerData.GetUser(loginName, password);
            return user != null;
        }
    }
}
