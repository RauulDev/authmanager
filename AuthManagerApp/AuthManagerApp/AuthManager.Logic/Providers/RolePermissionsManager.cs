using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Contracts;
using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AuthManager.Logic.Providers
{
    public class RolePermissionsManager : IRolePermissionsManager
    {
        private readonly IRolePermissionsData _rolePermissionsData;

        public RolePermissionsManager(IRolePermissionsData rolePermissionsData)
        {
            _rolePermissionsData = rolePermissionsData;
        }
        public List<Permission> GetPermissionsByRole(int idRole)
        {
            return _rolePermissionsData.GetPermissionsByRole(idRole);
        }

        public List<Role> GetRoles()
        {
            return _rolePermissionsData.GetRoles();
        }
    }
}
