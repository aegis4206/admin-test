import { useLocation, Link } from "react-router-dom";
import { Box, Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { sideBarMenuData } from "../states/list";
import { MenuItem } from "../types/menu";
import { useAtom } from "jotai";

const Breadcrumbs = () => {
    const [list,] = useAtom<MenuItem[]>(sideBarMenuData)
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);

    const findParentPath = (list: MenuItem[], target: string, path: MenuItem[] = []): MenuItem[] => {
        for (const item of list) {
            const currentPath = [...path, item]
            if (item.path === target) return currentPath;
            if (!!item.children && item.children.length > 0) {
                const result = findParentPath(item.children, target, currentPath)
                if (result) return result;
            }

        }
        return [];
    }


    // 確保pathnames路徑長度大於0
    const pathList = () => {
        if (!!pathnames && pathnames.length >= 1) return findParentPath(list, pathnames[pathnames.length - 1]);
        return []
    };


    return (
        <Box sx={{ p: 2 }}>
            <MuiBreadcrumbs aria-label="breadcrumb">
                <Link to="/">Home</Link>
                {pathList().map((item, index) => {
                    const nolink = (index === pathnames.length - 1) || item.path === "";
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                    return nolink ? (
                        <span key={to}>{item.name}</span>
                    ) : (
                        <Link key={to} to={to}>
                            {item.name}
                        </Link>
                    );
                })}
            </MuiBreadcrumbs>
        </Box>
    );
};

export default Breadcrumbs