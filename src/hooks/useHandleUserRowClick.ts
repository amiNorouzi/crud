import {useRouter} from 'next/navigation';
import {useCallback} from 'react';
import type {GridEventListener} from '@mui/x-data-grid/models/events/gridEventListener';

export default function useHandleUserRowClick() {
    const router = useRouter();
    return useCallback<GridEventListener<'rowClick'>>((params, event, details) => {
        router.push(`profile/${params.id}`);
    }, [router]);
}
