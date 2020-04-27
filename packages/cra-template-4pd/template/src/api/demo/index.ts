import axios from '../axios';
import { ApiResponse } from 'shared/apiResponse';
import { DemoSummaryDto } from 'shared/dto/demo';

export const demo = {
    getDemo(): Promise<ApiResponse<DemoSummaryDto[]>> {
        return axios.get('/demo');
    },
};