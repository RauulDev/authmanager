using AuthManager.Entities;
using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<bool> Delete(int id)
        {
            return await _userManagerData.Delete(id);
        }

        public async Task<UserDTO> Get(int id)
        {
            var user = await _userManagerData.Get(id);
            return new UserDTO()
            {
                Id = user.Id,
                Address = user.Address,
                Age = user.Age,
                Email = user.Email,
                FullName = user.FullName,
                Phone = user.Phone,
                Role = user.RoleNavigation.Name
            };
        }

        public async Task<List<UserDTO>> GetAll()
        {
            var users = (await _userManagerData.GetAll())
                .Select(usr => new UserDTO()
                {
                    Id = usr.Id,
                    Phone = usr.Phone,
                    FullName = usr.FullName,
                    Email = usr.Email,
                    Age = usr.Age,
                    Address = usr.Address,
                    Role = usr.RoleNavigation.Name,
                    LoginName = usr.LoginName
                }).ToList();
            //var usersMapped = 

            return users;
        }
    }
}
