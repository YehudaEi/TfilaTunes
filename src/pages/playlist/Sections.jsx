import { Box, Menu, MenuItem, Typography } from "@mui/material";

import React from "react";
import { sectionsStyles as styles } from "./style";
import { parseText } from "../../utils/styles";

export function SectionsMenu({ tefila, anchorState, setSection, ...props }) {
    const [anchorEl, setAnchorEl] = anchorState;

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            disableScrollLock={true}
            {...props}
        >
            {tefila.sections.map((section, index) => {
                return (
                    <MenuItem
                        onClick={() => {
                            setSection(index);
                            setAnchorEl(null);
                        }}
                        key={index}
                    >
                        {section.name}
                    </MenuItem>
                );
            })}
        </Menu>
    );
}

export function Sections({ tefila, sectionRefs, onClick, ...props }) {
    return (
        <>
            <Box {...props}>
                {tefila?.sections.map((section, index) => {
                    return (
                        <Box
                            component="section"
                            key={index}
                            ref={(el) => (sectionRefs.current[index] = el)}
                            onClick={() => {
                                if (onClick) onClick(index);
                            }}
                        >
                            <Typography sx={styles.section}>
                                {parseText(section.text)}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}
