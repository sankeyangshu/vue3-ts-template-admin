<!--
 * @Description: 登录页面
 * @Author: 王振
 * @Date: 2021-10-26 10:12:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 15:34:10
-->
<template>
  <div class="login">
    <div class="login__modal">
      <el-form ref="userForm" :model="loginForm" status-icon :rules="loginRules">
        <div class="login__modal__title">后台管理系统</div>
        <el-form-item prop="userName">
          <el-input
            type="text"
            prefix-icon="el-icon-user"
            v-model="loginForm.userName"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-unlock"
            v-model="loginForm.password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            class="login__modal__btn"
            @click="OnClickLogin(userForm)"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { validatePassword } from '@/rules';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import type { ElForm } from 'element-plus';

type FormInstance = InstanceType<typeof ElForm>; // 获取表单校验节点类型

// 用户账户密码
const loginForm = reactive({
  userName: '', // 用户名
  password: '', // 密码
});

// 登录校验规则
const loginRules = reactive({
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword,
    },
  ],
});

// 用户登录流程
const store = useStore(); // vuex仓库
const router = useRouter(); // 获取路由
const userForm = ref<FormInstance>(); // 表单校验节点
const loading = ref(false); // 按钮加载状态
const OnClickLogin = (formEl: FormInstance | undefined) => {
  // 进行表单校验
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true; // 按钮进入加载状态
      // 通过验证
      store.dispatch('user/login', loginForm).then((res) => {
        loading.value = false;
        router.push({ path: '/' }); // 跳转到首页
      });
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  // background-color: #2d3a4b;
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
