using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Enums;

namespace backend.Dtos.Job
{
    public class JobGetDto
    {
        public long Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public JobLevel Level { get; set; }
        public long CompanyID { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;

    }
}