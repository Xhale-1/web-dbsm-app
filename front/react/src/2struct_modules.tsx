//import "D:/1a_work/zadaniya/5_administrate_BD/app/7NewModuleApp/node_modules/react_dbsm_modules/dist/index.css"

import { type ReactNode } from "react"; // Add 'type' keyword here
import QueryPrev from "./modules/module1/module-query_preveiw"
import QueryWork from "./modules/module1/module-query_workspace"
import TablePrev from "./modules/module2/mod2_table_prev"
import TableWork from "./modules/module2/mod2_table_work"


interface ModuleInfo {
  id: string;
  preview: ReactNode;
  workspace: ReactNode;
}

export const modules: ModuleInfo[] = [
  {
    id: "query",
    preview: <QueryPrev/>,
    workspace: <QueryWork/>,
  },
  {
    id: "table",
    preview: <TablePrev/>,
    workspace: <TableWork/>
  }
];
