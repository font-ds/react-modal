import {request} from './http'

export const getMessage=()=>{
    return request(
        'http://127.0.0.1:777/getMessage'
    )
}