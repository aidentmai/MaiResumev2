using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Enums;

namespace backend.Entities
{
    public class Company : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public CompanySize Size { get; set; }

        // Relations
        public List<Job> Jobs { get; set; }
    }
}