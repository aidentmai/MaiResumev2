using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Enums;

namespace backend.Dtos.Company
{
    public class CompanyGetDto
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public CompanySize Size { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}