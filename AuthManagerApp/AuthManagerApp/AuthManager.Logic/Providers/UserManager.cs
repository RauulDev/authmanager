using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AuthManager.Logic.Providers
{
    public class UserManager : IUserManager
    {
        private readonly IUserManagerData _userManagerData;

        public UserManager(IUserManagerData userManagerData)
        {
            _userManagerData = userManagerData;
        }

        public async Task<AuthManagerApp.Data.Models.User> Add(AuthManagerApp.Data.Models.User user)
        {
            return await _userManagerData.Add(user);
        }

        public async Task<AuthManagerApp.Data.Models.User> Get(int id)
        {
            return await _userManagerData.Get(id);
        }

        public async Task<List<AuthManagerApp.Data.Models.User>> GetAll()
        {
            return await _userManagerData.GetAll();   
        }

        public bool Login(string loginName, string password)
        {
            var user = _userManagerData.Get(loginName, password);
            return user != null;
        }
    }
}
