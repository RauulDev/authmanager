using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AuthManagerApp.Data.Contracts
{
    public interface IRolePermissionsData
    {
        List<Permission> GetPermissionsByRole(int idRole);
        List<Role> GetRoles();
    }
}
