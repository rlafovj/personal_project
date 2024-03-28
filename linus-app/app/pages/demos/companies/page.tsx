'use client'

import CompaniseColumns from "@/app/organisms/columns/companise-columns";
import CompaniseRows from "@/app/organisms/rows/companise-rows";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

export default function Companise(){
    const router = useRouter(); 

    return (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={CompaniseRows()}
            columns={CompaniseColumns()}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      );
}