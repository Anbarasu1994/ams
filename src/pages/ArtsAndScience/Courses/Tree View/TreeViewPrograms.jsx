import React from "react";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import "./TreeView.scss";
import UGProgramsSci from "../ScienceCourses/UG Programs/UGPrograms";
import PGProgramsSci from "../ScienceCourses/PG Programs/PGPrograms";
import PGProgramsArts from "../ArtsAndHumanity/PG Programs/PGPrograms";
import UGProgramsArts from "../ArtsAndHumanity/UG Programs/UGPrograms";

export default function TreeViewPrograms({ onComponentSelect }) {
  return (
    <Box className="Box">
      <TreeView
        className="TreeView"
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
      >
        <TreeItem nodeId="1" label="Arts and Humanity Courses">
          <TreeItem
            nodeId="2"
            label="UG Programs"
            onClick={() => onComponentSelect(<UGProgramsArts />)}
          />
          <TreeItem
            nodeId="3"
            label="PG Programs"
            onClick={() => onComponentSelect(<PGProgramsArts />)}
          />
        </TreeItem>
        <TreeItem nodeId="5" label="Science and Technology Courses">
          <TreeItem
            nodeId="6"
            label="UG Programs"
            onClick={() => onComponentSelect(<UGProgramsSci />)}
          />
          <TreeItem
            nodeId="7"
            label="PG Programs"
            onClick={() => onComponentSelect(<PGProgramsSci />)}
          />
        </TreeItem>
      </TreeView>
    </Box>
  );
}
