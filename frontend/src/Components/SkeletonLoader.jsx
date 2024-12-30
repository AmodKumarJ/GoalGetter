import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
const SkeletonLoader = () => {
  return (
    <div className="w-full h-full">
      <Stack sx={{ width: "100%", height: "100%" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton variant="rounded" height={200} animation="wave" />
            <Skeleton variant="rounded" height={200} animation="wave" className="col-span-2" />
            <Skeleton variant="rounded" height={200} animation="wave" />
            <Skeleton variant="rounded" height={200} animation="wave" className="col-span-2"/>
            <Skeleton variant="rounded" height={200} animation="wave" />
            <Skeleton variant="rounded" height={200} animation="wave" />
            <Skeleton variant="rounded" height={200} animation="wave" />
            <Skeleton variant="rounded" height={200} animation="wave" className="col-span-3"/>
        </div>
      </Stack>
    </div>
  );
};

export default SkeletonLoader;
