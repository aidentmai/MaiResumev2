using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Enums;

namespace backend.Dtos.Job
{
    public class JobCreateDto
    {
        public string Title { get; set; } = string.Empty;
        public JobLevel Level { get; set; }

        // Relations
        public long CompanyID { get; set; }
    }
}