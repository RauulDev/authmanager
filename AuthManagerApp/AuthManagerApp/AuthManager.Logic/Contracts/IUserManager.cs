using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AuthManager.Logic.Contracts
{
    public interface IUserManager
    {
        Task<User> Add(User user);
        Task<User> Get(int id);
        Task<List<User>> GetAll();
    }
}
