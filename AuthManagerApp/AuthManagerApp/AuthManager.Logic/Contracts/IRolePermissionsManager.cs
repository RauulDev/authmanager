using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AuthManager.Logic.Contracts
{
    public interface IRolePermissionsManager
    {
        List<Permission> GetPermissionsByRole(int idRole);
    }
}
