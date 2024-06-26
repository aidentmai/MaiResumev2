import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ICandidate } from "../../types/global.typing";
import { baseUrl } from "../../constants/url";
import { PictureAsPdf } from "@mui/icons-material";
import "./candidates-grid.scss"

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First Name", width: 120 },
  { field: "lastName", headerName: "Last Name", width: 120 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "coverLetter", headerName: "CV", width: 500 },

  {
    field: "resume",
    headerName: "Download",
    width: 150,
    renderCell: (params) => (
      <a href={`${baseUrl}/Candidate/Download/${params.row.resume}`} download>
        <PictureAsPdf />
      </a>
    ),
  },
];

interface ICandidatesGridProps {
  data: ICandidate[];
}

const CandidatesGrid = ({ data }: ICandidatesGridProps) => {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="candidates-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default CandidatesGrid;
