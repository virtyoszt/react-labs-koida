import Thumbnail from "./Thumbnail";
import {DataTable} from "grommet";

export default function NonVirtualizedTable(props) {
    const { data, viewThumbnail } = props;

    return (
        <DataTable
            sortable={true}
            replace={true}
            data={data}
            columns={[
                {
                    property: 'id',
                    header: 'id',
                    search: true,
                },
                {
                    property: 'albumId',
                    header: 'albumId',
                    search: true,
                },
                {
                    property: 'title',
                    header: 'title',
                    search: true,
                },
                {
                    property: 'thumbnailUrl',
                    header: 'thumbnailUrl',
                    render: datum =>
                        <Thumbnail url={datum.url} thumbnailUrl={datum.thumbnailUrl}title={datum.title} viewThumbnail={viewThumbnail}/>,
                    sortable: false,
                    search: true,
                }
            ]}
        />
    )
}