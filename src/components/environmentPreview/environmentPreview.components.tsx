import React, { useState } from "react";
import classnames from "classnames";
import "./environmentPreview.scss";
import { ReactComponent as ThreeDots } from "./threeDots.svg";
import { ReactComponent as Clock } from "./clock.svg";
import UsersView from "../usersView/usersView.component";
import ActionDropdown from "./actionDropdown/actionDropdown.component";
import MonitorOverview from "../monitorOverview/monitorOverview.component";
import IncomingTraffic from "../monitorOverview/monitor/incomingTraffic/incomingTraffic.monitor.component";
import UpTime from "../monitorOverview/monitor/uptime/uptime.monitor.component";
import EditButton from "../editButton/editButton.component";

const EnvironmentPreview: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    return (
        <div className={"environmentPreview-container"}>
            <div className={"header-container"}>
                <div className={"titles-container"}>
                    {!edit ?
                        <p className={'title'}>Pre-Prod</p> :
                        <input placeholder={"Pre-Prod"} className={"title input"} />
                    }
                    <div className={"metadata-container"}>
                        <Clock className={"metadataIcon"} />
                        <p className={"metadata"}>5 minutes ago</p>
                    </div>
                </div>
                <div className={"action-container"}>
                    <ThreeDots
                        className={"threeDots"}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                    <div className={classnames("action-dropdown", { disappear: !open })}>
                        <ActionDropdown />
                    </div>
                </div>
            </div>
            <div className={"content-container"}>
                <MonitorOverview>
                    <IncomingTraffic />
                    <UpTime />
                </MonitorOverview>
                <div className={"description-container"}>
                    {!edit ?
                        <p className={'description'}>סביבת בדיקות</p> :
                        <input placeholder={"סביבת בדיקות"} className={"description input"} />
                    }
                </div>
                <div className={"info-container"}></div>
            </div>
            <div className={"footer-container"}>
                <UsersView />
                <EditButton
                    onSubmit={async () => {
                        await new Promise(function (resolve) {
                            setTimeout(resolve, 2000);
                        });
                        return setEdit(false);
                    }}
                    onEdit={() => {
                        setEdit(true);
                        return Promise.resolve();
                    }}
                />
            </div>
        </div>
    );
};

export default EnvironmentPreview;
