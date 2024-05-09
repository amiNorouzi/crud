import {useCallback, useState} from 'react';
import type {GridRowSelectionModel} from '@mui/x-data-grid/models/gridRowSelectionModel';

export default function useHandleSelectedRows() {
    const [selectedRowsIds, setSelectedRowsIds] = useState<number[]>([]);
    const handleSelectRows = useCallback((ids: GridRowSelectionModel) => {
        setSelectedRowsIds(ids as number[]);
    }, []);

    return {selectedRowsIds, handleSelectRows};
}
