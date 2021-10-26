/*
 * @Description: getters文件
 * @Author: 王振
 * @Date: 2021-10-26 15:26:30
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 15:26:32
 */

const getters = {
  token: (state: any) => state.user.token, // 用户唯一标识token
};

export default getters;
