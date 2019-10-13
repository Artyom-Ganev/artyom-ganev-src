import axios from 'axios';
import IBlog from './IBlog';

const BASE_URL = `https://shielded-brushlands-46595.herokuapp.com/blog/`;
const REQUEST_CONFIG = { headers: { 'x-requested-with': 'xhr' } };

interface IListResponse {
    data: IBlog[];
}

interface IGetResponse {
    data: IBlog;
}

/**
 * Blog List Source
 */
export default class Blog {

    /**
     * Get all Blog records
     */
    public static getList(): Promise<IBlog[]> {
        return new Promise((resolve) => {
            axios.get(BASE_URL, REQUEST_CONFIG)
                .then((res: IListResponse) => {
                    resolve(res.data || []);
                })
                .catch(() => resolve([]));
        });
    }

    /**
     * Get single Blog record
     * @param {String} id to find record
     */
    public static getById(id: string): Promise<IBlog | void> {
        return new Promise((resolve) => {
            axios.get(`${BASE_URL}/${id}`, REQUEST_CONFIG)
                .then((res: IGetResponse) => {
                    resolve(res.data || null);
                })
                .catch(() => resolve());
        });
    }
}
