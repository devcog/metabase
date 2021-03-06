/* eslint "react/prop-types": "warn" */
import React from "react";
import PropTypes from "prop-types";
import S from "metabase/components/Sidebar.css";
import { t } from 'c-3po';
import Breadcrumbs from "metabase/components/Breadcrumbs.jsx";
import SidebarItem from "metabase/components/SidebarItem.jsx"

import cx from 'classnames';
import pure from "recompose/pure";

const MetricSidebar = ({
    metric,
    user,
    style,
    className
}) =>
    <div className={cx(S.sidebar, className)} style={style}>
        <ul>
            <div className={S.breadcrumbs}>
                <Breadcrumbs
                    className="py4"
                    crumbs={[[t`Metrics`,"/reference/metrics"],
                             [metric.name]]}
                    inSidebar={true}
                    placeholder={t`Data Reference`}
                />
            </div>
                <SidebarItem key={`/reference/metrics/${metric.id}`} 
                             href={`/reference/metrics/${metric.id}`} 
                             icon="document" 
                             name={t`Details`} />
                <SidebarItem key={`/reference/metrics/${metric.id}/questions`} 
                             href={`/reference/metrics/${metric.id}/questions`} 
                             icon="all" 
                             name={t`Questions about ${metric.name}`} />
             { user && user.is_superuser &&

                <SidebarItem key={`/reference/metrics/${metric.id}/revisions`}
                             href={`/reference/metrics/${metric.id}/revisions`}
                             icon="history" 
                             name={t`Revision history for ${metric.name}`} />
             }
        </ul>
    </div>

MetricSidebar.propTypes = {
    metric:          PropTypes.object,
    user:          PropTypes.object,
    className:      PropTypes.string,
    style:          PropTypes.object,
};

export default pure(MetricSidebar);

