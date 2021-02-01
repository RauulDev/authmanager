using AuthManagerApp.Data.Contracts;
using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AuthManagerApp.Data.Providers
{
    public class UserManagerData : IUserManagerData
    {
        private readonly AuthManagerContext _context;

        public UserManagerData(AuthManagerContext context)
        {
            _context = context;
        }

        public async Task<User> Add(User user)
        {
            _context.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> Get(string loginName, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.LoginName == loginName && user.Password == password);
            return user;
        }

        public async Task<User> Get(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.Id == id);
            return user;
        }

        public async Task<List<User>> GetAll()
        {
            return await _context.Users.ToListAsync();
        }
    }
}
