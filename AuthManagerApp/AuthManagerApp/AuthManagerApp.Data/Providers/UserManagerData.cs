using AuthManagerApp.Data.Contracts;
using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AuthManager.Entities;

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

        public async Task<bool> Delete(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.Id == id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<User> Get(string loginName, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.LoginName == loginName && user.Password == password);
            return user;
        }

        public async Task<User> Get(int id)
        {
            var user = await _context.Users.Include(e => e.RoleNavigation).FirstOrDefaultAsync(user => user.Id == id);
            return user;
        }

        public async Task<List<User>> GetAll()
        {
            return await _context.Users.Include(e => e.RoleNavigation).ToListAsync();
        }

        public async Task<bool> Update(UserDTO user)
        {
            var userToUpdate = await _context.Users.FirstOrDefaultAsync(f => f.Id == user.Id);
            if (userToUpdate == null)
            {
                return false;
            }
            userToUpdate.Address = user.Address;
            userToUpdate.Email = user.Email;
            userToUpdate.FullName = user.FullName;
            userToUpdate.LoginName = user.LoginName;
            userToUpdate.Phone = user.Phone;
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
