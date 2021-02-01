using AuthManagerApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AuthManagerApp.Data.Contracts
{
    public interface IRolePermissions
    {
        Task<List<Permission>> GetPermissionsByRole(int idRole);
    }
}
