using AuthManagerApp.Data.Contracts;
using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;


namespace AuthManagerApp.Data.Providers
{
    public class UserManagerData : IUserManagerData
    {
        private readonly AuthManagerContext _context;

        public UserManagerData(AuthManagerContext context)
        {
            _context = context;
        }

        public User Add(User user)
        {
            _context.Add(user);
            _context.SaveChanges();

            return user;
        }

        public User Get(string loginName, string password)
        {
            var user = _context.Users.FirstOrDefault(user => user.LoginName == loginName);
            return user;
        }
    }
}
