using AuthManager.Entities;
using AuthManagerApp.Data.Models;
using AuthManagerApp.Data.Providers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AuthManagerApp.Data.Contracts
{
    public interface IUserManagerData
    {
        Task<User> Get(string loginName, string password);
        Task<User> Get(int id);
        Task<User> Add(User user);
        Task<List<User>> GetAll();
        Task<bool> Delete(int id);
        Task<bool> Update(UserDTO user);
    }
}
