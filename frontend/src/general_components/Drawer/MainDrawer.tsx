import React from "react";
import { Drawer } from "@mui/material";
import QueriesController from "./QueriesController";
import Parameters from "./Parameters";
import styles from "./styles.module.scss";
import { CREATEQUERYTYPE, FINDQUERYTYPE } from "_/utils/constants";
import { userModeType } from "_/redux/reducers/mainPage/mainPageCreators";



function MainDrawer(props: any) {
  //TODO ПЕРЕПИСАТЬ ЛОГНИКУ СОСТОЯНИЯ РЕДАКСА ИЗ РЕАКТ СТЕЙТОВ
  const [curActiveBlock, setActiveBlock] = React.useState(FINDQUERYTYPE)
  const changeActiveBlock = (activeBlock: userModeType) => setActiveBlock(activeBlock)
  

  return (
    <Drawer anchor={"left"} open={props.isOpen} onClose={props.toggleDrawer}>
      <div className={styles["drawer-inner"]}>
        <QueriesController
          curActiveBlock={curActiveBlock}
          onClickFunc={() => changeActiveBlock(FINDQUERYTYPE)}
          type={"find"}
        />
        <QueriesController
          curActiveBlock={curActiveBlock}
          onClickFunc={() => changeActiveBlock(CREATEQUERYTYPE)}
          type={"create"}
        />
        <Parameters />
      </div>
    </Drawer>
  );
}

export default MainDrawer;