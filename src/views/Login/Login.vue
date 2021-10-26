<!--
 * @Description: 登录页面
 * @Author: 王振
 * @Date: 2021-10-26 10:12:38
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 11:18:55
-->
<template>
  <div class="login">
    <div class="login__modal">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="login__modal__title">后台管理系统</div>
        <el-form-item prop="userName">
          <el-input
            type="text"
            prefix-icon="el-icon-user"
            v-model="user.userName"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            type="password"
            prefix-icon="el-icon-view"
            v-model="user.passWord"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login__modal__btn" @click="OnClickLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

// 表单校验
const useCheckForm = () => {
  const content = reactive({
    rules: {
      userName: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        },
      ],
      passWord: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        },
      ],
    }, // 校验规则
  });
  const { rules } = toRefs(content);
  return {
    rules,
  };
};

// 用户登录
const useLoginEffect = () => {
  const userForm = ref(); // 表单校验节点
  const content = reactive({
    user: {
      userName: '', // 用户名
      passWord: '', // 密码
    },
  });

  // 用户点击登录
  const OnClickLogin = () => {
    userForm.value.validate((valid: any) => {
      if (valid) {
        console.log('校验成功');
      } else {
        return false;
      }
    });
  };

  const { user } = toRefs(content);
  return { user, OnClickLogin, userForm };
};

export default defineComponent({
  name: 'Login',
  setup() {
    // 表单校验
    const { rules } = useCheckForm();
    // 用户登录
    const { user, OnClickLogin, userForm } = useLoginEffect();
    return { rules, user, OnClickLogin, userForm };
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  &__modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;
    &__title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    &__btn {
      width: 100%;
    }
  }
}
</style>
