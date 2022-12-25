import {useEffect, useState} from "react";
import {Box, TextInput, FormField} from "grommet";
import NonVirtualizedTable from "./NonVirtualizedTable";


export default function Data(props) {
    const {dataUrl} = props;
    const [data, setData] = useState([]);
    const [viewThumbnail] = useState(false);
    const [maxWords, setMaxWords] = useState(7);

    useEffect(() => {
        fetch(dataUrl)
            .then(response => {
                if (response.ok) return response.json()
                throw response
            })
            .then(json => setData(json.filter((item) => item.title.split(' ').length <= maxWords)))
            .catch(error => console.error(error));
    }, [dataUrl, maxWords]);

    return (
        <Box pad="large" gap="medium">
            <Box direction="row" gap="medium">
                <FormField label="Max words" htmlFor="maxWords">
                    <TextInput type="number" value={maxWords} id="maxWords" onChange={event => setMaxWords(event.target.value)}/>
                </FormField>
            </Box>
            {
                <NonVirtualizedTable data={data} viewThumbnail={viewThumbnail}/>
            }
        </Box>
    )
}