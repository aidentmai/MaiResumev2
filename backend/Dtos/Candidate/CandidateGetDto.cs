using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos.Candidate
{
    public class CandidateGetDto
    {
        public long Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Resume { get; set; } = string.Empty;
        public string CoverLetter { get; set; } = string.Empty;
        public long JobID { get; set; }
        public string JobTitle { get; set; } = string.Empty;
    }
}