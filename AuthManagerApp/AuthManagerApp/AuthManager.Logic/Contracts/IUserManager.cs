using AuthManager.Entities;
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
        Task<UserDTO> Get(int id);
        Task<List<UserDTO>> GetAll();
        Task<bool> Delete(int id);
        Task<bool> Update(UserDTO user);
    }
}
