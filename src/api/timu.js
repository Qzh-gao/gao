import base from './base'; // 导入接口域名列表
import axios from '@/requst/http'; // 导入http中创建的axios实例

const timu={
    /*获取用户信息列表 */
    gettimu(){
        return axios.get(`${base.bef}timu/getList`)
    },
}

export default timu;